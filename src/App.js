import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import DashBoard from "./Page/DashBoard";
import NavigationBar from "./Component/NavigationBar";
import FormSteps from "./Component/FormSteps/FomSteps";
import SignUp from "./Component/SingUp";

import EditCoverPhoto from "./Component/EditCoverPhoto";
import EditFeaturedLink from "./Component/EditFeaturedLink";
import UploadPhoto from "./Component/UploadPhoto";
import EditAudience from "./Component/EditCoverPhoto";
import EditPhysicalAttribute from "./Component/EditPhysicalAttribute";
import EditLanguage from "./Component/EditLanguage";

function App() {
  return (
    <div className="App">
      {/* <NavigationBar linkName={"Page"} /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/EditCoverPhoto" component={EditCoverPhoto} />
          <Route exact path="/EditFeaturedLink" component={EditFeaturedLink} />
          <Route exact path="/UploadPhoto" component={UploadPhoto} />
          <Route exact path="/EditAudience" component={EditAudience} />
          <Route exact path="/EditLanguage" component={EditLanguage} />
          <Route
            exact
            path="/EditPhysicalAttribute"
            component={EditPhysicalAttribute}
          />
          {/* <Route
            exact
            path="/"
            render={(props) => <PortFolio props={props} />}
          /> */}
          {/* <Route
            path="/setting"
            render={(props) => <DashBoard props={props} />}
          /> */}
          <Route path="/" exact render={(props) => <SignUp props={props} />} />
          <Route
            path="/NavigationBar"
            exact
            render={(props) => <NavigationBar props={props} />}
          />
          <Route
            path="/signup"
            exact
            render={(props) => <FormSteps props={props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
