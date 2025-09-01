import { Shield, Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative px-4 py-12 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Crypted Vault
              </span>
            </div>
            <p className="text-gray-400">
              The future of secure, decentralized image storage built on blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Features</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Security</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">API</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Pricing</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Documentation</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Blog</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Support</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Status</a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">Cookie Policy</a>
              <a href="#" className="block hover:text-cyan-400 transition-colors duration-200">GDPR</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Crypted Vault. All rights reserved. Built with blockchain technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;