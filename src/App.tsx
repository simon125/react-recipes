import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "components/Navigation";
import {
  Home,
  UsersWithStateBottom,
  UsersWithStateTop,
  UsersWithContext,
  UsersWithCtxAndLocalFormState,
  UserWizard,
} from "pages";
import { UsersContextProvider } from "contexts/UsersContext";
import { UsersWizardContextProvider } from "contexts/UsersWizardContext";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
      </div>
      <div className="p-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user-wizard">
            <UsersWizardContextProvider>
              <UserWizard />
            </UsersWizardContextProvider>
          </Route>
          <Route path="/users1">
            <UsersWithStateBottom />
          </Route>
          <Route path="/users1a">
            <UsersWithStateTop />
          </Route>
          <Route path="/users2">
            <UsersContextProvider>
              <UsersWithContext />
            </UsersContextProvider>
          </Route>
          <Route path="/users2a">
            <UsersContextProvider>
              <UsersWithCtxAndLocalFormState />
            </UsersContextProvider>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
