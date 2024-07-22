import { CompletionCreateParams } from "openai/resources/chat/index";
import { safeSigner } from "../../src/agent/ai-signer";
import {userWallet} from "../../src/agent/wallet-info";

export const functions: CompletionCreateParams.Function[] = [
  {
    name: "something_special",
    description:
      "Do something special.",
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

function do_good(wallet: Phrase) {

    console.log("inside the do_good function", wallet);
    // Regular expression to match a typical wallet address and an amount
    //const walletAddressRegex = /0x[a-fA-F0-9]{40}/i;
    //const amountRegex = /(\d+\.?\d*)\s*USDC/;
  
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

    //console.log("this is the address", someAddress, "and the DOGOOD function is running");

  //return someAddress;

}

function something_special(phrase: Phrase) {

  console.log("something special with phrase:", phrase);
  
  
    const getWallet = do_good(phrase);



  if (getWallet) {
    const injectWallet = safeSigner(getWallet);
    console.log('signed TX is', injectWallet);
    return injectWallet;
  } else {
    console.error('Failed to get wallet');
  }


    //return injectWallet;

  //console.log('signed TX is', injectWallet);


}

type Phrase = {
  address: string,
  amount: string
}

export async function runFunction(name: string, phrase: Phrase) {
  switch (name) {
    case "something_special":
      return something_special(phrase);
    default:
      return null;
  }
}
