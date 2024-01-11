// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


const hre = require("hardhat");



// async function main() {
  
//   const aiBuddy = await hre.ethers.deployContract("AiBuddy");

//   await aiBuddy.waitForDeployment();

//   console.log(`deployed to ${aiBuddy.target}`);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// Add areon 
const main = async ()=> {
  const areon = await hre.ethers.deployContract('Areon');

  await areon.waitForDeployment();

  console.log(`deployed to ${areon.target}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});