import React from 'react';
import Layout from '../../components/Layout';
import cityscape from '../../../static/img/illustrations/drawings/line-city.svg';
import ContactTabs from '../../components/ContactTabs';
import ContactForm from '../../components/ContactForm';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        {/* <!-- Contact Section --> */}
        <div className="section is-medium section-feature-grey no-line-top no-line-bottom">
          <div className="container">
            {/* <!-- Title --> */}
            <div className="section-title-wrapper has-text-centered">
              {/* <!-- Divider --> */}
              <div className="special-divider">
                <span></span>
                <span></span>
              </div>
              <h2 className="title is-2">Drop us a Line.</h2>
              <h4 className="subtitle is-4">Ask us a question, or just say Hello.</h4>
            </div>
            <div className="columns">
              <div className="column is-6">
                <ContactForm />
              </div>
              <div className="column is-5 is-offset-1">
                <ContactTabs />
                <img src={cityscape} alt="cityscape" />
              </div>
            </div>
          </div>
        </div>
        {/* /Contact Section */}

        {/* <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
      </Layout>
    )
  }
}
