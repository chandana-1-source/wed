// Navbar.js
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleMenuClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trip</h1>
        <div className="menu-icons" onClick={this.handleMenuClick}>
          <i className="fa-solid fa-house"></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
