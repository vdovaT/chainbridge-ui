import TokenIcon from "./media/tokens/teddylogo.png";
import SHIBAIcon from "./media/tokens/shibalogo.png";
import ETHIcon from "./media/tokens/eth.png";
import USDTIcon from "./media/tokens/usdtlogo.png";
import USDCIcon from "./media/tokens/usdclogo.png";

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
          address: "0x67eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b1",
          name: "TeddyETH",
          symbol: "tETH",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000067eF82C01D60FDb4D1af833Cd3bE0625cCcCe6b100",
        },
        {
          address: "0x763fCB4fEFdcb8AaADE82f757A8cBC85E49Ed1E8",
          name: "TeddyUSDT",
          symbol: "tUSDT",
          imageUri: USDTIcon,
          resourceId:
            "0x0000000000000000000000b59e2a3FD2b8d057B86100791EA6BFB5fA2240c100",
        },
        {
          address: "0x3FB9EDac5C540746fbD85943e75Ee043261816cE",
          name: "TeddyUSDC",
          symbol: "tUSDC",
          imageUri: USDCIcon,
          resourceId:
            "0x00000000000000000000000B9742d1EE856cC64AcDC848191F458089240ABB00",
        },
        {
          address: "0x5ca640153CD0Bc9b89bf38132286f4aCC246ebd8",
          name: "TeddySHIBA",
          symbol: "tSHIBA",
          imageUri: SHIBAIcon,
          resourceId:
            "0x00000000000000000000005ca640153CD0Bc9b89bf38132286f4aCC246ebd800",
        },
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
