# AI Agent that can bank itself using OpenAI and Syndicate

This example shows how to use [OpenAI](https://openai.com) and [Gnosis Safe](https://docs.syndicate.io) to create an AI Agent that can bank itself and send crypto transactions. In this example, the user can request to send money to their friend and the agent will pick up on the keywords and propose the transaction on Gnosis Safe multisig wallet. 

## Why use Gnosis Safe?
This is a security measure to ensure that the account owner(s) can review the transaction prior to it being sent.

## Requirements

To create locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))
- `Gnosis Safe` - Go to Gnosis Safe website and create a SAFE on Base Sepolia.
- `CONTRACT_ADDRESS` - Gnosis Safe conract address
- `CONTRACT_NETWORK` - network information ( Base Sepolia, e.g)
- `AI_ADD` - AI Agent wallet address
- `AI_PK` - AI Agent private key for signing 

## Tech Stack

This is built on the following stack:
- `Node`: v22.1
- `Typescript`: v5.1.3 
- `Next`: v13.4

## To run the project: 
- install the packages: ``` npm i``` 

### To use the chat UI:
`npm run dev`


### To see the agent sign sign a transaction
`cd ./app/src/agent/`

then 

`node run test.js`



