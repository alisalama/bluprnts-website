import React from 'react'

const ContactTabs = class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'contact-email' };
    }

    selectTab = (event) => {
        // use the text as the state
        const text = event.currentTarget.getAttribute('data-contact');
        this.setState({ selectedTab: text });
    }

    render() {
        return (
            <>
                {/* <!-- Contact info tabs --> */}
              <div className="contact-toggler">
                <ul className="tabbed-links">
                  <li className={`${this.state.selectedTab === 'contact-email' ? 'is-active' : ''}`} onClick={this.selectTab} data-contact="contact-email">Email</li>
                  <li className={`${this.state.selectedTab === 'contact-location' ? 'is-active' : ''}`} onClick={this.selectTab} data-contact="contact-location">Location</li>
                  <li className={`${this.state.selectedTab === 'contact-phone' ? 'is-active' : ''}`} onClick={this.selectTab} data-contact="contact-phone">Phone</li>
                </ul>
                <div className="contact-blocks">
                  {/* <!-- Tab content --> */}
                  <div id="contact-email" className={`contact-block animated preFadeInUp fadeInUp showcase-wrap ${this.state.selectedTab === 'contact-email' ? '' : 'is-hidden'}`}>
                    <div className="contact-icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                      <span>Contact us by email</span>
                      <span>hello@bluprnts.com</span>
                    </div>
                  </div>
                  {/* <!-- Tab content --> */}
                  <div id="contact-location" className={`contact-block animated preFadeInUp fadeInUp showcase-wrap ${this.state.selectedTab === 'contact-location' ? '' : 'is-hidden'}`}>
                    <div className="contact-icon">
                      <i className="fa fa-map"></i>
                    </div>
                    <div className="contact-info">
                      <span>Visit us @ our Office</span>
                      <span>in London</span>
                    </div>
                  </div>
                  {/* <!-- Tab content --> */}
                  <div id="contact-phone" className={`contact-block animated preFadeInUp fadeInUp showcase-wrap ${this.state.selectedTab === 'contact-phone' ? '' : 'is-hidden'}`}>
                    <div className="contact-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-info">
                      <span>Call our Support team</span>
                      <span>+44 7807 717354</span>
                    </div>
                  </div>
                </div>
              </div>

            </>
        )
    }
}

export default ContactTabs



