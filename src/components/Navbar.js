import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../images/bluprnts/bluprnts - white.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-wrapper is-cloned"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="bluprnts" />
              </Link>

              {/* Hamburger menu */}
              <div class="custom-burger" data-target="is-static">
                <a class="responsive-btn">
                  <span class="menu-toggle">
                    <span class="icon-box-toggle">
                      <span class="rotate">
                        <i class="icon-line-top"></i>
                        <i class="icon-line-center"></i>
                        <i class="icon-line-bottom"></i>
                      </span>
                    </span>
                  </span>
                </a>
              </div>

              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* Navbar menu */}
            <div id="is-cloned" class="navbar-menu">
              {/* <!-- Navbar Start --> */}
              <div class="navbar-start">

              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
                {/* <!-- Dropdown -->
                <!-- {{> megamenu}} -->
                <!-- Navbar item -->
                <!-- <a class="navbar-item is-slide is-centered-tablet is-hidden-desktop is-hidden-tablet"
                    href="landing-v4-features.html">
                    Product
                </a> -->
                <!-- <a class="navbar-item is-slide" href="landing-v4-features.html">
                    Features
                </a> -->
                <!-- Navbar item -->
                <!-- <a class="navbar-item is-slide" href="landing-v4-pricing.html">
                    Pricing
                </a> --> */}

              </div>

              {/* <!-- Navbar end --> */}
              <div class="navbar-end">
                {/* <!-- Navbar item -->
                <!-- <a class="navbar-item is-slide is-centered-tablet" href="landing-v4-pricing.html">
                    Pricing
                </a> -->
                <!-- Navbar item --> */}
                <div class="navbar-item is-button is-centered-tablet">
                  <a id="#signup-btn-double" target="_blank" href="https://app.bluprnts.com"
                    class="button button-cta is-bold btn-align secondary-btn raised">
                    Try the demo!
                    </a>
                  {/* <!-- Signup button --> */}
                  {/* <!-- <div class="navbar-item is-button is-centered-tablet">
                    <a id="#signup-btn" href="landing-v4-login.html" class="button button-cta is-bold btn-align secondary-btn raised">
                        Sign up
                    </a>
                </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav
          className="navbar navbar-wrapper is-transparent is-static"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="bluprnts" />
              </Link>

              {/* Hamburger menu */}
              <div class="custom-burger" data-target="is-static">
                <a class="responsive-btn">
                  <span class="menu-toggle">
                    <span class="icon-box-toggle">
                      <span class="rotate">
                        <i class="icon-line-top"></i>
                        <i class="icon-line-center"></i>
                        <i class="icon-line-bottom"></i>
                      </span>
                    </span>
                  </span>
                </a>
              </div>

              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>


            {/* <!-- Navbar menu --> */}
            <div id="is-static" class="navbar-menu">
              {/* <!-- Navbar Start --> */}
              <div class="navbar-start">

              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>

                {/* <!-- Dropdown -->
                <!-- {{> megamenu}} -->
                <!-- Navbar item -->
                <!-- <a class="navbar-item is-slide is-centered-tablet is-hidden-desktop is-hidden-tablet"
                    href="landing-v4-features.html">
                    Product
                </a>
                <a class="navbar-item is-slide" href="landing-v4-features.html">
                    Features
                </a> -->
                <!-- Navbar item -->
                <!-- <a class="navbar-item is-slide" href="landing-v4-pricing.html">
                    Pricing
                </a> --> */}

              </div>

              {/* <!-- Navbar end --> */}
              <div class="navbar-end">
                {/* <!-- Signup button -->
                <!-- <div class="navbar-item is-button is-centered-tablet">
                    <a id="#signup-btn-double" target="_blank" href="https://app.bluprnts.com" class="button button-cta is-bold btn-align secondary-btn raised">
                        Try the demo!
                    </a>
                </div> --> */}
              </div>

            </div>
          </div>
        </nav>

      </React.Fragment>
    )
  }
}

export default Navbar
