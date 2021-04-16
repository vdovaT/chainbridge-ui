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
      chainId: 4,
      networkId: 4,
      name: "Ethereum - Rinkeby",
      bridgeAddress: "0x747e8C91C8661704b1c33b0365A89f7e988E1de3",
      erc20HandlerAddress: "0xDC826cF5AD261FcD1D1dC404648B4D596Df88C8C",
      rpcUrl: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_RINKEBY_API_KEY}`,
      type: "Ethereum",
      blockExplorer: "https://rinkeby.etherscan.io",
      nativeTokenSymbol: "rETH",
      tokens: [
        {
          address: "0x019F59AFbB89f0d395F905F7Ca0A48485619bcA5",
          name: "ERC20Sample",
          symbol: "ERC20S",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000019F59AFbB89f0d395F905F7Ca0A48485619bcA504",
        },
      ],
    },
    {
      chainId: 42,
      networkId: 42,
      name: "Ethereum - Kovan",
      bridgeAddress: "0x747e8C91C8661704b1c33b0365A89f7e988E1de3",
      erc20HandlerAddress: "0xDC826cF5AD261FcD1D1dC404648B4D596Df88C8C",
      rpcUrl: `https://eth-kovan.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KOVAN_API_KEY}`,
      type: "Ethereum",
      blockExplorer: "https://kovan.etherscan.io",
      nativeTokenSymbol: "kETH",
      tokens: [
        {
          address: "0x019F59AFbB89f0d395F905F7Ca0A48485619bcA5",
          name: "ERC20Sample",
          symbol: "ERC20S",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000019F59AFbB89f0d395F905F7Ca0A48485619bcA52a",
        },
      ],
    },
    {
      chainId: 43,
      networkId: 1287,
      name: "Moonbeam - Moonbase Alpha",
      bridgeAddress: "0x747e8C91C8661704b1c33b0365A89f7e988E1de3",
      erc20HandlerAddress: "0xDC826cF5AD261FcD1D1dC404648B4D596Df88C8C",
      rpcUrl: "https://rpc.testnet.moonbeam.network",
      type: "Ethereum",
      blockExplorer: "https://moonbeam-explorer.netlify.app",
      nativeTokenSymbol: "DEV",
      tokens: [
        {
          address: "0x019F59AFbB89f0d395F905F7Ca0A48485619bcA5",
          name: "ERC20Sample",
          symbol: "ERC20S",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000019F59AFbB89f0d395F905F7Ca0A48485619bcA52b",
        },
      ],
    },
  ],
};
