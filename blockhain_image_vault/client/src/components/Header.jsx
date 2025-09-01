import { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = ({ handleWalletConnection, isConnecting, selectedAccount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 py-6 lg:px-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Crypted Vault
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-cyan-400 transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition-colors duration-200">How It Works</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-200">About</a>
          <button
            onClick={handleWalletConnection}
            disabled={isConnecting}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedAccount
                ? 'bg-green-600 hover:bg-green-700'
                : isConnecting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
            }`}
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Connecting...</span>
              </div>
            ) : selectedAccount ? (
              `Connected: ${selectedAccount.substring(0, 6)}...${selectedAccount.substring(selectedAccount.length - 4)}`
            ) : (
              'Connect Wallet'
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-gray-800/95 backdrop-blur-lg rounded-xl p-6 border border-gray-700 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="hover:text-cyan-400 transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors duration-200">How It Works</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-200">About</a>
            <button
              onClick={handleWalletConnection}
              disabled={isConnecting}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedAccount
                  ? 'bg-green-600 hover:bg-green-700'
                  : isConnecting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
              }`}
            >
              {isConnecting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Connecting...</span>
                </div>
              ) : selectedAccount ? (
                `Connected: ${selectedAccount.substring(0, 6)}...${selectedAccount.substring(selectedAccount.length - 4)}`
              ) : (
                'Connect Wallet'
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;