import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const PricingPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (

    <>
      <Pricing pricing={pricing} />

      <section className="section is-medium section-feature-grey">
        <div className="container">

          <h2 className="title section-subtitle dark-text text-bold has-text-centered is-2 pt-20 pb-20">
            You have some questions?
          </h2>

          <div className="content-wrapper">
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <div className="content">
                  <p className="text-bold dark-text">1. How do i get started?</p>
                  <p>Lorem ipsum dolor sit amet, accusata voluptatibus per eu, probo summo argumentum ea vel. Pri nonumy sententiae ex, eam adhuc regione tibique te. Et sit alii vero harum, ne his viderer consectetuer.</p>
                </div>
                <div className="content">
                  <p className="text-bold dark-text">3. Where can i get training?</p>
                  <p>Lorem ipsum dolor sit amet, accusata voluptatibus per eu, probo summo argumentum ea vel. Pri nonumy sententiae ex, eam adhuc regione tibique te. Et sit alii vero harum, ne his viderer consectetuer.</p>
                </div>
                <div className="content">
                  <p className="text-bold dark-text">5. Are updates mandatory?</p>
                  <p>Lorem ipsum dolor sit amet, accusata voluptatibus per eu, probo summo argumentum ea vel. Pri nonumy sententiae ex, eam adhuc regione tibique te. Et sit alii vero harum, ne his viderer consectetuer.</p>
                </div>
              </div>
              <div className="column is-4">
                <div className="content">
                  <p className="text-bold dark-text">2. How can i add people to my team?</p>
                  <p>Lorem ipsum dolor sit amet, accusata voluptatibus per eu, probo summo argumentum ea vel. Pri nonumy sententiae ex, eam adhuc regione tibique te. Et sit alii vero harum, ne his viderer consectetuer.</p>
                </div>
                <div className="content pb-40">
                  <p className="text-bold dark-text">4. Do you have a refund policy?</p>
                  <p>Lorem ipsum dolor sit amet, accusata voluptatibus per eu, probo summo argumentum ea vel. Pri nonumy sententiae ex, eam adhuc regione tibique te. Et sit alii vero harum, ne his viderer consectetuer.</p>
                </div>
              </div>
            </div>

            {/* <div className="columns">
              <div className="column is-8 is-offset-2 mt-10">
                <Testimonials testimonials={testimonials} />
              </div>

            </div> */}

          </div>

        </div>

      </section>

      {/* 
      <section className="section section-secondary no-padding-bottom">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4 is-offset-1">
              <div className="minimal-feature">
                <h2 className="title is-5 minimal-title bold-text light-text no-margin">Start managing now</h2>
                <div className="feature-content light-text">
                  Leave unecessary pressure behind, everything is made simple so you can focus on your work. Try our Free plan and discover all our features.
                            </div>
                <div className="pt-20 pb-20">
                  <a href="landing-v3-signup.html" className="button button-cta btn-outlined is-bold light-btn rounded">Get started for free</a>
                  <span className="conditions">Right now.</span>
                </div>
              </div>
            </div>
            <div className="column is-5 is-offset-2">
              <div className="city-container">
                <img src="assets/images/illustrations/drawings/city.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              
           
          </div>
        </div>
      </div>
    </section> */}

      {/* </div> */}

    </>
  )

PricingPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const PricingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PricingPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            monthly_price
            yearly_price
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
