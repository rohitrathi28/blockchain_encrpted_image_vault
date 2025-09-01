import axios from "axios";
import { useWeb3Context } from "../contexts/useWeb3Context";
import { useEffect, useState } from "react";
import {toast} from "react-hot-toast"

import { 
  
  Shield, 
  Eye, 
  CircleArrowLeft, 
  CircleArrowRight, 
  FileImage,
  Loader2,
  
} from 'lucide-react';
const GetImage = ({ reload }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage, setImagePerPage] = useState(2);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;

  useEffect(() => {
    try {
      const getImageHashes = async () => {
        const ipfsHashes = await contractInstance.viewFiles(selectedAccount);
        return ipfsHashes;
      };

      const getImage = async () => {
        setLoading(true);
        const ipfsHashes = await getImageHashes();
        const ipfsHashArray = Object.values(ipfsHashes);

        const url = `http://localhost:3000/api/getImage?page=${currentPage}&limit=${imagePerPage}`;
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "x-access-token": token
          }
        };
        
        const res = await axios.post(url, ipfsHashArray, config);
        const imagesData = res.data.depcryptedImageArr;
        setImages(imagesData);
        setLoading(false);
      };

      contractInstance && getImage();
    } catch (error) {
      toast.error("Error Fetching Images");
    } finally {
      setLoading(false);
    }
  }, [contractInstance, currentPage, imagePerPage, selectedAccount, reload]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Your Secure Images
            </h2>
          </div>
          <p className="text-gray-400 text-lg">View and manage your blockchain-secured image collection</p>
        </div>

        {/* Image Gallery */}
        <div className="min-h-[300px] flex items-center justify-center">
          {!loading ? (
            images.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {images.map((imgData, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={`data:image/jpeg;base64,${imgData}`}

                        alt={`Secure Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">Image {index + 1}</span>
                          <div className="flex items-center space-x-1">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-xs text-green-400">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                  <FileImage className="w-10 h-10 text-gray-400" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-300 mb-2">No Images Found</p>
                  <p className="text-gray-400">Upload your first image to get started</p>
                </div>
              </div>
            )
          ) : (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
              </div>
              <p className="text-xl font-semibold text-gray-300">Loading Your Images...</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <CircleArrowLeft className="w-6 h-6 text-gray-300" />
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Page</span>
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-lg">{currentPage}</span>
            </div>
          </div>
          
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={loading}
            className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <CircleArrowRight className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        {/* Items per page selector */}
        <div className="flex justify-center items-center mt-6">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400">Images per page:</span>
            <select
              value={imagePerPage}
              onChange={(e) => setImagePerPage(Number(e.target.value))}
              className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-1 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
              <option value={8}>8</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default GetImage;