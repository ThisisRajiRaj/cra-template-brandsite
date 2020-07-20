import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Portfolio from "./pages/Portfolio.js";
import NoMatch from "./pages/NoMatch.js";
import ArticleList from "./pages/ArticleList.js";
import Article from "./pages/Article.js";
import { NavigationBar } from "./components/NavBar";

import "./css/App.css";
import "./css/WebsiteBanner.css";
import "./css/Blog.css";
import "./css/NavBar.css";
import "./css/About.css";
import "./css/SubscribeBox.css";
import "./css/Home.css";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={ArticleList} />
          <Route exact path="/blog/:name" component={Article} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
