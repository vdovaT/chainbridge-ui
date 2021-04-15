import React, { useState } from "react";
import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import AboutDrawer from "../../Modules/AboutDrawer";
import ChangeNetworkDrawer from "../../Modules/ChangeNetworkDrawer";
import NetworkUnsupportedModal from "../../Modules/NetworkUnsupportedModal";
import PreflightModalTransfer from "../../Modules/PreflightModalTransfer";
import { Button, Typography, SelectInput } from "@chainsafe/common-components";
import { Form, Formik } from "formik";
import AddressInput from "../Custom/AddressInput";
import clsx from "clsx";
import TransferActiveModal from "../../Modules/TransferActiveModal";
import { useWeb3 } from "@chainsafe/web3-context";
import { useChainbridge } from "../../Contexts/ChainbridgeContext";
import TokenSelectInput from "../Custom/TokenSelectInput";
import TokenInput from "../Custom/TokenInput";
import { object, string } from "yup";
import { utils } from "ethers";
import { chainbridgeConfig } from "../../chainbridgeConfig";
import FeesFormikWrapped from "./FormikContextElements/Fees";
import Balance from "../Custom/Balance";
import { MOONBEAM_CYAN } from "../../Themes/LightTheme";

const useStyles = makeStyles(({ constants, palette }: ITheme) =>
  createStyles({
    root: {
      padding: `${constants.generalUnit}px ${constants.generalUnit * 6}px`,
      position: "relative",
      width: "100%",
    },
    walletArea: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    connectButton: {
      margin: `${constants.generalUnit * 3}px 0 ${constants.generalUnit * 6}px`,
    },
    connecting: {
      textAlign: "center",
      marginBottom: constants.generalUnit * 2,
    },
    connected: {
      width: "100%",
      "& > *:first-child": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      },
    },
    changeButton: {
      cursor: "pointer",
    },
    networkName: {
      padding: `${constants.generalUnit * 2}px ${
        constants.generalUnit * 1.5
      }px`,
      borderRadius: 2,
      color: palette.additional["gray"][9],
      marginTop: constants.generalUnit,
      marginBottom: constants.generalUnit * 3,
    },
    formArea: {
      "&.disabled": {
        opacity: 0.4,
      },
    },
    currencySection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      margin: `${constants.generalUnit * 3}px 0`,
    },
    tokenInputArea: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
      paddingRight: constants.generalUnit,
    },
    tokenInput: {
      margin: 0,
      "& > div": {
        height: 32,
        "& input": {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          borderRight: 0,
        },
      },
      "& span:last-child.error": {
        position: "absolute",
      },
    },
    maxButton: {
      height: 32,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      left: -1,
      color: MOONBEAM_CYAN,
      backgroundColor: "#fff",
      borderColor: MOONBEAM_CYAN,
      "&:hover": {
        backgroundColor: MOONBEAM_CYAN,
        color: "#fff",
      },
      "&:focus": {
        borderColor: palette.additional["gray"][6],
      },
    },
    currencySelector: {
      width: "45%",
      "& *": {
        cursor: "pointer",
      },
    },
    token: {},
    address: {
      margin: 0,
      marginBottom: constants.generalUnit * 3,
    },
    generalInput: {
      "& > span": {
        marginBottom: constants.generalUnit,
      },
    },
    moreInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: constants.generalUnit * 5,
      marginBottom: constants.generalUnit * 2,
      "& > i": {
        color: `${MOONBEAM_CYAN} !important`,
        cursor: "pointer",
      },
    },
    moonbeamLinks: {
      display: "flex",
      justifyContent: "space-between",
      alignContent: "baseline",
      "& > a": {
        marginLeft: "10px",
        color: MOONBEAM_CYAN,
      },
    },
    tokenItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      "& img, & svg": {
        display: "block",
        height: 14,
        width: 14,
        marginRight: 10,
      },
      "& span": {
        minWidth: `calc(100% - 30px)`,
        textAlign: "right",
      },
    },
    fees: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: constants.generalUnit,
      "& > *": {
        display: "block",
        width: "50%",
        color: palette.additional["gray"][8],
        marginBottom: constants.generalUnit / 2,
        "&:nth-child(even)": {
          textAlign: "right",
        },
      },
    },
    transferButtonSection: {
      display: "flex",
      justifyContent: "center",
    },
    balanceSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  })
);

type PreflightDetails = {
  tokenAmount: number;
  token: string;
  tokenSymbol: string;
  receiver: string;
};

