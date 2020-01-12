import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Home, HowItWorks } from './pages';


const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/home" component={Home} exact />
        <Route path="/howitworks" component={HowItWorks} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </div>
    </Router>
  );
};

export default Routes;
