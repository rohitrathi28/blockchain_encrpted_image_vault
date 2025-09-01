import  { useState, useEffect } from 'react';



 
import Navbar from "../components/Navbar";
import UploadImage from '../components/UploadImage';
import GetImage from '../components/GetImage';

const Homes = () => {
  const [reload, setReload] = useState(false);

  const reloadEffect = () => {
    setReload(!reload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-8 space-y-12">
          <UploadImage reloadEffect={reloadEffect} />
          <GetImage reload={reload} />
        </div>
      </div>
    </div>
  );
};

export default Homes;