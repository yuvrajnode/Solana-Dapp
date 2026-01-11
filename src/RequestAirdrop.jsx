import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop(){
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop(){
        const amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert(" Airdropped " + amount + " Sol to " + wallet.publicKey.toBase58());
    }
    
    return <div>
        <h3>Request Airdrop</h3>
        <input id="amount" type="text" placeholder="Enter SOL amount" />
        {/** biome-ignore lint/a11y/useButtonType: button type not critical */}
        <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>   
}