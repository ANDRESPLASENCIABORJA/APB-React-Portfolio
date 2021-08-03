// Here will go all the components, header, main section and footer of the webpage
// App.js is the conventional name for the main entry point

// First import react
import React from "react";

// import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import css stylesheet
import "./App.css";
import Footer from "./components/Footer";

//Import files
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className="application-header">
        <Header />
        <div className="container-fluid main-sections">
          <Switch>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/APB-React-Portfolio">
              <About />
            </Route>
            {/* Define a route that will take in variable data */}
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            {/* Define a route that will take in variable data */}
            <Route exact path="/contact">
              <Contact />
            </Route>
            {/* Define a route that will take in variable data */}
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
