/*const ethers = require('ethers')
const UserModel = require('../models/User')
const {PINATA_APIKEY,PINATA_SECRETKEY}=require('../config/serverConfig')
const {generateEncryptionKey} = require('../utils/generateKey')
const {encryptFile}=require('../utils/encryption')

async function uploadImageController(req,res,next){
    try {
           const address = "0x9ad5e72890b0ec995e20397d3b841eb42e975bdc"
        const userAddress=address.toLowerCase()
        const user=await UserModel.findOne({userAddress:userAddress})
        if(!user){
            throw new Error("User does not exist")
        }
        if(user.encryptionKey===null){
            const encryptionKey=generateEncryptionKey(32);
            user.encryptionKey=encryptionKey;
            await user.save()
        }
        const { encryptedData, iv } = encryptFile(req.file.buffer,user.encryptionKey);

        const pinataSDK = require('@pinata/sdk');
        const pinata = new pinataSDK({ pinataApiKey: PINATA_APIKEY, pinataSecretApiKey: PINATA_SECRETKEY });
        const resPinata = await pinata.pinJSONToIPFS({encryptedData,iv})

        res.status(200).json({ipfsHash:resPinata.IpfsHash,message:"Image Uploaded"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Internal Server Error"})
    }
  
}
module.exports={uploadImageController}*/

const ethers = require('ethers')
const UserModel = require('../models/User')
const {PINATA_APIKEY,PINATA_SECRETKEY}=require('../config/serverConfig')
const {generateEncryptionKey} = require('../utils/generateKey')
const {encryptFile}=require('../utils/encryption')

async function uploadImageController(req,res,next){
    try {
        
    const userAddress = req.address

    const User= await UserModel.findOne({userAddress:userAddress.toLowerCase()})
    if(!User){
        throw new Error("User does not exist")
    }    
    if(User.encryptionKey===null){
        const encryptionKey=generateEncryptionKey(32);
        User.encryptionKey=encryptionKey;
        await User.save()
    }
    const { encryptedData, iv } = encryptFile(req.file.buffer, User.encryptionKey);
    console.log('Encrypted data:', encryptedData);
    console.log('IV:', iv);

        console.log('File received:', req.file);
        const pinataSDK = require('@pinata/sdk');
        const pinata = new pinataSDK({ pinataApiKey: PINATA_APIKEY, pinataSecretApiKey: PINATA_SECRETKEY })
         const resPinata = await pinata.pinJSONToIPFS({encryptedData,iv})
        console.log('Pinata response:', resPinata);
        // Send the IPFS hash back in the response
       
        res.status(200).json({ipfsHash:resPinata.IpfsHash,message:"Image Uploaded"})
   
    } catch (error) {
        console.error('Error uploading image:', error);
        // Handle the error appropriately, e.g., send an error response
       res.status(500).json({ error: 'Failed to upload image' });
    }
  
}
module.exports={uploadImageController}
