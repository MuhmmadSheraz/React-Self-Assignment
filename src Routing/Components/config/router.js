import React from "react";
import {
  BrowserRouter as Router, //alias (nickname)
  Switch,
  Route,
} from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact Us";
import Navbar from '../views/NavBar'

let MainRouter = () => {
  return (
    <Router>

      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ContactUs">
            <Contact />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
export default MainRouter;
