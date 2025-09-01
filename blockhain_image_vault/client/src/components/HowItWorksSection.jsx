import { Upload, Lock, Database, Hash, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
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

  return (
    <section id="how-it-works" className="relative px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our revolutionary 5-step process ensures your images are stored with maximum security and complete decentralization
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-cyan-400 font-semibold">Step {index + 1}</div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;