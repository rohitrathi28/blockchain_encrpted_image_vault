import { useWeb3Context } from "../contexts/useWeb3Context";
// Enhanced Connected Account Component
const ConnectedAccount = () => {
  const { web3State } = useWeb3Context();
  const { selectedAccount } = web3State;
  
  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:px-10">
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-gray-300 text-sm">Connected Account:</span>
          <span className="font-mono text-cyan-400 font-semibold">
            {selectedAccount ? `${selectedAccount.substring(0, 6)}...${selectedAccount.substring(selectedAccount.length - 4)}` : 'Not Connected'}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ConnectedAccount;