import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider';
import BackgroundImage from 'gatsby-background-image'
import ContactTabs from '../components/ContactTabs'

// importing images
import heroImage from '../../static/img/illustrations/drawings/landing5-2.svg';
import logo from '../../static/img/bluprnts/bluprnts - white.svg';
import plChart from '../../static/img/screengrabs/profit and loss chart.png';
// image imports
import company from '../../static/img/illustrations/company.svg';
import wallet from '../../static/img/illustrations/wallet.svg';
import bank from '../../static/img/illustrations/bank.svg';
import factory from '../../static/img/illustrations/factory.svg';

import landingImage1 from '../../static/img/illustrations/drawings/landing5-1.svg'
import landingImage3 from '../../static/img/illustrations/drawings/landing5-3.svg'
import landingImage5 from '../../static/img/illustrations/drawings/landing5-5.svg'
import cityscape from '../../static/img/illustrations/drawings/line-city.svg'


export const IndexPageTemplate = ({data}) => (

    <>

      {/* <!-- Hero and Navbar --> */}
      <div className="hero is-default is-bold is-fullheight">

        {/* <!-- Hero content --> */}
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <figure className="">
                  <img
                    src={heroImage}
                    className="levitate"
                    alt="logo"
                  />

                </figure>
              </div>
              <div className="column is-5 is-offset-1 is-hero-title">
                {/* <!-- <h1 className="title is-1 is-bigger">
                        Build with
                    </h1> --> */}
                <img
                  src={logo}
                  className=""
                  alt="logo"
                />
                <h2 className="subtitle is-4">
                  Build your companies future from the building blocks you know about
                    </h2>
                <p className="">
                  {/* <!-- <a href="#" className="button button-cta is-bold btn-align secondary-btn raised">
                            Get Started
                        </a> --> */}
                  <a target="_blank" href="https://app.bluprnts.com" rel="noopener noreferrer"
                    className="button button-cta is-bold btn-align secondary-btn raised">
                    View Demo
                        </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Client logos --> */}
        {/* <!-- <div className="hero-foot pt-30 pb-30">
          <div className="container">
            <div className="tabs partner-tabs is-centered">
              <ul>
                <li><a><img className="partner-logo" src="../../static/img/logos/custom/covenant.svg" alt=""></a></li>
                  <li><a><img className="partner-logo" src="../../static/img/logos/custom/infinite.svg" alt=""></a></li>
                    <li><a><img className="partner-logo" src="../../static/img/logos/custom/phasekit.svg" alt=""></a></li>
                      <li><a><img className="partner-logo" src="../../static/img/logos/custom/grubspot.svg" alt=""></a></li>
                        <li><a><img className="partner-logo" src="../../static/img/logos/custom/gutwork.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div> --> */}

      </div>

      <section className="section section-feature-grey is-medium no-line-top">
        <div className="container ">
          {/* <!-- Title --> */}
          <div className="section-title-wrapper has-text-centered">
            <h2 className="title is-2">
              Welcome to bluprnts
            </h2>
            <h4 className="subtitle is-4">Forecasting just got simple</h4>
          </div>

          <div className="content-wrapper">
            {/* <!-- Icon boxes --> */}
            <div className="columns is-vcentered">
              <div className="column is-5 is-offset-1 has-text-centered">
                <div className="columns is-vcentered has-text-centered is-multiline">
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src={wallet} alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        Products
                      </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src={company} alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        People
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src={factory} alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        Costs
                      </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src={bank} alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        Loans
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Feature text --> */}
              <div className="column is-5 is-offset-1">
                <div className="content padding-20">
                  <h2 className="feature-headline is-clean">What is it?</h2>
                  <p className="no-margin-bottom pt-5 pb-5 is-size-5">bluprnts is a simple online business forecasting
                      tool that takes the pain out of creating projections and requires no complicated financial knowledge.
                        </p>
                  <p className="no-margin-bottom pt-5 pb-5 is-size-5">Build your company's future from the things you
                      know about. Products, people, costs and loans, that's it. All the calculuations are taken
                            care of.</p>
                </div>
              </div>
            </div>
            {/* <!-- Icon boxes --> */}
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <div className="section is-medium gradient-circle">
        <div className="container">
          {/* <!-- Title --> */}
          <div className="section-title-wrapper has-text-centered">
            {/* <!-- Divider --> */}
            <div className="special-divider">
              <span></span>
              <span></span>
            </div>
            <h2 className="title is-2">
              Welcome to bluprnts
            </h2>
            <h4 className="subtitle is-4">Forecasting just got really simple</h4>
          </div>

          {/* <!-- Content --> */}
          <div className="content-wrapper">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <div className="columns is-multiline has-text-centered">
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="square-icon-box rounded secondary">
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <i className="material-icons">dashboard</i>
                        </div>
                      </div>
                      <div className="box-title">
                        Dashboard
                                </div>
                      <div className="box-text">
                        Fully featured dashboard including charts, finances and KPIs
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="square-icon-box rounded secondary">
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <i className="material-icons">monetization_on</i>
                        </div>
                      </div>
                      <div className="box-title">
                        Accounting
                                </div>
                      <div className="box-text">
                        Future Profit &amp; Loss, Balance Sheet and Cashflow all generated quickly and
                        clearly
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="square-icon-box rounded secondary">
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <i className="material-icons">assessment</i>
                        </div>
                      </div>
                      <div className="box-title">
                        Reporting
                                </div>
                      <div className="box-text">
                        Downloadable reports complete with your financial statements and charts
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="square-icon-box rounded secondary">
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <i className="material-icons">layers</i>
                        </div>
                      </div>
                      <div className="box-title">
                        Scenarios
                                </div>
                      <div className="box-text">
                        Fully customisable scenarios. Comes with 5 built in scenarios.
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="square-icon-box rounded secondary">
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <i className="material-icons">language</i>
                        </div>
                      </div>
                      <div className="box-title">
                        Global
                                </div>
                      <div className="box-text">
                        Can be used to model any business anywhere in the world
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="square-icon-box rounded primary">
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <i className="material-icons">bubble_chart</i>
                        </div>
                      </div>
                      <div className="box-title">
                        Collaboration
                                </div>
                      <div className="box-text">
                        Integrate with your Xero account to quickly updated models
                                </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="column is-6">
                <img className="featured-ui app-showcase" src={plChart}
                  alt="" />
              </div>
            </div>

            {/* <!-- CTA --> */}
            <div className="cta-wrapper has-text-centered is-title-reveal">
              <a href="landing-v4-login.html" className="button button-cta is-bold btn-align primary-btn raised">
                Try it free
                </a>
            </div>
          </div>
          {/* <!-- /Content --> */}
        </div>
      </div>
      {/* <!-- /Features Section --> */}

      {/* <!-- App showcase Section --> */}
      <div className="section is-medium section-feature-grey has-background-image is-contain circles-and-shapes">
        <div className="container">
          {/* <!-- Title --> */}
          <div className="section-title-wrapper has-text-centered">
            {/* <!-- Divider --> */}
            <div className="special-divider">
              <span></span>
              <span></span>
            </div>
            <h2 className="title is-2">Discover bluprnts</h2>
            <h4 className="subtitle is-4">and its awesome features!</h4>
          </div>

          {/* <!-- Content --> */}
          <div className="content-wrapper">
            <Slider />
          </div>

        </div>
      </div>
      {/* <!-- /App showcase Section --> */}

      {/* <!-- Side Features Section --> */}
      <div className="section is-medium no-line-bottom wavy-bottom">
        <div className="container huge-pb">

          {/* <!-- Feature --> */}
          <div className="columns is-vcentered">
            <div className="column is-7 has-text-centered">
              <img className="featured-svg" src={landingImage1} alt="" />
            </div>

            <div className="column is-5">
              <h3 className="detailed-feature-subtitle">Clear Future</h3>
              <h2 className="title is-3 no-margin">Look in to the future</h2>
              <div className="title-divider"></div>
              <span className="section-feature-description">Forecasting is really quite tricky. We take the difficulty out
                  of that by doing all the calculations for you, to allow you to focus on the thing you know about,
                    your business.</span>
              <div className="pt-10 pb-10">
                <a href="https://app.bluprnts.com" className="button btn-align btn-more is-link color-secondary">
                  Learn more about this <i className="sl sl-icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /Feature --> */}

          {/* <!-- Feature --> */}
          <div className="columns is-vcentered">
            <div className="column is-7 has-text-centered is-hidden-tablet is-hidden-desktop">
              <img className="featured-svg" src={landingImage3} alt="Work together!" />
            </div>


            <div className="column is-5 has-text-right">
              <h3 className="detailed-feature-subtitle">Shared tools</h3>
              <h2 className="title is-3 no-margin">Work Together</h2>
              <div className="title-divider is-right"></div>
              <span className="section-feature-description">Allow multiple users to access one bluprnt. Share it with your
                    team, your accountant, or anyone else!</span>
              <div className="pt-10 pb-10">
                <a href="https://docs.bluprnts.com" className="button btn-align btn-more is-link color-secondary">
                  Learn more about this <i className="sl sl-icon-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="column is-7 has-text-centered is-hidden-mobile">
              <img className="featured-svg" src={landingImage3} alt="Work together!" />
            </div>
          </div>
          {/* <!-- /Feature --> */}

          {/* <!-- Feature --> */}
          <div className="columns is-vcentered">
            <div className="column is-7 has-text-centered">
              <img className="featured-svg" src={landingImage5} alt="Ditch the excel!" />
            </div>

            <div className="column is-5">
              <h3 className="detailed-feature-subtitle">Ditch the excel</h3>
              <h2 className="title is-3 no-margin">Fast and Simple</h2>
              <div className="title-divider"></div>
              <span className="section-feature-description">Very simple to use. With our super quick and simple onboarding
                    process, you can rapidly build a forecast in as little as 15 mins!</span>
              <div className="pt-10 pb-10">
                <a href="https://app.bluprnts.com" className="button btn-align btn-more is-link color-secondary">
                  Learn more about this <i className="sl sl-icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /Feature --> */}

          {/* <!-- CTA --> */}
          <h2 className="has-text-centered">
            <a href="landing-v4-features.html" className="button button-cta is-bold btn-align primary-btn raised">
              See all Features
            </a>
          </h2>
          {/* <!-- /CTA --> */}

        </div>
      </div>
      {/* <!-- /Side Features Section --> */}

      {/* <!-- Testimonials Section --> */}
      <div className="section section-secondary is-medium has-background-image is-contain circles-and-shapes-w" >
        <div className="container">
          {/* <!-- Title --> */}
          <div className="section-title-wrapper has-text-centered">
            {/* <!-- Divider --> */}
            <div className="special-divider is-inverted">
              <span></span>
              <span></span>
            </div>
            <h2 className="title is-2 light-text">We are currently in Beta :)</h2>
            <h4 className="subtitle is-4 light-text">This means the app is coming soon for subscribers. If you would like to
                be included on the beta testing, email us below!</h4>
          </div>
        </div>

      </div>
      {/* <!-- /Testimonials Section --> */}


      {/* <!-- Contact Section --> */}
      <div className="section is-medium section-feature-grey">
        <div className="container">
          {/* <!-- Title --> */}
          <div className="section-title-wrapper has-text-centered">
            {/* <!-- Divider --> */}
            <div className="special-divider">
              <span></span>
              <span></span>
            </div>
            <h2 className="title is-2">Drop us a Line.</h2>
            <h4 className="subtitle is-4">Ask us a question, or just say Hello.</h4>
          </div>
          <div className="columns">
            <div className="column is-6">
              {/* <!-- Contact form --> */}
              <div className="contact-form">
                <form action="https://formspree.io/ali@bluprnts.com" method="POST">
                  <div className="columns is-multiline">
                    <div className="column is-6">
                      <div className="control">
                        <label>First name *</label>
                        <input className="input is-medium" name="firstName" type="text" />
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="control">
                        <label>Last name *</label>
                        <input className="input is-medium" name="lastName" type="text" />
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="control">
                        <label>Email *</label>
                        <input className="input is-medium" name="email" type="email" />
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="control">
                        <label>Company</label>
                        <input className="input is-medium" name="company" type="text" />
                      </div>
                    </div>
                    <div className="column is-12">
                      <div className="control">
                        <label>Message *</label>
                        <textarea className="textarea" name="summary" rows="4"></textarea>
                      </div>
                    </div>
                    {/* <!-- Hidden elements --> */}
                    <input type="hidden" name="_subject" value="New submission!" />

                  </div>
                  <div className="submit-wrapper">
                    <button type="submit" className="button is-bold btn-align secondary-btn raised">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="column is-5 is-offset-1">
              <ContactTabs />
              {/* <!-- Illustration --> */}
              <img src={cityscape} alt="cityscape" />
            </div>
          </div>
        </div>
      </div>
      {/* /Contact Section */}

    </>

  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),

}
const IndexPage = ({ data }) => {
  
  // const { frontmatter } = data.markdownRemark

  console.log(data);

  return (
    <Layout>
      <IndexPageTemplate
      data={data}
      />
    </Layout>
  )
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//     images: PropTypes.object
//   }),
// }

export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//                 markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
//                 frontmatter {
//               title
//         image {
//                 childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//               }
//             }
//             heading
//             subheading
//         mainpitch {
//                 title
//           description
//               }
//               description
//         intro {
//                 blurbs {
//               image {
//                 childImageSharp {
//               fluid(maxWidth: 240, quality: 64) {
//                 ...GatsbyImageSharpFluid
//               }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query HeaderImageQuery {
    shapes: file(relativePath: { eq: "bg/shapes/circles-and-shapes.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    shapesWhite: file(relativePath: { eq: "bg/shapes/circles-and-shapes-w.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
