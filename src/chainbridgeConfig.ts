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
      bridgeAddress: "0xa199dC74D222A40b4a0266Ac017CAc05aEe17Df4",
      erc20HandlerAddress: "0xf633a898875Ee591D9222aF6ace67e3d2a8082a1",
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
            "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
        },
      ],
    },
    {
      chainId: 5,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0x42d3765949e8BaA49b0b64Eb729071e053ab8742",
      erc20HandlerAddress: "0xf9899811A81613dFF94978E24A6E77F840D534f3",
      rpcUrl: `https://goerli.infura.io/v3/babe53e1426743b292601e347893b4da`,
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io",
      nativeTokenSymbol: "göETH",
      tokens: [
        {
          address: "0x8f0f2ED815B660fF404cD4518ec67B1294DE8ec3",
          name: "wTeddyDoge",
          symbol: "wTEDDY",
          imageUri: TokenIcon,
          resourceId:
            "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
        },
      ],
    },
  ],
};
