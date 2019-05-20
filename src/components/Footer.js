import React from 'react'
import { Link } from 'gatsby'

// import logo from '../../static/img/logo.svg'
// import facebook from '../../static/img/social/facebook.svg'
// import instagram from '../../static/img/social/instagram.svg'
// import twitter from '../../static/img/social/twitter.svg'
// import vimeo from '../../static/img/social/vimeo.svg'
import logo from '../../static/img/bluprnts/bluprnts - grey.svg';

const Footer = class extends React.Component {
  render() {
    return (

      <footer className="footer footer-light-medium" >
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <div className="pt-10 pb-10">
                <img
                  src={logo}
                  className="small-footer-logo"
                  alt="logo"
                />
                <div className="footer-description pt-10 pb-10">
                  bluprnts is built for you. Take the complication out of projections.
                    </div>
              </div>
              <div>
                <span className="moto">Follow our social accounts with <i className="fa fa-heart color-red"></i></span>
                <div className="social-links pt-10 pb-10">
                  {
                    /* <a title="facebook" href="https://facebook.com">
                    <img
                     src={facebook}
                     alt="Facebook"
                     style={{ width: '1em', height: '1em' }}
                    />
                    </a> */
                  }
                  <a href="/facebook">
                    <span className="icon"><i className="fa fa-facebook"></i></span>
                  </a>
                  <a href="/twitter">
                    <span className="icon"><i className="fa fa-twitter"></i></span>
                  </a>
                  <a href="/linkedin">
                    <span className="icon"><i className="fa fa-linkedin"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-6 is-offset-2">
              <div className="columns">
                <div className="column">
                  <ul className="footer-column">
                    <li className="column-header">
                      bluprnts
                            </li>
                    <li className="column-item"><a href="#">Home</a></li>
                    <li className="column-item"><a href="#">Pricing</a></li>
                    <li className="column-item"><a href="#">Get started</a></li>
                    <li className="column-item"><a href="#">Help</a></li>
                  </ul>
                </div>
                <div className="column">
                  <ul className="footer-column">
                    <li className="column-header">
                      Resources
                            </li>
                    <li className="column-item"><a href="#">Learning</a></li>
                    <li className="column-item"><a href="#">Support center</a></li>
                    <li className="column-item"><a href="#">Frequent questions</a></li>
                    <li className="column-item"><a href="#">Schedule a demo</a></li>
                  </ul>
                </div>
                <div className="column">
                  <ul className="footer-column">
                    <li className="column-header">
                      Terms
                            </li>
                    <li className="column-item"><a href="#">Terms of Service</a></li>
                    <li className="column-item"><a href="#">Privacy policy</a></li>
                    <li className="column-item"><a href="#">SaaS services</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

    // <footer className="footer has-background-black has-text-white-ter">
    //     <div className="content has-text-centered">
    //       <img
    //         src={logo}
    //         alt="Kaldi"
    //         style={{ width: '14em', height: '10em' }}
    //       />
    //     </div>
    //     <div className="content has-text-centered has-background-black has-text-white-ter">
    //       <div className="container has-background-black has-text-white-ter">
    //         <div className="columns">
    //           <div className="column is-4">
    //             <section className="menu">
    //               <ul className="menu-list">
    //                 <li>
    //                   <Link to="/" className="navbar-item">
    //                     Home
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="navbar-item" to="/about">
    //                     About
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="navbar-item" to="/products">
    //                     Products
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="navbar-item" to="/contact/examples">
    //                     Form Examples
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <a
    //                     className="navbar-item"
    //                     href="/admin/"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Admin
    //                   </a>
    //                 </li>
    //               </ul>
    //             </section>
    //           </div>
    //           <div className="column is-4">
    //             <section>
    //               <ul className="menu-list">
    //                 <li>
    //                   <Link className="navbar-item" to="/blog">
    //                     Latest Stories
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="navbar-item" to="/contact">
    //                     Contact
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </section>
    //           </div>
    //           <div className="column is-4 social">
    //             <a title="facebook" href="https://facebook.com">
    //               <img
    //                 src={facebook}
    //                 alt="Facebook"
    //                 style={{ width: '1em', height: '1em' }}
    //               />
    //             </a>
    //             <a title="twitter" href="https://twitter.com">
    //               <img
    //                 className="fas fa-lg"
    //                 src={twitter}
    //                 alt="Twitter"
    //                 style={{ width: '1em', height: '1em' }}
    //               />
    //             </a>
    //             <a title="instagram" href="https://instagram.com">
    //               <img
    //                 src={instagram}
    //                 alt="Instagram"
    //                 style={{ width: '1em', height: '1em' }}
    //               />
    //             </a>
    //             <a title="vimeo" href="https://vimeo.com">
    //               <img
    //                 src={vimeo}
    //                 alt="Vimeo"
    //                 style={{ width: '1em', height: '1em' }}
    //               />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
