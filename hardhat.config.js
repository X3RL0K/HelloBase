require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    base: {
      url: "https://base-mainnet.gateway.pocket.network/v1/lb/...",
      // Get a real RPC URL from https://docs.base.org/docs/mainnet
      // Example: use Alchemy or Infura for Base
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key
    },
    baseSepolia: {
      url: "https://base-sepolia.gateway.pocket.network/v1/lb/...",
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  // Optional: Add your Alchemy, Etherscan, or BaseScan API key
  etherscan: {
    apiKey: {
      base: process.env.BASESCAN_API_KEY,
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
    ],
  },
};