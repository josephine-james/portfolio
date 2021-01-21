import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              className="nav-links"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="/cards"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
