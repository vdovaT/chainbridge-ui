import TokenIcon from "./media/tokens/teddylogo.png";
import SHIBAIcon from "./media/tokens/shibalogo.png";
import ETHIcon from "./media/tokens/eth.png";
import USDTIcon from "./media/tokens/usdtlogo.png";
import USDCIcon from "./media/tokens/usdclogo.png";
import PIZAIcon from "./media/tokens/pizalogo.png";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 56,
      networkId: 56,
      name: "Ethereum - BSC",
      bridgeAddress: "0xbD605b5907ED016E17091468ca391D12AB860535",
      erc20HandlerAddress: "0x679976554B5b7df9B2E6220C3376B0dbE6f38b57",
      rpcUrl: `https://bsc.getblock.io/mainnet/?api_key=c5c155b5-27b3-4e8e-bba3-df9970326879`,
      type: "Ethereum",
      blockExplorer: "https://bscscan.com/",
      nativeTokenSymbol: "BNB",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
        },
        {
          address: "0xFC646D0B564bf191B3d3adF2B620a792E485e6Da",
          name: "Half Pizza",
          symbol: "PIZA",
          imageUri: PIZAIcon,
          resourceId:
            "0x0000000000000000000000FC646D0B564bf191B3d3adF2B620a792E485e6Da00",
        },
        {
          address: "0x67eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b1",
          name: "WETH",
          symbol: "tETH",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        },
        {
          address: "0x763fCB4fEFdcb8AaADE82f757A8cBC85E49Ed1E8",
          name: "USDT",
          symbol: "tUSDT",
          imageUri: USDTIcon,
          resourceId:
            "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        },
        {
          address: "0x3FB9EDac5C540746fbD85943e75Ee043261816cE",
          name: "USDC",
          symbol: "tUSDC",
          imageUri: USDCIcon,
          resourceId:
            "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        },
        {
          address: "0x5ca640153CD0Bc9b89bf38132286f4aCC246ebd8",
          name: "SHIBA",
          symbol: "tSHIBA",
          imageUri: SHIBAIcon,
          resourceId:
            "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        },
      ],
    },
    {
      chainId: 32,
      networkId: 321,
      name: "Ethereum - KCC",
      bridgeAddress: "0xf9899811A81613dFF94978E24A6E77F840D534f3",
      erc20HandlerAddress: "0x846A51099B585463A5f7Aa3c08F18990aA44764f",
      rpcUrl: `https://kcc.getblock.io/mainnet/?api_key=c5c155b5-27b3-4e8e-bba3-df9970326879`,
      type: "Ethereum",
      blockExplorer: "https://explorer.kcc.io/",
      nativeTokenSymbol: "KCS",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
        },
        {
          address: "0xE9a6C80360441cEDf229F330E557112a9c3C4533",
          name: "USDT",
          symbol: "USDT",
          imageUri: USDTIcon,
          resourceId:
            "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        },
        {
          address: "0x2C6711b5ef66d5228E021C543659538FaCF8C816",
          name: "USDC",
          symbol: "tUSDC",
          imageUri: USDCIcon,
          resourceId:
            "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        },
        {
          address: "0x878EA4D996e854c105EB470451541688f080cC42",
          name: "SHIBA",
          symbol: "tSHIBA",
          imageUri: SHIBAIcon,
          resourceId:
            "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        },
        {
          address: "0x4d771331E32cC6F6CA134601E737F1E8B1F83920",
          name: "WETH",
          symbol: "tETH",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        },
      ],
    },
    {
      chainId: 40,
      networkId: 43114,
      name: "Ethereum - AVAX",
      bridgeAddress: "0xf9899811A81613dFF94978E24A6E77F840D534f3",
      erc20HandlerAddress: "0x8f0f2ED815B660fF404cD4518ec67B1294DE8ec3",
      rpcUrl: `https://speedy-nodes-nyc.moralis.io/4a0481cf5a19c72502361ffc/avalanche/mainnet`,
      type: "Ethereum",
      blockExplorer: "https://snowtrace.io/",
      nativeTokenSymbol: "AVAX",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
        },
        {
          address: "0x1BABf9a2b471127bdfF520C6271e570DBB215C11",
          name: "USDT",
          symbol: "USDT",
          imageUri: USDTIcon,
          resourceId:
            "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        },
        {
          address: "0xb12BC27B77ae3b2C1506fD5D61E9BaAe5aa78B95",
          name: "USDC",
          symbol: "tUSDC",
          imageUri: USDCIcon,
          resourceId:
            "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        },
        {
          address: "0x388DC12E1d4519685Cf16f786182790BA3965C16",
          name: "SHIBA",
          symbol: "tSHIBA",
          imageUri: SHIBAIcon,
          resourceId:
            "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        },
        {
          address: "0x03383aBa89F1F091fA8A0106900ABfD00e57b9aD",
          name: "WETH",
          symbol: "tETH",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        },
      ],
    },
    {
      chainId: 37,
      networkId: 137,
      name: "Ethereum - MATIC",
      bridgeAddress: "0x9cf48a0b0c6127Aa5d934e92E16099C4233F4D20",
      erc20HandlerAddress: "0x998598E9eD523Fd52c0B93a3272336Ae13D5c3C5",
      rpcUrl: `https://speedy-nodes-nyc.moralis.io/4a0481cf5a19c72502361ffc/polygon/mainnet`,
      type: "Ethereum",
      blockExplorer: "https://polygonscan.com/",
      nativeTokenSymbol: "MATIC",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
        },
        {
          address: "0x5F12C56aD96d225f23E2eB128c4b774fdb7b6a3A",
          name: "USDT",
          symbol: "USDT",
          imageUri: USDTIcon,
          resourceId:
            "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        },
        {
          address: "0xE9a6C80360441cEDf229F330E557112a9c3C4533",
          name: "USDC",
          symbol: "tUSDC",
          imageUri: USDCIcon,
          resourceId:
            "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        },
        {
          address: "0x878EA4D996e854c105EB470451541688f080cC42",
          name: "SHIBA",
          symbol: "tSHIBA",
          imageUri: SHIBAIcon,
          resourceId:
            "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        },
        {
          address: "0x2C6711b5ef66d5228E021C543659538FaCF8C816",
          name: "WETH",
          symbol: "tETH",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        },
      ],
    },
    {
      chainId: 25,
      networkId: 250,
      name: "Ethereum - FTM",
      bridgeAddress: "0x42d3765949e8BaA49b0b64Eb729071e053ab8742",
      erc20HandlerAddress: "0xf9899811A81613dFF94978E24A6E77F840D534f3",
      rpcUrl: `https://rpc.ftm.tools/`,
      type: "Ethereum",
      blockExplorer: "https://ftmscan.com/",
      nativeTokenSymbol: "FTM",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
        },
        // {
        //   address: "0x5F12C56aD96d225f23E2eB128c4b774fdb7b6a3A",
        //   name: "USDT",
        //   symbol: "USDT",
        //   imageUri: USDTIcon,
        //   resourceId:
        //     "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        // },
        // {
        //   address: "0xE9a6C80360441cEDf229F330E557112a9c3C4533",
        //   name: "USDC",
        //   symbol: "tUSDC",
        //   imageUri: USDCIcon,
        //   resourceId:
        //     "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        // },
        // {
        //   address: "0x878EA4D996e854c105EB470451541688f080cC42",
        //   name: "SHIBA",
        //   symbol: "tSHIBA",
        //   imageUri: SHIBAIcon,
        //   resourceId:
        //     "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        // },
        // {
        //   address: "0x2C6711b5ef66d5228E021C543659538FaCF8C816",
        //   name: "WETH",
        //   symbol: "tETH",
        //   imageUri: ETHIcon,
        //   resourceId:
        //     "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        // },
      ],
    },
    {
      chainId: 0,
      networkId: 1,
      name: "Ethereum - ETH",
      bridgeAddress: "0xf9899811a81613dff94978e24a6e77f840d534f3",
      erc20HandlerAddress: "0x846A51099B585463A5f7Aa3c08F18990aA44764f",
      rpcUrl: `https://mainnet.infura.io/v3/babe53e1426743b292601e347893b4da`,
      type: "Ethereum",
      blockExplorer: "https://etherscan.io",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
        },
        {
          address: "0x350ca33E2c75269A220c75D337E9B9AB177FA269",
          name: "Half Pizza",
          symbol: "PIZA",
          imageUri: PIZAIcon,
          resourceId:
            "0x0000000000000000000000FC646D0B564bf191B3d3adF2B620a792E485e6Da00",
        },
        {
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          name: "WETH",
          symbol: "WETH",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        },
        {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          name: "USDT",
          symbol: "USDT",
          imageUri: USDTIcon,
          resourceId:
            "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        },
        {
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          name: "USDC",
          symbol: "USDC",
          imageUri: USDCIcon,
          resourceId:
            "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        },
        {
          address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
          name: "SHIBA",
          symbol: "SHIBA",
          imageUri: SHIBAIcon,
          resourceId:
            "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        },
      ],
    },
  ],
};
