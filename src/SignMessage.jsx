import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

export function SignMessage() {
    const { publicKey, connected, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value || "Hello Solana";
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        alert(`Message signature: ${bs58.encode(signature)}`);
    };

    if (!connected) {
        return <div>Please connect your wallet first</div>;
    }

    return (
        <div>
            <h3>Sign Message</h3>
            <input id="message" type="text" placeholder="Enter message (default: Hello Solana)" />
            {/** biome-ignore lint/a11y/useButtonType: button type not critical */}
            <button onClick={onClick}>Sign Message</button>
        </div>
    );
}