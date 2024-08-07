# AI Agent that can bank itself using OpenAI and Gnosis Safe

This example shows how to use [OpenAI](https://openai.com) and [Gnosis Safe](https://app.safe.global/welcome) to create an AI Agent that can bank itself and send crypto transactions. In this example, the user can request to send money to their friend, and the agent will pick up on the keywords and propose the transaction on Gnosis Safe multisig wallet. 

## Why use Gnosis Safe?
This is a security measure to ensure that the account owner(s) can review the transaction prior to it being sent.

## Requirements

To create locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))
- `Gnosis Safe` - Go to Gnosis Safe website and create a SAFE on Base Sepolia.
- `CONTRACT_ADDRESS` - Gnosis Safe contract address
- `CONTRACT_NETWORK` - network information ( Base Sepolia, e.g)
- `AI_ADD` - AI Agent wallet address
- `AI_PK` - AI Agent private key for signing 

## Tech Stack

This is built on the following stack:
- `Node`: v22.1
- `Typescript`: v5.1.3 
- `Next`: v13.4

## Prerequisites:

- Multisig wallet: Go to [Gnosis Safe](https://app.safe.global/welcome) website and create a SAFE on Base Sepolia.

- [MetaMask](https://metamask.io/download/): You will need two wallets, one for the AI Agent and another for a secondary signer.

- Test Tokens: Get test ETH from one of the providers outlined in the Base [documentation](https://docs.base.org/docs/tools/network-faucets/).

- [OpenAI API key](https://platform.openai.com/docs/quickstart/account-setup): You will need your own OpenAI API key to use their trained LLM model

## Clone the repo:

```git clone https://github.com/jeremybeal11/Agent-Demo.git```

## To run the project: 
- install the packages: ``` npm i```

## Edit .env file:

In the root directory, edit the example.env file to store your openAI key, SAFE Address(the address is located on the top left under your safe name), AI wallet address, and private key(pk).

note: don’t forget to change the file name: example.env -> .env

### To use the chat UI, run the following command in the root directory:
`npm run dev`


### To see the agent sign a transaction using the command:
`cd ./app/src/agent/`

then run:

`node run test.js`
