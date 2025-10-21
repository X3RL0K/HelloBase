async function main() {
  const HelloBase = await ethers.getContractFactory("HelloBase");
  const helloBase = await HelloBase.deploy();
  await helloBase.deployed();

  console.log("HelloBase contract deployed to:", helloBase.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});