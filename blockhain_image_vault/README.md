# 🔐 Crypted Vault - Blockchain-Based Encrypted Image Storage

![Crypted Vault Banner](https://via.placeholder.com/1200x300/1a1a2e/ffffff?text=Crypted+Vault+-+Secure+Image+Storage)

## 🌟 Overview

**Crypted Vault** is a cutting-edge decentralized application (dApp) that revolutionizes image storage by combining blockchain technology, IPFS (InterPlanetary File System), and military-grade encryption. Built with the MERN stack and Web3 integration, it provides users with complete control over their digital assets while ensuring maximum security and permanent accessibility.

### ✨ Key Features

- 🔒 **End-to-End Encryption**: Military-grade AES-256 encryption
- 🌐 **Decentralized Storage**: IPFS network integration for distributed file storage
- ⛓️ **Blockchain Verification**: Smart contract-based hash verification and access control
- 🔑 **Web3 Authentication**: Wallet-based user authentication (MetaMask integration)
- 📱 **Responsive UI**: Modern, glassmorphism-inspired user interface
- 🚀 **Permanent Records**: Immutable blockchain storage of file metadata
- 👤 **User-Controlled Access**: Complete ownership and control of stored images

## 🏗️ Architecture

The application follows a secure, multi-layered architecture with separate upload and retrieval workflows:

### 📤 Upload Image Workflow
```
┌─────────────┐  1. Upload Image  ┌─────────────┐  2. Encryption  ┌─────────────┐
│   Client    │ ─────────────────▶│   Server    │ ───────────────▶│    IPFS     │
│  (React)    │                   │ (Node.js)   │  3. Upload      │  Network    │
└─────────────┘                   └─────────────┘ ◀───────────────┘─────────────┘
       ▲                                 │              4. CID
       │                                 ▼
       │ 6. CID            ┌─────────────────────────┐
       └───────────────────│    Smart Contract      │
                           │    (Blockchain)        │
                           └─────────────────────────┘
                                  5. Store CID
```

### 📥 Get Image Workflow
```
┌─────────────┐   1. Request CID  ┌─────────────────────────┐
│   Client    │ ─────────────────▶│    Smart Contract      │
│  (React)    │ ◀─────────────────│    (Blockchain)        │
└─────────────┘   2. Return CID   └─────────────────────────┘
       ▲                                 
       │ 7. Decrypted Image                      
       │                          ┌─────────────┐  5. Get Key   ┌─────────────┐
       │              3. CID       │   Server    │ ─────────────▶│  Database   │
       └──────────────────────────▶│ (Node.js)   │ ◀─────────────│ (MongoDB)   │
                                   └─────────────┘  6. Decrypt   └─────────────┘
                                          ▲
                                          │ 4. Encrypted Data
                                          ▼
                                   ┌─────────────┐
                                   │    IPFS     │
                                   │  Network    │
                                   └─────────────┘
```

### Complete Workflow:

**Upload Process:**
1. **Upload**: User selects image through drag-and-drop interface
2. **Encryption**: Server encrypts image using AES-256 before storage
3. **IPFS Storage**: Encrypted image uploaded to IPFS network via Pinata
4. **CID Generation**: IPFS returns Content Identifier (CID/Hash)
5. **Blockchain Storage**: Smart contract stores IPFS hash linked to user wallet
6. **Confirmation**: CID returned to client confirming successful upload

**Retrieval Process:**
1. **Request**: Client requests user's stored image hashes from smart contract
2. **Hash Retrieval**: Smart contract returns all CID hashes for the user
3. **Fetch Request**: Client sends CID array to server for image retrieval
4. **IPFS Fetch**: Server fetches encrypted images from IPFS using CIDs
5. **Key Retrieval**: Server gets user's encryption key from database
6. **Decryption**: Server decrypts images using stored encryption key
7. **Delivery**: Decrypted images sent back to client for display

## 🛠️ Technologies Used

### Frontend
- **React.js** - Component-based UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Hot Toast** - Toast notifications
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for user data and encryption keys
- **JWT** - JSON Web Tokens for session management
- **Crypto** - Built-in Node.js cryptography library

### Blockchain & Web3
- **Ethereum** - Blockchain network (Sepolia testnet)
- **Solidity** - Smart contract programming language
- **Web3.js** - Ethereum JavaScript API
- **MetaMask** - Ethereum wallet browser extension

### Storage & Security
- **IPFS** - Decentralized file storage protocol
- **Pinata** - IPFS pinning service
- **AES-256** - Advanced Encryption Standard
- **bcrypt** - Password hashing library

## 🚀 Getting Started

### Prerequisites

Before running the application, ensure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database instance
- **MetaMask** browser extension
- **Pinata** account for IPFS pinning
- **Sepolia testnet ETH** for transactions

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/crypted-vault.git
   cd crypted-vault
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

### Environment Configuration

#### Server Environment Variables

Create a `.env` file in the `server` directory:

```env
# Database Configuration
MONGODB_URL=mongodb://localhost:27017/crypted-vault

# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration
JWT_SECRETKEY=your_super_secret_jwt_key_here

# IPFS Configuration (Pinata)
PINATA_APIKEY=your_pinata_api_key
PINATA_SECRETKEY=your_pinata_secret_key

# Encryption
ENCRYPTION_KEY=your_32_character_encryption_key

# CORS
CLIENT_URL=http://localhost:5173
```

#### Client Environment Variables

Create a `.env` file in the `client` directory:

```env
VITE_SERVER_URL=http://localhost:3000
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
```

### Smart Contract Deployment

1. **Deploy the smart contract** to Sepolia testnet:
   ```bash
   # Install Hardhat (if not already installed)
   npm install --save-dev hardhat

   # Deploy contract
   npx hardhat run scripts/deploy.js --network sepolia
   ```

2. **Update contract address** in your client environment variables

### Running the Application

1. **Start the server:**
   ```bash
   cd server
   npm start
   ```

2. **Start the client:**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the application:**
   - Open your browser and navigate to `http://localhost:5173`
   - Connect your MetaMask wallet
   - Start uploading and managing your encrypted images!

## 📋 Usage Guide

### Connecting Your Wallet
1. Ensure MetaMask is installed and configured for Sepolia testnet
2. Click "Connect Wallet" on the landing page
3. Approve the connection request in MetaMask

### Uploading Images
1. Navigate to the upload section
2. Drag and drop your image or click to select
3. Supported formats: JPG, JPEG, PNG
4. Click "Upload to Blockchain"
5. Confirm the transaction in MetaMask

### Viewing Images
1. Access the "Your Secure Images" section
2. Browse through your encrypted image gallery
3. Use pagination controls to navigate multiple images
4. All images are verified with blockchain security badges

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration

### Image Management
- `POST /api/uploadImage` - Upload encrypted image to IPFS
- `POST /api/getImage` - Retrieve and decrypt images
- `GET /api/user/images` - Get user's image metadata

## 📱 Smart Contract Functions

### Core Functions
- `uploadFile(address user, string ipfsHash)` - Store IPFS hash on blockchain
- `viewFiles(address user)` - Retrieve user's file hashes
- `revokeAccess(address user, uint256 fileIndex)` - Remove file access

## 🔐 Security Features

### Encryption
- **Client-side validation** ensures only valid image formats
- **Server-side encryption** using AES-256 before IPFS storage
- **Unique encryption keys** per user stored securely in database

### Blockchain Security
- **Smart contract verification** ensures data integrity
- **Immutable records** prevent tampering with file metadata
- **User-controlled access** through wallet authentication

### Data Protection
- **No plaintext storage** - all images encrypted before leaving server
- **Decentralized storage** eliminates single points of failure
- **Zero-knowledge architecture** - server cannot access user images

## 🧪 Testing

### Running Tests
```bash
# Server tests
cd server
npm test

# Client tests
cd client
npm test

# Smart contract tests
npx hardhat test
```

## 🚀 Deployment

### Server Deployment
1. Deploy to your preferred cloud service (Heroku, AWS, DigitalOcean)
2. Configure production environment variables
3. Ensure MongoDB connection is established
4. Set up HTTPS for secure communication

### Client Deployment
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy to static hosting (Netlify, Vercel, AWS S3)
3. Configure production API endpoints

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration for code style
- Write tests for new features
- Update documentation for API changes
- Ensure security best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Resources

### Getting Testnet ETH
- **Sepolia Faucet**: [sepolia-faucet.pk910.de](https://sepolia-faucet.pk910.de)
- **Alchemy Faucet**: [sepoliafaucet.com](https://sepoliafaucet.com)

### Documentation
- [IPFS Documentation](https://docs.ipfs.io/)
- [Pinata API Docs](https://docs.pinata.cloud/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)

### Troubleshooting
- Ensure MetaMask is connected to Sepolia testnet
- Check that you have sufficient testnet ETH for transactions
- Verify environment variables are correctly configured
- Check browser console for detailed error messages

## 🔮 Roadmap

- [ ] **Mobile App** - React Native implementation
- [ ] **Multi-chain Support** - Polygon, BSC integration
- [ ] **Image Sharing** - Secure sharing capabilities
- [ ] **Bulk Upload** - Multiple image upload functionality
- [ ] **Image Analytics** - Storage and access statistics
- [ ] **Advanced Encryption** - Additional security layers



## 🙏 Acknowledgments

- Ethereum Foundation for blockchain infrastructure
- IPFS Protocol Labs for decentralized storage
- OpenZeppelin for smart contract security standards
- React team for the amazing frontend framework

---

**⚠️ Disclaimer**: This application is for educational and demonstration purposes. Always conduct thorough security audits before using in production environments.

