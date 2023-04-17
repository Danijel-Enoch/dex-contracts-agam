// import { Wallet, utils } from "zksync-web3";
// import * as ethers from "ethers";
// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
// import * as config from "../secrets.json";

// export let address: any;
// // An example of a deploy script that will deploy and call a simple contract.
// export default async function (hre: HardhatRuntimeEnvironment) {
// 	console.log(`Running deploy script for the WETH`);

// 	// Initialize the wallet.
// 	const wallet = new Wallet(config.PK);

// 	// Create deployer object and load the artifact of the contract you want to deploy.
// 	const deployer = new Deployer(hre, wallet);
// 	const artifact = await deployer.loadArtifact("WzEth");
// 	const greeterContract = await deployer.deploy(artifact);

// 	// Show the contract info.
// 	const contractAddress = greeterContract.address;
// 	address = contractAddress;
// 	console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
// }
