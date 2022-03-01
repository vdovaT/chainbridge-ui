import { createTheme } from "@chainsafe/common-theme";

export const MOONBEAM_PINK = "#E1147B";
export const MOONBEAM_PURPLE = "#3D1D5A";
export const MOONBEAM_CYAN = "#ecb100";

export const lightTheme = createTheme({
  globalStyling: {
    body: {
      backgroundColor: "#FFFFFF",
    },
  },
  themeConfig: {
    constants: {
      navItemHeight: 42,
    },
    palette: {
      additional: {
        transferUi: {
          1: "#595959", // FAQ button // gray8
        },
        header: {
          1: "#595959", // Text color //gray8
        },
        preflight: {
          1: MOONBEAM_PINK, // Button bg color
          2: "#595959", // Button color
        },
        transactionModal: {
          1: MOONBEAM_PINK, // border //geekblue5
          2: MOONBEAM_CYAN, // button
        },
      },
    },
    overrides: {
      CheckboxInput: {
        root: {
          alignItems: "center",
        },
        label: {
          fontSize: "14px",
        },
      },
      Typography: {
        root: {
          fontFamily: "'Open Sans', sans-serif !important",
        },
        body1: {
          fontSize: "16px",
        },
      },
      SelectInput: {
        root: {
          fontSize: "16px",
        },
        label: {
          fontSize: "16px",
        },
        valueContainer: {
          fontSize: "14px", // Placeholder text
        },
        option: {
          fontSize: "14px",
        },
        singleValue: {
          fontSize: "14px",
        },
      },
      TextInput: {
        root: {
          fontSize: "14px",
        },
        label: {
          fontSize: "16px",
        },
        input: {
          root: {
            fontSize: "14px !important",
          },
        },
      },
      Button: {
        variants: {
          primary: {
            root: {
              backgroundColor: MOONBEAM_CYAN,
              color: "#ffffff",
              border: `1px solid ${MOONBEAM_CYAN}`,
              "& svg": {
                fill: MOONBEAM_CYAN,
              },
              borderRadius: 50,
              transition:
                "box-shadow 300ms ease-in-out, color 300ms ease-in-out",
              boxShadow: `1px 1px 2px ${MOONBEAM_CYAN}`,
              height: "5vh",
              fontSize: "16px",
              width: "50% !important",
              "&:disabled": {
                boxShadow: "none",
              },
            },
            active: {
              backgroundColor: "transparent",
              color: MOONBEAM_CYAN,
              borderColor: MOONBEAM_CYAN,
              "& svg": {
                fill: "#ffffff",
              },
              boxShadow: `0 0 40px 40px #ffffff inset`,
              "&:disabled": {
                boxShadow: "none",
              },
            },
            hover: {
              backgroundColor: "transparent",
              color: MOONBEAM_CYAN,
              borderColor: MOONBEAM_CYAN,
              "& svg": {
                fill: "#ffffff",
              },
              boxShadow: `0 0 40px 40px #ffffff inset`,
              "&:disabled": {
                boxShadow: "none",
              },
            },
            focus: {
              backgroundColor: "transparent",
              color: MOONBEAM_CYAN,
              borderColor: MOONBEAM_CYAN,
              "& svg": {
                fill: "#ffffff",
              },
              boxShadow: "0 0 40px 40px #ffffff inset",
              "&:disabled": {
                boxShadow: "none",
              },
            },
          },
          outline: {
            root: {
              backgroundColor: "transparent",
              color: MOONBEAM_CYAN,
              border: `1px solid ${MOONBEAM_CYAN}`,
              "& svg": {
                fill: "#ffffff",
              },
              borderRadius: 50,
              transition:
                "box-shadow 300ms ease-in-out, color 300ms ease-in-out",
            },
            active: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: MOONBEAM_CYAN,
              color: "#ffffff",
              borderColor: "transparent",
              "& svg": {
                fill: MOONBEAM_CYAN,
              },
            },
            focus: {
              backgroundColor: MOONBEAM_CYAN,
              color: "#ffffff",
              borderColor: "transparent",
              "& svg": {
                fill: MOONBEAM_CYAN,
              },
            },
          },
        },
      },
    },
  },
});
