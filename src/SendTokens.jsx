import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens(){
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens(){
        if (!wallet.publicKey) {
            alert("Please connect your wallet first");
            return;
        }
        
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;
        
        if (!to || !amount) {
            alert("Please fill in all fields");
            return;
        }
        
        try {
            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubKey: wallet.publicKey,
                toPubKey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            }));
            await wallet.sendTransaction(transaction, connection);
            alert("Sent " + amount + " SOL to " + to);
        } catch (error) {
            alert("Error sending tokens: " + error.message);
        }
    }
    
    if (!wallet.connected) {
        return <div>Please connect your wallet to send tokens</div>;
    }
    
    return (
        <div>
            <h3>Send Tokens</h3>
            <input id="to" type="text" placeholder="Recipient wallet address" />
            <input id="amount" type="text" placeholder="Amount in SOL" />
            {/** biome-ignore lint/a11y/useButtonType: button type not critical */}
            <button onClick={sendTokens}>Send SOL</button>
        </div>
    );
}