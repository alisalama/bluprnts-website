import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image"

const Slider = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentText: 'feature-1' };
    }

    selectSlide = (event) => {
        // use the text as the state
        const text = event.currentTarget.getAttribute('data-feature');
        this.setState({ currentText: text });
    }

    render() {

        const { data } = this.props;
        return (
            <>
                <div className="columns is-vcentered">
                    {/* <!-- App mockups --> */}
                    <div className="column is-7">
                        <div className="showcase-wrapper">
                            <div id="mockup-1" className={`showcase-wrap ${this.state.currentText === 'feature-1' ? 'is-active' : ''}`} >
                                <div className="app-showcase">
                                    <Img fluid={data.bluprnts.childImageSharp.fluid} fadeIn={false} alt="Dashboard" style={{position: "inherit"}}/>
                                </div>
                            </div>
                            <div id="mockup-2" className={`showcase-wrap ${this.state.currentText === 'feature-2' ? 'is-active' : ''}`} >
                                <div className="app-showcase">
                                    <Img fluid={data.financials.childImageSharp.fluid} fadeIn={false} alt="Financials" style={{position: "inherit"}}/>
                                </div>
                            </div>
                            <div id="mockup-3" className={`showcase-wrap ${this.state.currentText === 'feature-3' ? 'is-active' : ''}`} >
                                <div className="app-showcase">
                                    <Img fluid={data.sales.childImageSharp.fluid} fadeIn={false} alt="Sales Dashboard" style={{position: "inherit"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Mockups content --> */}
                    <div className="column is-5">
                        {/* <!-- Feature --> */}
                        <div id="feature-1" className={`showcase-text-wrapper animated preFadeInUp fadeInUp ${this.state.currentText === 'feature-1' ? '' : 'is-hidden'}`} >
                            <h3 className="title is-3">Forecasting</h3>
                            <p>Forecasting is really tricky. We take the difficulty out of it by using simple building
                            blocks to build our bluprnts.</p>
                            <a href="https://app.bluprnts.com" className="button button-cta is-bold btn-align secondary-btn raised mt-20 mb-20">
                                Learn more
                        </a>
                        </div>
                        {/* <!-- Feature --> */}
                        <div id="feature-2" className={`showcase-text-wrapper animated preFadeInUp fadeInUp ${this.state.currentText === 'feature-2' ? '' : 'is-hidden'}`} >
                            <h3 className="title is-3">Accounting</h3>
                            <p>Full financial statements at a granular level are created for you to give you and indication
                                of tbhe position you
                            will be in at each month and year.</p>
                            <a href="https://app.bluprnts.com" className="button button-cta is-bold btn-align secondary-btn raised mt-20 mb-20">
                                Learn more
                        </a>
                        </div>
                        {/* <!-- Feature --> */}
                        <div id="feature-3" className={`showcase-text-wrapper animated preFadeInUp fadeInUp ${this.state.currentText === 'feature-3' ? '' : 'is-hidden'}`} >
                            <h3 className="title is-3">Document Management</h3>
                            <p>Document managment is really awesome because lorem ipsum sit dolor amet et cupidis et sil
                            cout marat. Lorem ipsum sit dolor amet et cupidis et sil cout marat.</p>
                            <a href="landing-v4-login.html"
                                className="button button-cta is-bold btn-align primary-btn raised mt-20 mb-20">
                                Free Trial
                        </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Controls --> */}
                <div className="slide-control">
                    <div onClick={this.selectSlide} className={`slide-dot ${this.state.currentText === 'feature-1' ? 'is-active' : ''}`} data-feature="feature-1">
                        <button className="button primary-btn">Forecasting</button>
                    </div>
                    <div onClick={this.selectSlide} className={`slide-dot ${this.state.currentText === 'feature-2' ? 'is-active' : ''}`} data-feature="feature-2">
                        <button className="button primary-btn">Accounting</button>
                    </div>
                    <div onClick={this.selectSlide} className={`slide-dot ${this.state.currentText === 'feature-3' ? 'is-active' : ''}`} data-feature="feature-3">
                        <button className="button primary-btn">Docs</button>
                    </div>
                </div>

            </>
        )
    }
}

// export default Slider

export default props => (
    <StaticQuery
        query={pageQuery}
        render={data => <Slider data={data} {...props} />}
    />
)


export const pageQuery = graphql`
  query SliderImageQuery {
    bluprnts: file(relativePath: { eq: "screengrabs/bluprnts.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    financials: file(relativePath: { eq: "screengrabs/financials.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    sales: file(relativePath: { eq: "screengrabs/sales.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
  }
`