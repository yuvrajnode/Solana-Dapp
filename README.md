# 🌊 Solana DApp

A modern **Solana-based decentralized application (DApp)** built with **React** that allows users to interact with the Solana blockchain through wallet integration.  
This project demonstrates core Web3 concepts such as wallet connection, balance fetching, SOL transfers, airdrops, and message signing.

---

## 📋 Project Overview

- **Name:** Solana DApp  
- **Type:** Decentralized Application (DApp)  
- **Blockchain:** Solana  
- **Network:** Solana Devnet  
- **Purpose:** Web3 wallet interface for SOL token management  

---

## 🚀 Features

- 🔐 **Wallet Connection** – Connect and disconnect Solana wallets  
- 💰 **Balance Display** – View real-time SOL balance  
- 🚿 **Airdrop Request** – Request test SOL from Solana Devnet faucet  
- ✍️ **Message Signing** – Sign messages using wallet keys (no SOL spent)  
- 🔁 **Token Sending** – Transfer SOL to other wallet addresses  

---

## 🛠️ Technical Stack

- **Frontend:** React.js (Vite)  
- **Blockchain:** Solana  
- **Wallet Integration:** Solana Wallet Adapter  
- **Styling:** CSS3 (Dark theme with glassmorphism)  
- **Network:** Solana Devnet  

---

## 📁 Project Structure

decentralized-app/
├── src/
│   ├── App.jsx               # Main application component
│   ├── SignMessage.jsx       # Message signing functionality
│   ├── SendTokens.jsx        # SOL transfer functionality
│   ├── RequestAirdrop.jsx    # Devnet airdrop functionality
│   ├── ShowSolBalance.jsx    # Balance display functionality
│   └── index.css             # Application styling
├── public/
├── package.json
├── vite.config.js
└── README.md

---

## 🔧 Key Dependencies

- `@solana/wallet-adapter-react` – Wallet integration  
- `@solana/wallet-adapter-base` – Base wallet adapter  
- `@solana/wallet-adapter-react-ui` – UI wallet components  
- `@solana/web3.js` – Solana JavaScript SDK  
- `bs58` – Base58 encoding/decoding  
- `react` – Frontend framework  

---

## 💡 Component Details

### App.jsx
- Root application container  
- Wallet provider setup  
- Component orchestration  
- Solana Devnet configuration  

### SignMessage.jsx
- Message signing using wallet  
- Wallet connection validation  
- Base58 signature encoding  
- User-friendly signing flow  

### SendTokens.jsx
- SOL transfer functionality  
- Address validation  
- Transaction creation & submission  
- Error handling  

### RequestAirdrop.jsx
- Request test SOL from Devnet  
- Amount input validation  
- Lamports-to-SOL conversion  
- Success and error notifications  

### ShowSolBalance.jsx
- Real-time balance fetching  
- Automatic updates  
- Lamports to SOL conversion  
- Clean display format  

---

## 🎨 Design Features

- 🌙 Dark theme with crypto wallet aesthetics  
- 📱 Responsive design (mobile-friendly)  
- 🧊 Glassmorphism UI effects  
- 🎨 Purple–pink gradient accents  
- 🧱 Grid-based layout  

---

## 🔐 Security Considerations

- Client-side wallet integration only  
- No private key storage  
- Secure transaction and message signing  
- Input validation and error handling  

---

## 🌐 Network Configuration

- **Primary Network:** Solana Devnet  
- **RPC Endpoint:** Solana Cluster API  
- **Test Tokens:** Devnet SOL via airdrop  
- **Transaction Types:**  
  - SOL Transfer  
  - Message Signing  
  - Airdrop Request  

---

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/yuvrajnode/Solana-Dapp.git
cd Solana-Dapp
```
###Install dependencies
```bash
npm install
```
###Start development server
```bash
npm run dev
```
###Open in browser
```bash
http://localhost:5173
```
