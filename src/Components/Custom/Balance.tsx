import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@chainsafe/common-theme";
import { useField } from "formik";
import { TextInput } from "@chainsafe/common-components";
import { Tokens } from "@chainsafe/web3-context/dist/context/tokensReducer";

interface IBalance {
  tokens: Tokens;
  sync?: (value: string) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    balance: {
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

const Balance: React.FC<IBalance> = ({ tokens, sync }) => {
  const classes = useStyles();
  const [field] = useField("token");
  const balance = tokens[field.value]
    ? `${tokens[field.value]?.balance} ${tokens[field.value]?.symbol}`
    : "unavailable";

  const [synced, setSynced] = useState();
  useEffect(() => {
    if (sync && field.value !== synced) {
      setSynced(field.value);
      if (field.value !== "") {
        sync(field.value);
      }
    }
    // eslint-disable-next-line
  }, [field]);

  return (
    <TextInput
      label="Balance"
      type="text"
      onChange={() => {}}
      disabled={true}
      value={balance}
      className={classes.balance}
    />
  );
};

export default Balance;
