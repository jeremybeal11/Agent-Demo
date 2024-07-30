import { MetaTransactionData, OperationType } from '@safe-global/safe-core-sdk-types';
import SafeFactory from '@safe-global/protocol-kit';
import SafeApiKit from '@safe-global/api-kit'
const Web3 = require('web3');
import { WalletInfo } from './wallet-info';

const AI_ADDR= "0x3FfE02322f6D3b23b4f153289E1f280eb15c0089"



// https://chainlist.org/?search=sepolia&testnets=true
const RPC_URL = 'https://sepolia.base.org';

const safeAddress = '0x3b5D6be75268da18082e3b0b4ac7c9410f15955D';


const apiKit = new SafeApiKit({
    chainId: 84532n
  })

//const manualMessage = "send 10 USDC to paul's wallet at 0xF51313c1ded7d65AF43B2b4D15Fa5530F33ba10f";


async function safeSigner(walletInfo: WalletInfo) {


    if (walletInfo) {
        const walletAddress = walletInfo.walletAddress;
        const amount = walletInfo.amount;

        // Create Safe instance
        const protocolKit = await SafeFactory.init({
            provider: RPC_URL,
            signer: process.env.AI_PK,
            safeAddress: safeAddress
        });

        // Now you have the walletAddress and amount, you can create the transaction
        const safeTransactionData: MetaTransactionData = {
            to: walletAddress,
            value: amount, // Assuming the amount is in ether
            data: '0x',
            operation: OperationType.Call
        };
        //const senderAddress = await signer1.getAddress();
        const safeTransaction =  await protocolKit.createTransaction({transactions: [safeTransactionData]})
        const safeTxHash = await protocolKit.getTransactionHash(safeTransaction)
        const signature = await protocolKit.signHash(safeTxHash)

        try {
            await apiKit.proposeTransaction({
                safeAddress: safeAddress,
                safeTransactionData: safeTransaction.data,
                safeTxHash,
                senderAddress: AI_ADDR,
                senderSignature: signature.data
            
            })

            const pendingTransactions = await apiKit.getTransaction(safeTxHash)
            console.log("The pending transaction is", pendingTransactions)
            

            return safeTransaction;
            
        } catch (error: any) {
            console.error("Error while proposing transaction:", error.response ? error.response.data : error.message);
        }
    
    } else {
        console.error('No wallet info could be retrieved.');
        return null;
    }
}


export { safeSigner };

