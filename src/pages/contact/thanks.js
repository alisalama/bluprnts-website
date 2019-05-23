import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <section className="section no-line-top no-line-bottom">
      <div className="container">
        <div className="content has-text-centered">

          <div className="check-mark-animate">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle className="path circle" fill="none" stroke="#b8dff2" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
              <polyline className="path check" fill="none" stroke="#6EBDFF" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
            </svg>
          </div>

          <style>

          </style>

          <h1>Thank you for contacting us!</h1>
          <h5>We'll be in contact soon.</h5>


          <Link to="/" className="button secondary-btn mt-20">
            Back to home
          </Link>



        </div>
      </div>
    </section>
  </Layout>
)
