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
      bridgeAddress: "0x638285E837Db7124FF0947251c6f20ceEb2645DF",
      erc20HandlerAddress: "0x623b114e13bdef428f34fa3a76E3BbA580Fd5bb3",
      rpcUrl: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_RINKEBY_API_KEY}`,
      type: "Ethereum",
      blockExplorer: "https://rinkeby.etherscan.io",
      nativeTokenSymbol: "rETH",
      tokens: [
        {
          address: "0xFCefBC458DA5b11a10422C0703bea1D154887D76",
          name: "ERC20Sample",
          symbol: "ERC20S",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000FCefBC458DA5b11a10422C0703bea1D154887D7604",
        },
      ],
    },
    {
      chainId: 42,
      networkId: 42,
      name: "Ethereum - Kovan",
      bridgeAddress: "0x638285E837Db7124FF0947251c6f20ceEb2645DF",
      erc20HandlerAddress: "0x623b114e13bdef428f34fa3a76E3BbA580Fd5bb3",
      rpcUrl: `https://eth-kovan.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KOVAN_API_KEY}`,
      type: "Ethereum",
      blockExplorer: "https://kovan.etherscan.io",
      nativeTokenSymbol: "kETH",
      tokens: [
        {
          address: "0xFCefBC458DA5b11a10422C0703bea1D154887D76",
          name: "ERC20Sample",
          symbol: "ERC20S",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000FCefBC458DA5b11a10422C0703bea1D154887D762a",
        },
      ],
    },
    {
      chainId: 43,
      networkId: 1287,
      name: "Moonbeam - Moonbase Alpha",
      bridgeAddress: "0x638285E837Db7124FF0947251c6f20ceEb2645DF",
      erc20HandlerAddress: "0x623b114e13bdef428f34fa3a76E3BbA580Fd5bb3",
      rpcUrl: "https://rpc.testnet.moonbeam.network",
      type: "Ethereum",
      blockExplorer: "https://moonbase-blockscout.testnet.moonbeam.network",
      nativeTokenSymbol: "DEV",
      tokens: [
        {
          address: "0xFCefBC458DA5b11a10422C0703bea1D154887D76",
          name: "ERC20Sample",
          symbol: "ERC20S",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000FCefBC458DA5b11a10422C0703bea1D154887D762b",
        },
      ],
    },
  ],
};
