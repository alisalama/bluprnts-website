import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const FeaturesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
    <section>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section no-line-top no-line-bottom">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

FeaturesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FeaturesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FeaturesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

FeaturesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FeaturesPage

export const featuresPageQuery = graphql`
  query FeaturesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
