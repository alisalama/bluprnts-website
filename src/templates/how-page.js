import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class HowPageTemplate extends React.Component {
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
        <section id="services" className="section is-medium no-lines">
          <div className="container">
            {/* <!-- Title --> */}
            <div className="section-title-wrapper has-text-centered">
              <div className="bg-number">?</div>
              <h2 className="title">How does it work?</h2>
              <h4 className="subtitle">
                Discover a seamless experience in building your business plan!
              </h4>
            </div>
            {/* <!-- /Title --> */}

            <div className="content-wrapper">
              <div className="columns is-vcentered is-multiline has-text-centered">
                <div className="column is-12">
                  <p>
                    There are just four main elements to building a bluprnt, and
                    this is all we need to really get going.
                  </p>
                </div>
              </div>
              <div className="columns is-vcentered is-multiline has-text-centered">
                {/* <!-- Icon block --> */}
                <div className="column is-3">
                  <div className="how-icon-box">
                    <div>
                      <i className="im im-icon-Ticket" />
                    </div>
                    <div className="box-title">Products</div>
                    <p className="box-content is-tablet-padded">
                      The products and services that your company sells to it's
                      customers now or in the future.
                    </p>
                  </div>
                </div>
                {/* <!-- Icon block --> */}
                <div className="column is-3">
                  <div className="how-icon-box">
                    <div>
                      <i className="im im-icon-Speach-Bubble11" />
                    </div>
                    <div className="box-title">People</div>
                    <p className="box-content is-tablet-padded">
                      Those wonderful people that are your employees that make
                      your company run so smoothly.
                    </p>
                  </div>
                </div>
                {/* <!-- Icon block --> */}
                <div className="column is-3">
                  <div className="how-icon-box">
                    <div>
                      <i className="im im-icon-Mail-Settings" />
                    </div>
                    <div className="box-title">Costs</div>
                    <p className="box-content is-tablet-padded">
                      All the investments and costs that you plan to spend in
                      the future to help your business flourish.
                    </p>
                  </div>
                </div>
                {/* <!-- Icon block --> */}
                <div className="column is-3">
                  <div className="how-icon-box">
                    <div>
                      <i className="im im-icon-Upload-toCloud" />
                    </div>
                    <div className="box-title">Financing</div>
                    <p className="box-content is-tablet-padded">
                      All the loans, credit or mortgages that your business has
                      borrowed or will borrow in the future.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="has-text-centered is-title-reveal pt-40 pb-40">
                <a
                  href="#"
                  className="button button-cta primary-btn rounded raised"
                >
                  Learn more
                </a>
              </div> */}
            </div>
          </div>
        </section>
        {/* <!-- /Section --> */}

        {/* <!-- Section --> */}
        <section className="section is-medium no-lines">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-6 has-text-centered">
                <img
                  className="featured-svg levitate"
                  src="assets/images/illustrations/drawings/communicate.svg"
                  alt=""
                />
              </div>

              <div className="column is-4 is-offset-1">
                <div className="icon-subtitle">
                  <i className="im im-icon-Speach-Bubble2" />
                </div>
                <h2 className="title quick-feature is-handwritten">
                  Products
                  <span className="bg-number text-bold">1</span>
                </h2>
                <div className="title-divider is-small" />
                <span className="section-feature-description">
                  Enter the products you currently have or plan to release in
                  the future.
                  <br />
                  This includes simple product details like name, expected
                  price, production costs and storage costs. Things you will
                  know!
                </span>
                <div className="pt-10 pb-10">
                  <a
                    href="https://docs.bluprnts.com/products"
                    className="button btn-align btn-more is-link color-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about this
                    <i className="sl sl-icon-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Section --> */}

        {/* <!-- Section --> */}
        <section className="section section-feature-grey no-lines is-medium is-relative is-skewed-sm">
          {/* <!-- Floating chat bubbles --> */}
          <div className="floating-bubbles">
            <div className="bubble">
              <img
                className="bubble-1st levitate"
                src="assets/images/illustrations/drawings/bub-purple.svg"
                alt=""
              />
            </div>
            <div className="bubble">
              <img
                className="bubble-2nd levitate"
                src="assets/images/illustrations/drawings/bub-blue.svg"
                alt=""
              />
            </div>
            <div className="bubble">
              <img
                className="bubble-3rd levitate"
                src="assets/images/illustrations/drawings/bub-blue.svg"
                alt=""
              />
            </div>
            <div className="bubble">
              <img
                className="bubble-4th levitate"
                src="assets/images/illustrations/drawings/bub-blue.svg"
                alt=""
              />
            </div>
          </div>
          {/* <!-- /Floating chat bubbles --> */}

          <div className="container is-reverse-skewed-sm">
            {/*  {/* <!-- Feature --> */}
            <div className="columns is-vcentered">
              {/* <!-- Content --> */}
              <div className="column is-4 is-offset-2">
                <div className="icon-subtitle">
                  <i className="im im-icon-Share-Window" />
                </div>
                <h2 className="title quick-feature is-handwritten">
                  People
                  <span className="bg-number text-bold">2</span>
                </h2>
                <div className="title-divider is-small" />
                <span className="section-feature-description">
                  Enter the staff you employ or recover to employ in the future.
                  <br />
                  Just simple things like job title, salary and start date.
                </span>
                <div className="pt-10 pb-10">
                  <a
                    href="https://docs.bluprnts.com/people"
                    className="button btn-align btn-more is-link color-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about this
                    <i className="sl sl-icon-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="column is-6 has-text-centered">
                {/* {/* <!-- Featured illustration --> */}
                <img
                  className="featured-svg levitate"
                  src="assets/images/illustrations/drawings/learn.svg"
                  alt=""
                />
                {/* {/* <!-- /Featured illustration --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Feature --> */}

        {/* <!-- Feature --> */}
        <section className="section is-medium no-lines">
          <div className="container">
            {/* <!-- Feature --> */}
            <div className="columns is-vcentered">
              <div className="column is-6 has-text-centered">
                {/* <!-- Featured illustration --> */}
                <img
                  className="featured-svg levitate"
                  src="assets/images/illustrations/drawings/support-team.svg"
                  alt=""
                />
                {/* <!-- /Featured illustration --> */}
              </div>
              {/* <!-- Content --> */}
              <div className="column is-4 is-offset-1">
                <div className="icon-subtitle">
                  <i className="im im-icon-Life-Safer" />
                </div>
                <h2 className="title quick-feature is-handwritten">
                  Costs
                  <span className="bg-number text-bold">3</span>
                </h2>
                <div className="title-divider is-small" />
                <span className="section-feature-description">
                  Enter any purchases or investments you plan to make in the
                  future.
                  <br />
                  These can be anything from new offices to marketing to
                  purchasing a vehicle.
                </span>
                <div className="pt-10 pb-10">
                  <a
                    href="https://docs.bluprnts.com/costs"
                    className="button btn-align btn-more is-link color-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about this
                    <i className="sl sl-icon-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Feature --> */}

        {/* <!-- Feature --> */}
        <section
          id="features"
          className="section section-feature-grey no-lines is-relative is-medium is-skewed-sm"
        >
          {/* <!-- Floating chat bubbles --> */}
          <div className="floating-bubbles">
            <div className="bubble">
              <img
                className="bubble-5th levitate"
                src="assets/images/illustrations/drawings/bub-blue.svg"
                alt=""
              />
              <img
                className="bubble-6th levitate"
                src="assets/images/illustrations/drawings/bub-purple.svg"
                alt=""
              />
              <img
                className="bubble-7th levitate"
                src="assets/images/illustrations/drawings/bub-purple.svg"
                alt=""
              />
              <img
                className="bubble-8th levitate"
                src="assets/images/illustrations/drawings/bub-purple.svg"
                alt=""
              />
              <img
                className="bubble-9th levitate"
                src="assets/images/illustrations/drawings/bub-blue.svg"
                alt=""
              />
            </div>
          </div>
          {/* <!-- /Floating chat bubbles --> */}

          <div className="container is-reverse-skewed-sm">
            <div className="columns is-vcentered">
              {/* <!-- Content --> */}
              <div className="column is-4 is-offset-2">
                <div className="icon-subtitle">
                  <i className="im im-icon-Smartphone-4" />
                </div>
                <h2 className="title quick-feature is-handwritten">
                  Financing
                  <span className="bg-number text-bold">4</span>
                </h2>
                <div className="title-divider is-small" />
                <span className="section-feature-description">
                  Enter any loans you have or plan to have in the future.
                  <br />
                  Again simple things like loan amount, start date, end date and
                  interest rate.
                </span>
                <div className="pt-10 pb-10">
                  <a
                    href="https://docs.bluprnts.com/financing"
                    className="button btn-align btn-more is-link color-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about this
                    <i className="sl sl-icon-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="column is-6 has-text-centered">
                {/* {/* <!-- Featured illustration --> */}
                <img
                  className="featured-svg levitate"
                  src="assets/images/illustrations/drawings/mobile-chat.svg"
                  alt=""
                />
                {/* <!-- /Featured illustration --> */}
              </div>
            </div>
          </div>
        </section>
        {/*  <!-- /Feature --> */}

        {/* <!-- Learn more --> */}
        <section className="section no-lines is-relative">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-6 is-offset-3 has-text-centered">
                {/* <!-- Title --> */}
                <div className="section-title-wrapper has-text-centered">
                  <div className="bg-number">&</div>
                  <h2 className="title">There's plenty more</h2>
                  <h4 className="subtitle">Discover more features</h4>
                </div>
                {/* <!-- /Title --> */}
              </div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-vcentered">


                {/* <div className="column is-3">
                  <div className="how-icon-box">
                    <div>
                      <i className="im im-icon-Ticket" />
                    </div>
                    <div className="box-title">Products</div>
                    <p className="box-content is-tablet-padded">
                      The products and services that your company sells to it's
                      customers now or in the future.
                    </p>
                  </div>
                </div> */}

                <div className="column is-4">
                  {/* <!-- Side icon box --> */}
                  <div className="how-icon-box content content-flex">
                    <i className="im im-icon-Speach-Bubble2 color-secondary" />

                    <div className="dark-text has-text-left ml-30">
                      <h5 className="is-landing primary-text text-bold pt-5 pb-5">
                        Onboarding
                      </h5>
                      Our super onboarding walkthrough will have you up and
                      running in no time. We think you can get through this in
                      as little as 10 mins, and have your first business model
                      up and running!
                    </div>
                  </div>
                  {/* <!-- /Side icon box --> */}
                </div>
                <div className="column is-4">
                  {/* <!-- Side icon box --> */}
                  <div className="content content-flex how-icon-box">
                    <i className="im im-icon-Microphone-4 color-secondary" />
                    <div className="dark-text has-text-left ml-30">
                      <h5 className="is-landing primary-text text-bold pt-5 pb-5">
                        Fully customisable
                      </h5>
                      We've only just scratched the surface of what can be done
                      with bluprnts. Our framework is built to be highly
                      configurable. This means that you can change pretty much
                      anything that you might want to.
                    </div>
                  </div>
                  {/* <!-- /Side icon box --> */}
                </div>
                <div className="column is-4">
                  {/* <!-- Side icon box --> */}
                  <div className="content content-flex how-icon-box">
                    <i className="im im-icon-Mail color-secondary" />
                    <div className="dark-text has-text-left ml-30">
                      <h5 className="is-landing primary-text text-bold pt-5 pb-5">
                        Scenarios
                      </h5>
                      It comes with 5 free built in scenarios, but you can
                      easily create your own and see what happens if you happen
                      to, for example, sell 10% extra products for 20% less
                      production cost.
                    </div>
                  </div>
                  {/* <!-- /Side icon box --> */}
                </div>
              </div>
              <div className="has-text-centered is-title-reveal pt-40 pb-40">
                <a
                  href="#product"
                  className="button button-cta btn-align raised rounded secondary-btn"
                >
                  Start your Free trial
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Learn more --> */}
      </>
    );
  }
}

HowPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const HowPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HowPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

HowPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HowPage;

export const howPageQuery = graphql`
  query HowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

// <!-- /UI Feature --> */}
// <section className="section section-feature-grey is-medium no-lines">
//           <div className="container">
//             <div className="columns is-vcentered">
//               <div className="column is-5 is-offset-1">
//                 {/* <!-- Video block --> */}
//                 <div className="side-block is-title-reveal">
//                   <div className="background-wrapper">
//                     <div
//                       id="video-embed"
//                       className="video-wrapper"
//                       data-url="https://www.youtube.com/watch?v=iaj8ktgL3BY"
//                     >
//                       <div className="video-overlay" />
//                       <div className="playbutton">
//                         <div className="icon-play">
//                           <i className="im im-icon-Play-Music" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- /Video block --> */}
//               </div>

//               <div className="column is-4 is-offset-1">
//                 {/* <!-- Title --> */}
//                 <div className="title-wrapper">
//                   <h6 className="top-subtitle">Watch the video and</h6>
//                   <h2 className="title is-landing quick-feature">
//                     Get started fast
//                   </h2>
//                   <div className="title-divider is-small" />
//                 </div>
//                 {/* <!-- /Title --> */}

//                 <span className="section-feature-description">
//                   Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum
//                   inermis iudicabit. Ex vidit fierent hendrerit eum, sed stet
//                   periculis ut. Vis in probo decore labitur. Unum simul an vis,
//                   tale patrioque eos ad, dicunt percipit ea nam.
//                 </span>
//                 <div className="pt-10 pb-10">
//                   <a
//                     href="#"
//                     className="button btn-align btn-more is-link color-primary"
//                   >
//                     Learn more <i className="sl sl-icon-arrow-right" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* <!-- /UI Feature -->

// //  {/* <!-- UI Feature --> */}
// //         <section className="section is-medium  no-lines section-feature-grey">
// //           <div className="container">
// //             <div className="columns is-vcentered">
// //               {/* <!-- Animated svg --> */}
// //               <div className="column is-6">
// //                 <div id="chat-widget-ui" className="vivus-svg" />
// //               </div>
// //               {/* <!-- /Animated svg --> */}

// //               <div className="column is-4 is-offset-1">
// //                 {/* <!-- Title --> */}
// //                 <div className="title-wrapper">
// //                   <h6 className="top-subtitle">You just need one click </h6>
// //                   <h2 className="title is-landing quick-feature">
// //                     Beautiful chat widget
// //                   </h2>
// //                   <div className="title-divider is-small" />
// //                 </div>
// //                 {/* <!-- /Title --> */}

// //                 <span className="section-feature-description">
// //                   Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum
// //                   inermis iudicabit. Ex vidit fierent hendrerit eum, sed stet
// //                   periculis ut. Vis in probo decore labitur. Unum simul an vis,
// //                   tale patrioque eos ad, dicunt percipit ea nam.
// //                 </span>
// //                 <div className="pt-10 pb-10">
// //                   <a
// //                     href="#"
// //                     className="button btn-align btn-more is-link color-primary"
// //                   >
// //                     Learn more <i className="sl sl-icon-arrow-right" />
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //         {/* <!-- /UI Feature --> */}

// //         {/* <!-- UI Feature --> */}
// //         <section className="section is-medium  no-lines">
// //           <div className="container">
// //             <div className="columns is-vcentered">
// //               <div className="column is-4 is-offset-2">
// //                 {/* <!-- Title --> */}
// //                 <div className="title-wrapper">
// //                   <h6 className="top-subtitle">Comprehensive design </h6>
// //                   <h2 className="title is-landing quick-feature">
// //                     User Experience
// //                   </h2>
// //                   <div className="title-divider is-small" />
// //                 </div>
// //                 {/* <!-- /Title --> */}

// //                 <span className="section-feature-description">
// //                   Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum
// //                   inermis iudicabit. Ex vidit fierent hendrerit eum, sed stet
// //                   periculis ut. Vis in probo decore labitur. Unum simul an vis,
// //                   tale patrioque eos ad, dicunt percipit ea nam.
// //                 </span>
// //                 <div className="pt-10 pb-10">
// //                   <a
// //                     href="#"
// //                     className="button btn-align btn-more is-link color-primary"
// //                   >
// //                     Learn more <i className="sl sl-icon-arrow-right" />
// //                   </a>
// //                 </div>
// //               </div>

// //               {/* <!-- Animated svg --> */}
// //               <div className="column is-6 is-offset-1">
// //                 <div id="chat-ui" className="vivus-svg" />
// //               </div>
// //               {/* <!-- Animated svg --> */}
// //             </div>
// //           </div>
// //         </section>
// //         {/* <!-- /UI Feature --> */}
