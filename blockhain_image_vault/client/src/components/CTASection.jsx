const CTASection = ({ handleWalletConnection, isConnecting, selectedAccount }) => {
  return (
    <section className="relative px-4 py-20 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-12 backdrop-blur-sm border border-cyan-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Images?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Crypted Vault with their most important digital assets. 
            Start storing your images securely on the blockchain today.
          </p>
          <button 
            onClick={handleWalletConnection}
            disabled={isConnecting}
            className={`px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
              isConnecting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:shadow-cyan-500/25'
            }`}
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Connecting...</span>
              </div>
            ) : selectedAccount ? (
              'Enter Your Vault'
            ) : (
              'Get Started for Free'
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;