import { useState, useEffect } from 'react';
import { useWeb3Context } from "../contexts/useWeb3Context";
import { connectWallet } from "../utils/connectWallet";
import { useNavigate } from "react-router-dom";

// Import modular components
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Wallet = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  
  const navigateTo = useNavigate();
  const { updateWeb3State, web3State } = useWeb3Context();
  const { selectedAccount } = web3State;

  // Navigate to home if wallet is already connected
  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/home");
    }
  }, [selectedAccount, navigateTo]);

  // Handle wallet connection with your existing logic
  const handleWalletConnection = async () => {
    setIsConnecting(true);
    try {
      const { contractInstance, selectedAccount } = await connectWallet();
      updateWeb3State({ contractInstance, selectedAccount });
    } catch (error) {
      console.error('Wallet connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <AnimatedBackground />
      
      <Header 
        handleWalletConnection={handleWalletConnection}
        isConnecting={isConnecting}
        selectedAccount={selectedAccount}
      />
      
      <HeroSection 
        handleWalletConnection={handleWalletConnection}
        isConnecting={isConnecting}
        selectedAccount={selectedAccount}
      />
      
      <HowItWorksSection />
      
      <FeaturesSection />
      
      <CTASection 
        handleWalletConnection={handleWalletConnection}
        isConnecting={isConnecting}
        selectedAccount={selectedAccount}
      />
      
      <Footer />
    </div>
  );
};

export default Wallet;