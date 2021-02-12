import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import ProfileSet from "routes/SignUp/ProfileSet";
import Confirm from "routes/SignUp/Confirm";
import SetInfo from "routes/SignUp/SetInfo";
import FindPassword from "routes/Find/FindPassword";
import ChangePassword from "routes/Find/ChangePassword";

const AppRouter = ({ isLoggedIn }) => {
  const [profileSet, setProfileSet] = useState(false);
  return (
    <>
      <Router>
        <Switch>
          {isLoggedIn ? (
            <>
              {profileSet ? (
                <>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </>
              ) : (
                <Route exact path="/">
                  <ProfileSet />
                </Route>
              )}
            </>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
              <Route exact path="/signup1">
                <Confirm />
              </Route>
              <Route exact path="/signup2">
                <SetInfo />
              </Route>
              <Route exact path="/findpassword">
                <FindPassword />
              </Route>
              <Route exact path="/changepassword">
                <ChangePassword />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
