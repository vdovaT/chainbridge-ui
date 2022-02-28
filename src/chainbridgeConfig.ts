import TokenIcon from "./media/tokens/token-icon.svg";

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
      chainId: 0,
      networkId: 816,
      name: "Ethereum - Whalefin",
      bridgeAddress: "0x9C4Ef7C76525fde32dbE9255B013Aaee4DFB61ca",
      erc20HandlerAddress: "0x059c76B1bBa95B7b46c11cA977Adf0dc92C3eBe3",
      rpcUrl: `https://rpc.nexisdao.info`,
      type: "Ethereum",
      blockExplorer: "https://explorer.blockchain.openverse.io",
      defaultGasPrice: 0,
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0xfAF7fD7267d345a97e05090673175a168CC5c39b",
          name: "Openverse",
          symbol: "OPEN",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000fAF7fD7267d345a97e05090673175a168CC5c39b00",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0xB3F57d01299C5422542Ab338f6D5AA6D24eFa694",
      erc20HandlerAddress: "0xDadd6712aab46CFB2D92De4015f47a0856fd153C",
      rpcUrl: `https://goerli.infura.io/v3/babe53e1426743b292601e347893b4da`,
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io",
      nativeTokenSymbol: "göETH",
      tokens: [
        {
          address: "0x64B0dF8CBDA97Af0D9E67d0679B4E5653f43b0BA",
          name: "wOpenverse",
          symbol: "wOPEN",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000fAF7fD7267d345a97e05090673175a168CC5c39b00",
        },
      ],
    },
  ],
};
