import GameToken from "./GameToken.js";
import GameItems from "./GameItems.js";
import Marketplace from "./Marketplace.js";

let gameContract;
let gameItemsContract;
let marketplaceContract;

const initialize = async () => {
    const provider = new ethers.providers.Web3Provider(window.altmasq, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

        // Get the user's connected address
    provider.listAccounts().then(function(accounts) {
      const address = accounts[0];
      console.log("This is your address in hex:", address);
    });

    gameContract = new ethers.Contract(
        '0x945b6d6d4d89530972b66d148c342653a37a7bea',
        GameToken,
        signer
    );

      // Create an instance of the contract
      const gameItemsContract = new ethers.Contract(
        '0xc69fba2d6bf4a0f47e34a20ad0d25011c8ea39e9',
        GameItems,
        signer
      );

    marketplaceContract = new ethers.Contract(
        '0x5764db9342fc647048d7739e13d85451016c5abd',
        Marketplace,
        signer
     );

}

async function getUserItems(){
          //TO-DO: get connected address

        // Approve the marketplace contract to check the balance of NITE tokens on your behalf
        const tx = await gameItemsContract.approve('0x23607dff2c0f8e119f6d66f8786b1a2bd52cbc15', value);
        await tx.wait(1); // Wait for the transaction to be mined

        const pumpTalisman = await gameItemsContract.balanceOf(address, 1);
        const superBoots = await gameItemsContract.balanceOf(address, 2);
        const timewarpCape = await gameItemsContract.balanceOf(address, 3);

        const values = await Promise.all([pumpTalisman, superBoots, timewarpCape]);

      var numTalismans = values[0];
      var numBoots = values[1];
      var numCapes = values[2];

      if(numTalismans > 0) COIN_GENERATION_INTERVAL = COIN_GENERATION_INTERVAL * Math.pow(0.75, numTalismans);
      if(numBoots > 0) PLAYER_SPEED = PLAYER_SPEED  * Math.pow(1.3, numBoots);
      if(numCapes > 0) GAME_SECOND = GAME_SECOND * Math.pow(1.5, numCapes);

      callback();
  }

async function mint(address, tokenNum) {
    const tx = await gameContract.mint(address, tokenNum);
    await tx.wait(1);

    console.log("Transaction complete");
}

async function buyItems(id){

    let value;
    if (id === 1) {
        value = 1000000000000000;
    } else if (id === 2) {
        value = 2000000000000000;
    } else if (id === 3) {
        value = 3000000000000000;
    }

    // Approve the marketplace contract to spend NITE tokens on your behalf
    const tx = await gameContract.approve('0x5764db9342fc647048d7739e13d85451016c5abd', value);
    await tx.wait(1); // Wait for the transaction to be mined

    // Call the buyItem function on the marketplace contract
    const tx2 = await marketplaceContract.buyItem(id);
    await tx2.wait(1); // Wait for the transaction to be mined

    getUserItems();
    //const tx3 = await marketplaceContract.buyItem(id);
    //await tx3.wait(1);

}

//To-Do: Check front-end implementation of these functions
window.mint = mint;
window.buyItems = buyItems;
window.getUserItems = getUserItems;

initialize();
