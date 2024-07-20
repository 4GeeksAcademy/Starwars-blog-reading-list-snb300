import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./js/components/Navbar";
import Footer from "./js/components/Footer";
import Home from "./js/views/Home";
import Single from "./js/views/Single";
import Favorites from "./js/views/Favorites";
import AppContextProvider from "./js/store/AppContext";

const Layout = () => {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:type/:id" component={Single} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
        <Footer />
      </Router>
    </AppContextProvider>
  );
};

export default Layout;
