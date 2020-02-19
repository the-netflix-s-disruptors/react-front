import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./pages/PassReset";
import ResetingPassword from "./pages/PassResetConf";
import UserEdition from "./pages/UserEdition";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/preferences" component={UserEdition} />
          {/* <PrivateRoute exact path="/" component={Home} /> */}
          <Route exact path="/sign-in" component={SignIn} />
          <Route path="/sign-in/:uuid/:token" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/password-reset" component={ResetPassword} />
          <Route
            path="/password-reseting/:uuid/:token"
            component={ResetingPassword}
          />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
