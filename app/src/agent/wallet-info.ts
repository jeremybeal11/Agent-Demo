// const manualMessage = "send 10 USDC to paul's wallet at 0x096d3c124688cbc01bCea04052de98f245378D82";

type WalletInfo = {
    walletAddress: string;
    amount: string;
  };
  
  function userWallet(response: any): WalletInfo | null {

    console.log("this is the top and the response is", response);

    // Regular expression to match a typical wallet address and an amount
    const walletAddressRegex = /0x[a-fA-F0-9]{40}/i;
    const amountRegex = /(\d+\.?\d*)\s*USDC/;
  
    // Extract wallet address and amount from the response
    const walletAddressMatch = response.match(walletAddressRegex);
    const amountMatch = response.match(amountRegex);
    
    // If both wallet address and amount are found, create the object
    if (walletAddressMatch && amountMatch) {
      console.log("this is the top and the response is", response);
      const walletInfo = {
        walletAddress: walletAddressMatch[0],
        amount: amountMatch[1], // This captures the numeric value after "Amount:"
      };
  
      return walletInfo;
    } else {
      console.error(
        'Could not extract wallet address and amount from the response',
      );
      return null;
    }
  }
  
  export { userWallet};
  export type { WalletInfo };
