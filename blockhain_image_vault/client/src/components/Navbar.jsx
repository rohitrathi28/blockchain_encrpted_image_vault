// Enhanced Navbar Component
import ConnectedAccount from "./ConnectedAccount";
const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-lg border-b border-gray-700/50 flex justify-center items-center">
      <ConnectedAccount />
    </div>
  );
};
export default Navbar;