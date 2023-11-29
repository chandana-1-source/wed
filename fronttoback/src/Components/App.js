// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
