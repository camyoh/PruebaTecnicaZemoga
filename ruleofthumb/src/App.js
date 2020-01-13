import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Home, PastTrials, HowItWorks, LogIn, Search, MoreInformation } from './pages';


const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/home" component={Home} exact />
        <Route path="/pastTrials" component={PastTrials} exact />
        <Route path="/howitworks" component={HowItWorks} exact />
        <Route path="/logIn" component={LogIn} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/moreInformation" component={MoreInformation} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </div>
    </Router>
  );
};

export default Routes;
