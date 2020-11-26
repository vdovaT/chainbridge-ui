import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";

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
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0x0993CEE13a42301d2e050693806fe79E822d42fB",
      erc20HandlerAddress: "0x68b6A17C5E4B08759ee7F2e092356c479C5Cc65d",
      rpcUrl:
        "https://eth-goerli.alchemyapi.io/v2/Yf3zLkgLb5nc_KHg35Szq6k9EzpedEmn",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x6D16859DE8C9421E52c4F5A6003DAcA3B4f8e36B",
          name: "ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x0000000000000000000000F1c1e7dfF8466f8A3887AB4a9d398727A700DF9305",
        },
      ],
    },
    {
      chainId: 2,
      networkId: 43113,
      name: "AVAX-C Chain",
      bridgeAddress: "0xed52eCA444088D3892EdaEbb05Ccd012165545D3",
      erc20HandlerAddress: "0xd4B2c7B6CB241848Ac38EA94F131263A820c462D",
      rpcUrl: "https://avalanche.altoros.com/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax-test.network/tx",
      nativeTokenSymbol: "AVAX",
      tokens: [
        {
          address: "0x0888CbA37729e3b3196bE81171E45E3A8bAf157A",
          name: "ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x0000000000000000000000F1c1e7dfF8466f8A3887AB4a9d398727A700DF9305",
        },
      ],
    },
  ],
};
