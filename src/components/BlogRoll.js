import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { kebabCase, startCase } from 'lodash'


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (

      <>
        <div className="columns">
          <div className="column is-8 is-offset-2">

            { posts && posts.map(({ node: post }, index) => (

                <div key={post.id} className={`flex-card is-post light-bordered ${index === 0 ? 'is-pulled-top' : ''}`}>
                  {/* <!-- Post header --> */}
                  { post.frontmatter.featuredimage && <BackgroundImage
                    Tag="div"
                    className="header has-background-image"
                    fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                    style={{
                      overflow: 'visible'
                    }}
                  >
                    <div className="title-wrapper">
                      <h2 className="post-title is-bold">{post.frontmatter.title}</h2>
                      <h4 className="post-subtitle">{post.frontmatter.subtitle}</h4>
                    </div>

                    <div className="author-avatar">
                      <img src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/images/agency/avatars/alan.jpg" />
                    </div>
                    <button className="like fab-btn mini">
                      <span className="like-wrapper">
                        <i className="material-icons unliked">favorite_border</i>
                        <i className="material-icons liked">favorite</i>
                        <span className="like-overlay"></span>
                      </span>
                    </button>
                    {/* <!-- Header overlay --> */}
                    <div className="header-overlay"></div>
                  </BackgroundImage>}

                  {/* <!-- Post body --> */}
                  <div className="post-body">
                    <div> <span>by</span><b> Alan Maynard</b></div>
                    { post.frontmatter.tags && <small>Posted in 
                    {post.frontmatter.tags.map((tag, index) => (
                      <Link key={index} to={`/tags/${kebabCase(tag)}`}>
                        {' ' + startCase(tag)}{ index + 1 < post.frontmatter.tags.length ? ',' : ' '}
                      </Link>
                    ))}
                    </small>}
                    <small> on {post.frontmatter.date}</small>
                    <p>{post.excerpt}</p>
                    <div className="content-footer">
                      <div className="footer-details">
                        <Link className="button is-link btn-upper" to={post.fields.slug}>
                          Read more
                        </Link>
                        <div className="likes-count ml-auto">
                          <i className="im im-icon-Heart-2"></i>
                          <span className="stat">32</span>
                        </div>
                        <div className="comments-count">
                          <i className="im im-icon-Speach-Bubble11"></i>
                          <span className="stat">8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
          </div>
        </div>
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
