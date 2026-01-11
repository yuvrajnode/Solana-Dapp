import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { SignMessage } from './SignMessage';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowSolBalance } from './ShowSolBalance';
import { SendTokens } from './SendTokens';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  // Use empty wallets array for now
  const wallets = useMemo(() => [], []);

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                <div className="glass-container" style={{ 
                  display: 'flex', 
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  marginBottom: "24px"
                }}>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>
                <div className="glass-container">
                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2>Solana Wallet</h2>
                    <p>Manage your SOL tokens</p>
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <ShowSolBalance />
                  </div>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    <div className="component-section">
                      <RequestAirdrop />
                    </div>
                    <div className="component-section">
                      <SendTokens />
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <SignMessage />
                  </div>
                </div>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App;