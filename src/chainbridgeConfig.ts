import TokenIcon from "./media/tokens/teddylogo.png";

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
      nativeTokenSymbol: "BSC",
      tokens: [
        {
          address: "0x10f6f2b97f3ab29583d9d38babf2994df7220c21",
          name: "TeddyDoge",
          symbol: "TEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000010f6f2b97F3aB29583D9D38BaBF2994dF7220C2100",
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
      ],
    },
  ],
};
