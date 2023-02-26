const {ethers} = require("hardhat");

const main = async () => {
  const Contract = await hre.ethers.getContractFactory("Scribble");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(
    "The minting contract is deployed :",
    contract.address
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
runMain();