import { useState, useEffect } from 'react';
import { CheckCircle, Upload, Lock, Database, Hash } from 'lucide-react';

const HeroSection = ({ handleWalletConnection, isConnecting, selectedAccount }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Image",
      description: "Securely upload your image through our encrypted interface"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Server Encryption", 
      description: "Advanced AES-256 encryption protects your data"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "IPFS Storage",
      description: "Decentralized storage with unique hash generation"
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Hash Verification",
      description: "Blockchain smart contract verifies data integrity"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Secure Storage",
      description: "Permanent, tamper-proof storage on the blockchain"
    }
  ];

  // Auto-cycle through steps in hero animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 py-20 lg:px-8 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Secure Your Images on the{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Blockchain
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                The world's first decentralized image storage platform combining military-grade encryption, 
                IPFS technology, and blockchain verification for ultimate security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWalletConnection}
                disabled={isConnecting}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isConnecting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:shadow-cyan-500/25'
                }`}
              >
                {isConnecting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Connecting Wallet...</span>
                  </div>
                ) : selectedAccount ? (
                  'Enter Vault'
                ) : (
                  'Connect Wallet to Start'
                )}
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105">
                View Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Open source</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>100% decentralized</span>
              </div>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 p-8">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className={`transition-all duration-500 transform ${currentStep === 0 ? 'scale-110 text-cyan-400' : 'scale-100 text-gray-400'}`}>
                    {steps[currentStep].icon}
                  </div>
                  <h3 className="text-xl font-semibold">{steps[currentStep].title}</h3>
                  <p className="text-gray-400 text-sm max-w-xs">{steps[currentStep].description}</p>
                  
                  {/* Step indicators */}
                  <div className="flex justify-center space-x-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStep ? 'bg-cyan-400 scale-125' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;