import axios from "axios";
import { useState } from "react";
import { useWeb3Context } from "../contexts/useWeb3Context";
import toast from "react-hot-toast";

import { 
  Upload, 
  ImageUp, 
  Shield,  
  FileImage,
  Loader2,
  CheckCircle,
  AlertCircle,
  Database,
  Lock
} from 'lucide-react';
const UploadImage = ({ reloadEffect }) => {
  const [file, setFile] = useState(null);
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Your existing upload hash logic
  const uploadImageHash = async (ipfsHash) => {
    await toast.promise(contractInstance.uploadFile(selectedAccount, ipfsHash), {
      loading: "Transaction is pending",
      success: "Transaction is successful", 
      error: "Transaction failed"
    });
  };

  // Your existing upload logic
  const handleImageUpload = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      const url = `http://localhost:3000/api/uploadImage`;
      const token = localStorage.getItem("token");
      
      const config = {
        headers: {
          "x-access-token": token
        }
      };
      
      const res = await axios.post(url, formData, config);
      
      toast.success("image uploaded");
      await uploadImageHash(res.data.ipfsHash);
      setLoading(false);
      reloadEffect();
    } catch (error) {
      console.error(error);
      toast.error("Image Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Upload Your Images
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Secure your images with Web3 technology and blockchain verification</p>
        </div>

        {/* Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 transition-all duration-300 ${
            dragActive
              ? 'border-cyan-400 bg-cyan-400/10'
              : file
              ? 'border-green-400 bg-green-400/10'
              : 'border-gray-600 hover:border-gray-500'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center space-y-6">
            {file ? (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-green-400 mb-2">File Selected</p>
                  <p className="text-gray-400">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                  <FileImage className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-300 mb-2">Choose files or drag and drop</p>
                  <p className="text-gray-400">JPG, JPEG, PNG files are supported</p>
                </div>
              </div>
            )}

            {/* File Input */}
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setFile(e.target.files[0])}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Upload Button */}
        <div className="mt-8 text-center">
          {file ? (
            <button
              onClick={handleImageUpload}
              disabled={loading}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Uploading...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <ImageUp className="w-5 h-5" />
                  <span>Upload to Blockchain</span>
                </div>
              )}
            </button>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span className="text-lg font-semibold">Choose a File To Upload</span>
            </div>
          )}
        </div>

        {/* Security Features */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
            <Lock className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-gray-300">End-to-End Encryption</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
            <Database className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-300">IPFS Storage</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">Blockchain Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

 
export default UploadImage;

         // await toast.promise(axios.post(url,formData),{
            //     loading:"Image is uploading",
            //     success:async(res)=>{
            //         await uploadImageHash(res.data.ipfsHash) 
            //         return "Image upload successful"
            //     },
            //     error:"Image Upload failed"
            // })