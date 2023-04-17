import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as config from "../secrets.json";
import address from "../deploy-wrapped";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
	console.log(`Running deploy script for Factory`);

	// Initialize the wallet.
	const wallet = new Wallet(config.PK);

	// Create deployer object and load the artifact of the contract you want to deploy.
	const deployer = new Deployer(hre, wallet);
	const artifact = await deployer.loadArtifact(
		"contracts/PancakeRouter.sol:PancakeRouter"
	);
	const weth = "0xc028dbc2685E67d2C762ffC6be4cB38A89f497d1";
	const factory = "0x80a26cd1Df174C1115fc0d4d78a5C4e3E6A4EC3d";
	const greeterContract = await deployer.deploy(artifact, [factory, weth]);

	// Show the contract info.
	const contractAddress = greeterContract.address;

	console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
