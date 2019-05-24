import React from "react";
import { Link } from "gatsby";
import logo from "../../static/img/bluprnts/bluprnts.svg";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      navbarState: ""
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.navbarScroll);
  }

  // set the scrolling behaviours
  navbarScroll = () => {
    if (window.scroll) {
      var height = window.scrollY; //getting the scrolling height of window
      this.setState({ navbarState: height > 50 ? "is-active" : "" }); // set the state, dependent on the height
    }
  };

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <>
        <nav
          className={`navbar navbar-wrapper is-cloned ${
            this.state.navbarState
          }`}
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="bluprnts" />
              </Link>

              {/* Hamburger menu */}
              <div className="custom-burger" data-target="is-static">
                <div className="responsive-btn">
                  <span className="menu-toggle">
                    <span className="icon-box-toggle">
                      <span className="rotate">
                        <i className="icon-line-top" />
                        <i className="icon-line-center" />
                        <i className="icon-line-bottom" />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Navbar menu */}
            <div id="is-cloned" className="navbar-menu">
              {/* <!-- Navbar Start --> */}
              <div className="navbar-start">
                {/* <Link className="navbar-item" to="/features">
                  Features
                </Link> */}
                <Link className="navbar-item" to="/how">
                  How
                </Link>
                {/* <Link className="navbar-item" to="/about">
                  About
              </Link> */}
                <Link className="navbar-item" to="/pricing">
                  Pricing
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>

              {/* <!-- Navbar end --> */}
              <div className="navbar-end">
                <div
                  className="navbar-item is-button is-centered-tablet"
                  onClick={this.navbarScroll}
                >
                  <a
                    id="#signup-btn-double"
                    href="https://app.bluprnts.com"
                    className="button button-cta is-bold btn-align secondary-btn raised"
                  >
                    Try the demo!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-wrapper is-transparent is-static">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="bluprnts" />
              </Link>

              {/* Hamburger menu */}
              <div className="custom-burger" data-target="is-static">
                <div className="responsive-btn">
                  <span className="menu-toggle">
                    <span className="icon-box-toggle">
                      <span className="rotate">
                        <i className="icon-line-top" />
                        <i className="icon-line-center" />
                        <i className="icon-line-bottom" />
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              <div
                className={`navbar-burger burger ${
                  this.state.navBarActiveClass
                }`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* <!-- Navbar menu --> */}
            <div id="is-static" className="navbar-menu">
              {/* <!-- Navbar Start --> */}
              <div className="navbar-start">
                {/* <Link className="navbar-item" to="/features">
                  Features
                </Link> */}
                <Link className="navbar-item" to="/how">
                  How
                </Link>
                {/* <Link className="navbar-item" to="/about">
                  About
                </Link> */}
                <Link className="navbar-item" to="/pricing">
                  Pricing
                </Link>
                {/* <Link className="navbar-item" to="/products">
                  Products
              </Link> */}
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>

                {/* <!-- Dropdown -->
                <!-- {{> megamenu}} -->
                <!-- Navbar item -->
                <!-- <a className="navbar-item is-slide is-centered-tablet is-hidden-desktop is-hidden-tablet"
                    href="landing-v4-features.html">
                    Product
                </a>
                <a className="navbar-item is-slide" href="landing-v4-features.html">
                    Features
                </a> -->
                <!-- Navbar item -->
                <!-- <a className="navbar-item is-slide" href="landing-v4-pricing.html">
                    Pricing
                </a> --> */}
              </div>

              {/* <!-- Navbar end --> */}
              <div className="navbar-end">
                {/* <!-- Signup button -->
                <!-- <div className="navbar-item is-button is-centered-tablet">
                    <a id="#signup-btn-double" target="_blank" href="https://app.bluprnts.com" className="button button-cta is-bold btn-align secondary-btn raised">
                        Try the demo!
                    </a>
                </div> --> */}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
