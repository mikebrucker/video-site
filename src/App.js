import React from "react";
import "./scss/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import RedirectHome from "./components/layout/RedirectHome";
import FetchVideos from "./components/videos/FetchVideos";
import ManageVideos from "./components/videos/ManageVideos";

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
