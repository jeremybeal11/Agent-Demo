const { safeSigner }  = require ('./ai-signer');
const {userWallet} = require ('./wallet-info');



const manualMessage = "send 10 USDC to paul's wallet at 0x096d3c124688cbc01bCea04052de98f245378D82";


function testSigner(phrase) {

    const getWallet = userWallet(phrase.toString());

    const injectWallet = safeSigner(getWallet);

    //console.log('wallet is', getWallet);
    console.log('signed TX is', injectWallet);


}


testSigner(manualMessage);

