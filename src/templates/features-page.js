import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import LineChartAnimated from '../components/LineChartAnimated';
import AgGrid from '../components/AgGrid';

class FeaturesPageTemplate extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  }

  render() {

    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content;

    return (
      <>
        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="section no-line-top no-line-bottom">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                  </h2>
                  <div
                    className="ag-theme-balham"
                    style={{ height: "200px", width: "600px" }}
                  >
                    <LineChartAnimated />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                <div className="section no-line-top no-line-bottom">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                  </h2>
                  <div
                    className="ag-theme-balham"
                    style={{ height: "200px", width: "600px" }}
                  >
                    <AgGrid />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature matrix */}
        <section id="feature-matrix" className="section is-medium is-skewed-sm">
            <div className="container has-text-centered is-reverse-skewed-sm">
                <div className="section-title-wrapper has-text-centered">
                    <div className="clean-bg-symbol"><i className="fa fa-gg"></i></div>
                    <div>
                        <h2 className="clean-section-title">Also look at these.</h2>
                        <h3 className="subtitle is-5 pt-10 pb-10">
                            Access integrations and new features in a matter of seconds
                        </h3>
                    </div>
                </div>
        
                <div className="content-wrapper">
                    <div className="columns is-flex-mobile is-vcentered is-multiline has-text-centered">
                        {/* {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box primary">
                                <div className="box-icon is-icon-reveal">
                                    <i className="im im-icon-Credit-Card2"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Secured payments
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="4" >
                                    <i className="im im-icon-Calendar-4"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Scheduled payments
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box secondary">
                                <div className="box-icon is-icon-reveal" data-sr-id="5" >
                                    <i className="im im-icon-Watch"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Product catalog
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="6" >
                                    <i className="im im-icon-Cloud-Lock"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Secured storage
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="7" >
                                    <i className="im im-icon-Speach-Bubble2"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Collaboration
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box secondary">
                                <div className="box-icon is-icon-reveal" data-sr-id="8" >
                                    <i className="im im-icon-Conference"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Client management
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box secondary">
                                <div className="box-icon is-icon-reveal" data-sr-id="9" >
                                    <i className="im im-icon-Testimonal"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Invoice templates
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="10" >
                                    <i className="im im-icon-Synchronize-2"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Recurring payments
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="11" >
                                    <i className="im im-icon-Statistic"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Custom reports
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="12" >
                                    <i className="im im-icon-Email"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Email processing
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box">
                                <div className="box-icon is-icon-reveal" data-sr-id="13" >
                                    <i className="im im-icon-Receipt-2"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Automatic receipts
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                        {/* <!-- Icon box --> */}
                        <div className="column is-3 is-half-mobile">
                            <div className="icon-box primary">
                                <div className="box-icon is-icon-reveal" data-sr-id="14" >
                                    <i className="im im-icon-Money-Bag"></i>
                                </div>
                                <div className="box-title clean-text">
                                    Tax management
                                </div>
                                <div className="box-text is-tablet-padded">
                                    Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea ea.
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Icon box --> */}
                    </div>
                    <div className="is-title-reveal pt-40 pb-40" data-sr-id="1" >
                        <a href="landing-v1-signup.html" className="button button-cta btn-align primary-btn raised">Start your Free trial</a>
                    </div>
                </div>
            </div>
        </section>


      </>
    );
  }
}

FeaturesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const FeaturesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FeaturesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

FeaturesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FeaturesPage;

export const featuresPageQuery = graphql`
  query FeaturesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
