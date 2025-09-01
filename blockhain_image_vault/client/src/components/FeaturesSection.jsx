import { Shield, Database, Link2, Eye, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption ensures your images remain private and secure at every step."
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Decentralized IPFS Storage",
      description: "Your images are stored across a distributed network, eliminating single points of failure."
    },
    {
      icon: <Link2 className="w-12 h-12" />,
      title: "Blockchain Verification",
      description: "Smart contracts provide immutable proof of storage and data integrity verification."
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "User-Controlled Access",
      description: "You maintain complete control over who can access your stored images and data."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Permanent Records",
      description: "Once stored, your images and their hashes become permanent, tamper-proof records."
    }
  ];

  return (
    <section id="features" className="relative px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unmatched <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Security</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technology to provide enterprise-level security for your most valuable digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="space-y-4">
                  <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;