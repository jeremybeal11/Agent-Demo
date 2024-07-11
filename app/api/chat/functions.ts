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

function do_good(address: string) {

    const someAddress = address

    console.log("this is the address", someAddress, "and the DOGOOD function is running");

  return someAddress;

}

function something_special(phrase: string) {

  const getWallet = userWallet(phrase);

    const injectWallet = safeSigner(getWallet);

    //console.log('wallet is', getWallet);
    console.log('signed TX is', injectWallet);

  //  const getWallet = userWallet(phrase.toString());

  // if (getWallet) {
  //   const injectWallet = safeSigner(getWallet);
  //   console.log('signed TX is', injectWallet);
  //   return injectWallet;
  // } else {
  //   console.error('Failed to get wallet');
  // }

  //const injectWallet = safeSigner(getWallet);

  // console.log('wallet is', getWallet);

  // return getWallet;

  //console.log('signed TX is', injectWallet);

}

 

export async function runFunction(name: string, phrase: any) {
  switch (name) {
    case "something_special":
      return something_special(phrase);
    default:
      return null;
  }
}