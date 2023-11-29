import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Service from "./Routes/Service";
import About from "./Routes/About";
import Signup from "./Components/Signup";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}
