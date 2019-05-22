import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import BackgroundImage from 'gatsby-background-image'

export default class BlogIndexPage extends React.Component {

  render() {
    
    const { data } = this.props;

    return (
      <Layout>
        {/* <!-- Hero image --> */}
        <div id="main-hero" className="hero-body is-theme-secondary">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-6 is-offset-3 has-text-centered ">
              
                <h1 className="title is-1 is-medium is-spaced is-header-caption">
                  Blog
                </h1>
              </div>
            </div>
          </div>
        </div>
          <section className="section is-medium blog-section no-line-bottom has-background-image is-contain is-top circles-and-shapes"> 
            <div className="container">
              <BlogRoll />
            </div>
          </section>
        {/* </BackgroundImage> */}
      </Layout>
    )
  }
}


// export const pageQuery = graphql`
//   query BlogImageQuery {
//     shapes: file(relativePath: { eq: "bg/shapes/circles-and-shapes.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     },
//     shapesWhite: file(relativePath: { eq: "bg/shapes/circles-and-shapes-w.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `