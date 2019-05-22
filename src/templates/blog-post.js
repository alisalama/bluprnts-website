import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase, startCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  subtitle,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (

    <>
    
      {helmet || ''}

      <section className="section blog-section section-light-grey no-line-bottom no-line-top">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">

              <div className="flex-card is-full-post light-bordered">
                {/* <!-- Post meta --> */}
                <div className="post-meta content">
                  {/* <!-- Author avatar --> */}
                  <img className="author-avatar is-hidden-mobile" src="https://via.placeholder.com/250x250" alt=""
                    data-demo-src="assets/images/agency/avatars/carolin.png" />
                  {/* <!-- title --> */}
                  <div className="title-block">
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    {/* <!-- Like button --> */}
                    <button className="like is-full fab-btn mini" data-toggle="tooltip" data-placement="left" data-title="Liked by 64 persons">
                      <span className="like-wrapper">
                        <i className="material-icons unliked">favorite_border</i>
                        <i className="material-icons liked">favorite</i>
                        <span className="like-overlay"></span>
                      </span>
                    </button>
                  </div>
                </div>
                {/* <!-- Post body --> */}
                <div className="post-body content">
                  {/* <!-- More meta --> */}
                  <div className="author-name pb-5">by <b>Alan Maynard</b>
                    { tags && <small> Posted in 
                    { tags.map((tag, index) => (
                      <Link key={index} to={`/tags/${kebabCase(tag)}`}>
                        {' ' + startCase(tag)}{ index + 1 < tags.length ? ',' : ' '}
                      </Link>
                    )) }</small> }
                    
                    </div>
                    <div className="timestamp"><i className="sl sl-icon-clock"></i> {date}</div>

                  {/* <div className="author-name pb-10">by <b><a href="#">Marjory Cambell</a></b>, <span>Ecommerce consultant</span></div>
                  <div className="timestamp"><i className="sl sl-icon-clock"></i> oct 16 2018, 4:12pm</div> */}

                  {/* <!-- Post content --> */}
                  <PostContent content={content} />

                  {/* <!-- Share post --> */}
                  <div className="share-post">
                    <div className="share-text">
                      Share:
                                    </div>
                    {/* <!-- Sharing icons --> */}
                    <div className="sharing-options">
                      <i className="fa fa-envelope"></i>
                      <i className="fa fa-facebook"></i>
                      <i className="fa fa-twitter"></i>
                      <i className="fa fa-linkedin"></i>
                      <i className="fa fa-google-plus"></i>
                      <i className="fa fa-reddit"></i>
                      <i className="fa fa-tumblr"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Post --> */}
            </div>
          </div>

        </div>

      </section>

    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        description
        tags
      }
    }
  }
`
