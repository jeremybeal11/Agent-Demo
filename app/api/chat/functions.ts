import { CompletionCreateParams } from "openai/resources/chat/index";
import { safeSigner } from "../../src/agent/ai-signer";
import {userWallet} from "../../src/agent/wallet-info";

type Phrase = {
  address: string,
  amount: string
}

export const functions: CompletionCreateParams.Function[] = [
  {
    name: "something_special",
    description:
      "something_special",
    parameters: {
      type: "object",
      properties: {
        address: {
          type: "string",
          description: "The address",
        },
      },
      required: ["address"],
    },
  },
];

function get_wallet(wallet: Phrase) {
  
     // Extract wallet address and amount from the response
     const walletAddressMatch = wallet.address;
     const amountMatch = wallet.amount;
     
     // If both wallet address and amount are found, create the object
     if (walletAddressMatch && amountMatch) {
       console.log("this is the top and the response is", wallet);

       const walletInfo = {
         walletAddress: walletAddressMatch,
         amount: amountMatch, // This captures the numeric value after "Amount:"
       };

       console.log("this is the walletInfo object", walletInfo);
       return walletInfo;

     } else {
       console.error(
         'Could not extract wallet address and amount from the response',
       );
       return null;
     }

}

function something_special(phrase: Phrase) {
   
  const getWallet = get_wallet(phrase);

  console.log('this is the wallet', getWallet);


  if (getWallet) {
    const injectWallet = safeSigner(getWallet);
    console.log('this is the TX signed', injectWallet);
    return injectWallet;
  } else {
    console.error('Failed to get wallet');
  }

    //return injectWallet;

  //console.log('signed TX is', injectWallet);


}

export async function runFunction(name: string, phrase: Phrase) {
  switch (name) {
    case "something_special":
      return something_special(phrase);
    default:
      return null;
  }
}
