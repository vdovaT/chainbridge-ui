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
  // Goerli - Kotti Bridge
  chains: [
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
      erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
      rpcUrl: "https://goerli.prylabs.net",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x735B895bCb37cBba5812154f4F34480EcE1B672C",
          name: "Wrapped ETC",
          symbol: "wETC",
          imageUri: WETHIcon,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
        },
        {
          address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
          name: "An ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
        },
      ],
    },
    {
      chainId: 2,
      networkId: 6,
      name: "Ethereum Classic - Kotti",
      bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
      erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
      rpcUrl: "https://www.ethercluster.com/kotti",
      type: "Ethereum",
      blockExplorer: "https://blockscout.com/etc/kotti/tx",
      nativeTokenSymbol: "ETC",
      tokens: [
        {
          address: "0x23A9FD05ef0c5fb9dDE964C4d4191A169Fd221f8",
          name: "Wrapped ETC",
          symbol: "wETC",
          imageUri: WETHIcon,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
          isNativeWrappedToken: true,
        },
        {
          address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
          name: "An ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
        },
      ],
    },
  ],
  // AVAX-C - Goerli - @Arsenii Petrovich - Protofire
  // chains: [
  //   {
  //     chainId: 1,
  //     networkId: 5,
  //     name: "Ethereum - Goerli",
  //     bridgeAddress: "0x0993CEE13a42301d2e050693806fe79E822d42fB",
  //     erc20HandlerAddress: "0x68b6A17C5E4B08759ee7F2e092356c479C5Cc65d",
  //     rpcUrl:
  //       "https://eth-goerli.alchemyapi.io/v2/Yf3zLkgLb5nc_KHg35Szq6k9EzpedEmn",
  //     type: "Ethereum",
  //     blockExplorer: "https://goerli.etherscan.io/tx",
  //     nativeTokenSymbol: "ETH",
  //     tokens: [
  //       {
  //         address: "0x6D16859DE8C9421E52c4F5A6003DAcA3B4f8e36B",
  //         name: "ERC20",
  //         symbol: "ERC20",
  //         imageUri: ETHIcon,
  //         resourceId:
  //           "0x0000000000000000000000F1c1e7dfF8466f8A3887AB4a9d398727A700DF9305",
  //       },
  //       {
  //         address: "0x71181Ed7D6f42b594443a4Fd7F0Ce24B08787b77",
  //         name: "ERC721",
  //         symbol: "ERC721",
  //         imageUri: ETHIcon,
  //         resourceId:
  //           "0x0000000000000000000000736eF91A34E233630A23b4d02D29b3ea8726AF9C05",
  //       },
  //     ],
  //   },
  //   {
  //     chainId: 2,
  //     networkId: 43113,
  //     name: "AVAX-C Chain",
  //     bridgeAddress: "0xed52eCA444088D3892EdaEbb05Ccd012165545D3",
  //     erc20HandlerAddress: "0xd4B2c7B6CB241848Ac38EA94F131263A820c462D",
  //     rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
  //     type: "Ethereum",
  //     blockExplorer: "https://cchain.explorer.avax-test.network/tx",
  //     nativeTokenSymbol: "AVAX",
  //     tokens: [
  //       {
  //         address: "0x6D16859DE8C9421E52c4F5A6003DAcA3B4f8e36B",
  //         name: "ERC20",
  //         symbol: "ERC20",
  //         imageUri: ETHIcon,
  //         resourceId:
  //           "0x0000000000000000000000F1c1e7dfF8466f8A3887AB4a9d398727A700DF9305",
  //       },
  //       {
  //         address: "0x71181Ed7D6f42b594443a4Fd7F0Ce24B08787b77",
  //         name: "ERC721",
  //         symbol: "ERC721",
  //         imageUri: ETHIcon,
  //         resourceId:
  //           "0x0000000000000000000000736eF91A34E233630A23b4d02D29b3ea8726AF9C05",
  //       },
  //     ],
  //   },
  // ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};