const TransferPage = () => {
  const classes = useStyles();
  const {
    isReady,
    checkIsReady,
    wallet,
    onboard,
    tokens,
    address,
    network,
  } = useWeb3();
  const {
    homeChain,
    destinationChains,
    destinationChain,
    deposit,
    setDestinationChain,
    transactionStatus,
    resetDeposit,
    bridgeFee,
  } = useChainbridge();

  type DestinationChains = {
    chainId: number;
    name: string;
  }[];

  let filteredDestinationChains: DestinationChains = destinationChains;
  // If we are on an Ethereum chain already, do not show other Ethereum chains.
  if (homeChain?.name.includes("Ethereum")) {
    filteredDestinationChains = destinationChains.filter(
      (chain) => !chain.name.includes("Ethereum")
    );
  }

  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [changeNetworkOpen, setChangeNetworkOpen] = useState<boolean>(false);
  const [preflightModalOpen, setPreflightModalOpen] = useState<boolean>(false);

  const [preflightDetails, setPreflightDetails] = useState<PreflightDetails>({
    receiver: "",
    token: "",
    tokenAmount: 0,
    tokenSymbol: "",
  });

  const handleConnect = async () => {
    setWalletConnecting(true);
    !wallet && (await onboard?.walletSelect());
    await checkIsReady();
    setWalletConnecting(false);
  };

  const DECIMALS =
    preflightDetails && tokens[preflightDetails.token]
      ? tokens[preflightDetails.token].decimals
      : 18;

  const REGEX =
    DECIMALS > 0
      ? new RegExp(`^[0-9]{1,18}(.[0-9]{1,${DECIMALS}})?$`)
      : new RegExp(`^[0-9]{1,18}?$`);

  const transferSchema = object().shape({
    tokenAmount: string()
      .test("Token selected", "Please select a token", (value) => {
        if (
          !!value &&
          preflightDetails &&
          tokens[preflightDetails.token] &&
          tokens[preflightDetails.token].balance !== undefined
        ) {
          return true;
        } else {
          return false;
        }
      })
      .test("InputValid", "Input invalid", (value) => {
        try {
          return REGEX.test(`${value}`);
        } catch (error) {
          console.error(error);
          return false;
        }
      })
      .test("Max", "Insufficent funds", (value) => {
        if (
          value &&
          preflightDetails &&
          tokens[preflightDetails.token] &&
          tokens[preflightDetails.token].balance
        ) {
          return parseFloat(value) <= tokens[preflightDetails.token].balance;
        }
        return false;
      })
      .test("Min", "Less than minimum", (value) => {
        if (value) {
          return parseFloat(value) > 0;
        }
        return false;
      })
      .required("Please set a value"),
    token: string().required("Please select a token"),
    receiver: string()
      .test("Valid address", "Please add a valid address", (value) => {
        return utils.isAddress(value as string);
      })
      .required("Please add a receiving address"),
  });

  // TODO: line 467: How to pull correct HomeChain Symbol

  return (
    <article className={classes.root}>
      <div className={classes.walletArea}>
        {!isReady ? (
          <Button
            className={classes.connectButton}
            fullsize
            variant="primary"
            onClick={() => {
              handleConnect();
            }}
          >
            Connect MetaMask
          </Button>
        ) : walletConnecting ? (
          <section className={classes.connecting}>
            <Typography component="p" variant="h5">
              This app requires access to your wallet, <br />
              please login and authorize access to continue.
            </Typography>
          </section>
        ) : (
          <section className={classes.connected}>
            <div>
              <Typography variant="body1">Home Network</Typography>
              <Button
                className={classes.changeButton}
                variant="outline"
                onClick={() => setChangeNetworkOpen(true)}
              >
                Change
              </Button>
            </div>
            <Typography
              component="h3"
              variant="h3"
              className={classes.networkName}
            >
              {homeChain?.name}
            </Typography>
          </section>
        )}
      </div>
      <Formik
        initialValues={{
          tokenAmount: 0,
          token: "",
          receiver: "",
        }}
        validateOnChange={false}
        validationSchema={transferSchema}
        onSubmit={(values) => {
          setPreflightDetails({
            ...values,
            tokenSymbol: tokens[values.token].symbol || "",
          });
          setPreflightModalOpen(true);
        }}
      >
        <Form
          className={clsx(classes.formArea, {
            disabled: !homeChain,
          })}
        >
          <section>
            <SelectInput
              label="Destination Network"
              className={classes.generalInput}
              disabled={!homeChain}
              options={filteredDestinationChains.map((dc) => ({
                label: dc.name,
                value: dc.chainId,
              }))}
              onChange={(value) => setDestinationChain(value)}
              value={destinationChain?.chainId}
            />
          </section>
          <section className={classes.currencySection}>
            <section className={classes.currencySelector}>
              <TokenSelectInput
                tokens={tokens}
                name="token"
                label="Token"
                disabled={!destinationChain}
                className={classes.generalInput}
                placeholder=""
                options={
                  Object.keys(tokens).map((t) => ({
                    value: t,
                    label: (
                      <div className={classes.tokenItem}>
                        {tokens[t]?.imageUri && (
                          <img
                            src={tokens[t]?.imageUri}
                            alt={tokens[t]?.symbol}
                          />
                        )}
                        <span>{tokens[t]?.symbol || t}</span>
                      </div>
                    ),
                  })) || []
                }
              />
            </section>
            <section className={classes.balanceSection}>
              <Balance
                tokens={tokens}
                sync={(tokenAddress: string) => {
                  setPreflightDetails({
                    ...preflightDetails,
                    token: tokenAddress,
                    receiver: "",
                    tokenAmount: 0,
                    tokenSymbol: "",
                  });
                }}
              />
            </section>
          </section>
          <section className={classes.currencySection}>
            <section>
              <div
                className={clsx(classes.tokenInputArea, classes.generalInput)}
              >
                <TokenInput
                  classNames={{
                    input: clsx(classes.tokenInput, classes.generalInput),
                    button: classes.maxButton,
                  }}
                  tokenSelectorKey="token"
                  tokens={tokens}
                  disabled={
                    !destinationChain ||
                    !preflightDetails.token ||
                    preflightDetails.token === ""
                  }
                  name="tokenAmount"
                  label="Amount To Send"
                />
              </div>
            </section>
          </section>
          <section>
            <AddressInput
              disabled={!destinationChain}
              name="receiver"
              label="Destination Address"
              placeholder="Please enter the receiving address"
              className={classes.address}
              senderAddress={`${address}`}
            />
          </section>
          <FeesFormikWrapped
            amountFormikName="tokenAmount"
            className={classes.fees}
            fee={bridgeFee}
            feeSymbol={homeChain?.nativeTokenSymbol}
            symbol={
              preflightDetails && tokens[preflightDetails.token]
                ? tokens[preflightDetails.token].symbol
                : undefined
            }
          />
          <section className={classes.transferButtonSection}>
            <Button
              type="submit"
              fullsize
              variant="primary"
              disabled={!isReady}
            >
              Start Transfer
            </Button>
          </section>
          <section className={classes.moreInfo}>
            <i
              className="far fa-question-circle fa-2x"
              onClick={() => setAboutOpen(true)}
            />
            <section className={classes.moonbeamLinks}>
              <a
                rel="noopener noreferrer"
                href="https://moonbeam.network/"
                target="_blank"
              >
                Moonbeam Network
              </a>
              <a
                rel="noopener noreferrer"
                href="https://docs.moonbeam.network/"
                target="_blank"
              >
                Documentation
              </a>
            </section>
          </section>
        </Form>
      </Formik>
      <AboutDrawer open={aboutOpen} close={() => setAboutOpen(false)} />
      <ChangeNetworkDrawer
        open={changeNetworkOpen}
        close={() => setChangeNetworkOpen(false)}
      />
      <NetworkUnsupportedModal
        open={!homeChain && isReady}
        network={network}
        supportedNetworks={chainbridgeConfig.chains.map((bc) => bc.networkId)}
      />
      <PreflightModalTransfer
        open={preflightModalOpen}
        close={() => setPreflightModalOpen(false)}
        receiver={preflightDetails?.receiver || ""}
        sender={address || ""}
        start={() => {
          setPreflightModalOpen(false);
          preflightDetails &&
            deposit(
              preflightDetails.tokenAmount,
              preflightDetails.receiver,
              preflightDetails.token
            );
        }}
        sourceNetwork={homeChain?.name || ""}
        targetNetwork={destinationChain?.name || ""}
        tokenSymbol={preflightDetails?.tokenSymbol || ""}
        value={preflightDetails?.tokenAmount || 0}
      />
      <TransferActiveModal open={!!transactionStatus} close={resetDeposit} />
    </article>
  );
};
export default TransferPage;
