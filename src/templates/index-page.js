import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import GatsbyImage from 'gatsby-image';

// 
import heroImage from '../images/illustrations/drawings/landing5-2.svg';
import logo from '../images/bluprnts/bluprnts - white.svg';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <React.Fragment>

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
                  <a target="_blank" href="https://app.bluprnts.com"
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
                <li><a><img className="partner-logo" src="assets/images/logos/custom/covenant.svg" alt=""></a></li>
                  <li><a><img className="partner-logo" src="assets/images/logos/custom/infinite.svg" alt=""></a></li>
                    <li><a><img className="partner-logo" src="assets/images/logos/custom/phasekit.svg" alt=""></a></li>
                      <li><a><img className="partner-logo" src="assets/images/logos/custom/grubspot.svg" alt=""></a></li>
                        <li><a><img className="partner-logo" src="assets/images/logos/custom/gutwork.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div> --> */}

      </div>

      <section className="section is-medium">
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
                      <img src="assets/images/illustrations/company.svg" alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        Products
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src="assets/images/illustrations/wallet.svg" alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        People
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src="assets/images/illustrations/factory.svg" alt="" />
                      <div className="icon-card-text is-clean mt-10">
                        Costs
                                </div>
                    </div>
                  </div>
                  {/* <!-- Icon box --> */}
                  <div className="column is-6">
                    <div className="flex-card icon-card light-bordered hover-inset padding-20">
                      <img src="assets/images/illustrations/bank.svg" alt="" />
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


      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                    </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>

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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
                markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
                frontmatter {
              title
        image {
                childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
              }
            }
            heading
            subheading
        mainpitch {
                title
          description
              }
              description
        intro {
                blurbs {
              image {
                childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
