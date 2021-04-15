import React from "react";
import { makeStyles, createStyles } from "@chainsafe/common-theme";
import { TextInput } from "@chainsafe/common-components";
import { Tokens } from "@chainsafe/web3-context/dist/context/tokensReducer";

interface IWrapBalance {
  tokens: Tokens;
  tokenAddress: string;
  action: string;
  ethBalance: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    balance: {
      marginLeft: 0,
      "& input": {
        background: "white !important",
        border: "none",
        color: `#595959 !important`,
      },
      "& > span": {
        marginBottom: "4px !important",
      },
    },
  })
);

const WrapBalance: React.FC<IWrapBalance> = ({
  tokens,
  tokenAddress,
  action,
  ethBalance,
}) => {
  const classes = useStyles();
  const balance =
    action === "wrap" ? ethBalance : tokens[tokenAddress].balance.toString();

  return (
    <TextInput
      label="Balance"
      type="text"
      onChange={() => {}}
      disabled={true}
      value={`${balance} ETH`}
      className={classes.balance}
    />
  );
};

export default WrapBalance;
