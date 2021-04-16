import { NavLink, Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import { ROUTE_LINKS } from "../Components/Routes";
import {
  MOONBEAM_CYAN,
  MOONBEAM_PINK,
  MOONBEAM_PURPLE,
} from "../Themes/LightTheme";
interface IAppWrapper {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    inner: {
      paddingTop: (constants.navItemHeight as number) * 2,
      paddingBottom: (constants.navItemHeight as number) * 2,
    },
    cta: {
      display: "block",
      maxWidth: 200,
      maxHeight: 200,
      position: "fixed",
      bottom: constants.generalUnit * 3,
      right: constants.generalUnit * 3,
    },
    content: {
      margin: `0 auto`,
      maxWidth: 660,
      borderRadius: 4,
    },
    pageArea: {
      overflow: "hidden",
      border: "8px solid",
      borderImageSlice: 1,
      borderImageSource: `linear-gradient(to left, ${MOONBEAM_PINK}, ${MOONBEAM_PURPLE}, ${MOONBEAM_CYAN})`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: `0 0 8px ${MOONBEAM_PURPLE}`,
    },
    navTabs: {
      display: "flex",
      margin: `${constants.generalUnit * 2}px 0`,
      width: "90%",
      justifyContent: "space-evenly",
      "& > a": {
        display: "flex",
        justifyContent: "center",
        width: "10em",
        padding: `${constants.generalUnit}px ${constants.generalUnit * 1.5}px`,
        textDecoration: "none",
        maxHeight: constants.navItemHeight,
        "&.active": {
          color: palette.additional["gray"][9],
          borderBottom: `4px solid ${MOONBEAM_PINK}`,
        },
      },
      "& svg": {
        height: 14,
        width: 14,
      },
    },
  });
});

const AppWrapper: React.FC<IAppWrapper> = ({ children }: IAppWrapper) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <section className={classes.inner}>
        <AppHeader />
        <section className={classes.content}>
          <div className={classes.pageArea}>
            <section className={classes.navTabs}>
              <NavLink activeClassName="active" to={ROUTE_LINKS.Transfer}>
                <Typography variant="h4">Transfer</Typography>
              </NavLink>
              <NavLink activeClassName="active" to={ROUTE_LINKS.Mint}>
                <Typography variant="h4">Mint ERC20S</Typography>
              </NavLink>
            </section>
            {children}
          </div>
        </section>

        {/* Put CTA here */}
        {/* <a className={classes.cta} rel="noopener noreferrer" target="_blank" href="#">
        </a> */}
      </section>
    </section>
  );
};

export default AppWrapper;
