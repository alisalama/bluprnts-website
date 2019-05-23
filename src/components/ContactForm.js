import React from 'react'
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <>
        {/* <!-- Contact form --> */}
        <div className="contact-form">
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <div className="columns is-multiline">
              <div className="column is-6">
                <div className="control">
                  <label>First name *</label>
                  <input className="input is-medium" name="firstName" type="text" id={'name'} required={true} onChange={this.handleChange} />
                </div>
              </div>
              <div className="column is-6">
                <div className="control">
                  <label>Last name *</label>
                  <input className="input is-medium" name="lastName" type="text" id={'lastName'} required={true} onChange={this.handleChange} />
                </div>
              </div>
              <div className="column is-6">
                <div className="control">
                  <label>Email *</label>
                  <input className="input is-medium" name="email" type="email" id={'email'} required={true} onChange={this.handleChange} />
                </div>
              </div>
              <div className="column is-6">
                <div className="control">
                  <label>Company</label>
                  <input className="input is-medium" name="company" type="text" id={'company'} required={true} onChange={this.handleChange} />
                </div>
              </div>
              <div className="column is-12">
                <div className="control">
                  <label for='message'>Message *</label>
                  <textarea className="textarea" name="message" rows="4" id={'message'} required={true} onChange={this.handleChange}></textarea>
                </div>
              </div>
            </div>
            <div className="submit-wrapper">
              <button type="submit" className="button is-bold btn-align secondary-btn raised">Send Message</button>
            </div>
          </form>
        </div>
      </>
    )
  }

}

export default ContactForm
