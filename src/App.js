import React from "react";
import "./scss/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FetchVideos from "./components/FetchVideos";
import RedirectHome from "./components/RedirectHome";
import ManageVideos from "./components/ManageVideos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={FetchVideos} />
          <Route exact path="/edit" component={ManageVideos} />
          <Route exact path="/:id" component={RedirectHome} />
        </Switch>
        <div id="footer-grow" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
