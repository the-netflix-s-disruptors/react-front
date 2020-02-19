import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useAuth } from "../context/auth";

const NavBar = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit">HYPERTUBE</Typography>
          <Button onClick={logOut}> LOG OUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
