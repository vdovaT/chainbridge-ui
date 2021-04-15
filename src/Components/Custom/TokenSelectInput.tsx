import React from "react";
import {
  IFormikSelectInputProps,
  FormikSelectInput,
} from "@chainsafe/common-components";
import { Tokens } from "@chainsafe/web3-context/dist/context/tokensReducer";

interface ITokenSelectInput extends IFormikSelectInputProps {
  tokens: Tokens;
  sync?: (value: string) => void;
}

const TokenSelectInput: React.FC<ITokenSelectInput> = ({
  className,
  name,
  tokens,
  ...rest
}: ITokenSelectInput) => {
  return <FormikSelectInput name={name} className={className} {...rest} />;
};

export default TokenSelectInput;
