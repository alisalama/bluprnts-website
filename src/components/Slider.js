import React from 'react'

import bluprntsScreenshot from '../../static/img/screengrabs/bluprnts.png';
import financialsScreenshot from '../../static/img/screengrabs/financials.png';
import salesDashboardScreenshot from '../../static/img/screengrabs/sales.png';

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
        return (
            <>
                <div className="columns is-vcentered">
                    {/* <!-- App mockups --> */}
                    <div className="column is-7">
                        <div className="showcase-wrapper">
                            <div id="mockup-1" className={`showcase-wrap ${this.state.currentText === 'feature-1' ? 'is-active' : ''}`} >
                                <img className="app-showcase" src={bluprntsScreenshot} alt="" />
                            </div>
                            <div id="mockup-2" className={`showcase-wrap ${this.state.currentText === 'feature-2' ? 'is-active' : ''}`} >
                                <img className="app-showcase" src={financialsScreenshot} alt="" />
                            </div>
                            <div id="mockup-3" className={`showcase-wrap ${this.state.currentText === 'feature-3' ? 'is-active' : ''}`} >
                                <img className="app-showcase" src={salesDashboardScreenshot} alt="" />
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
                            <a href="#" className="button button-cta is-bold btn-align secondary-btn raised mt-20 mb-20">
                                Learn more
                        </a>
                        </div>
                        {/* <!-- Feature --> */}
                        <div id="feature-2" className={`showcase-text-wrapper animated preFadeInUp fadeInUp ${this.state.currentText === 'feature-2' ? '' : 'is-hidden'}`} >
                            <h3 className="title is-3">Accounting</h3>
                            <p>Full financial statements at a granular level are created for you to give you and indication
                                of tbhe position you
                            will be in at each month and year.</p>
                            <a href="#" className="button button-cta is-bold btn-align secondary-btn raised mt-20 mb-20">
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
                        <a className="button primary-btn">Forecasting</a>
                    </div>
                    <div onClick={this.selectSlide} className={`slide-dot ${this.state.currentText === 'feature-2' ? 'is-active' : ''}`} data-feature="feature-2">
                        <a className="button primary-btn">Accounting</a>
                    </div>
                    <div onClick={this.selectSlide} className={`slide-dot ${this.state.currentText === 'feature-3' ? 'is-active' : ''}`} data-feature="feature-3">
                        <a className="button primary-btn">Docs</a>
                    </div>
                </div>

            </>
        )
    }
}

export default Slider



