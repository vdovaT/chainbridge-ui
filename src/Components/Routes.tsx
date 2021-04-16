import React from "react";
import { Switch, Route, Redirect } from "@chainsafe/common-components";
import TransferPage from "./Pages/TransferPage";
import MinterPage from "./Pages/MinterPage";

export const ROUTE_LINKS = {
  Transfer: "/transfer",
  Mint: "/mint",
};

const FilesRoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_LINKS.Transfer} component={TransferPage} />
      <Route exact path={ROUTE_LINKS.Mint} component={MinterPage} />
      <Route exact path="/">
        <Redirect to={ROUTE_LINKS.Transfer} />
      </Route>
    </Switch>
  );
};

export default FilesRoutes;
