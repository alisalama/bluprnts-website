import React from 'react'
import PropTypes from 'prop-types'

// const Pricing =  => {
class Pricing extends React.Component {

  constructor(props) {
    super(props)
    this.state = { pricing: 'monthly' }
  }
  
  selectionChanged = (e) =>  {
    this.setState({
      pricing: e.currentTarget.value
    });
    // console.log(e);
  }

  render() {

    // get the properties
    const { pricing } = this.props;

    // return the component html
    return (
      <>
        <div className="is-pricing is-feature-wave">
          <div className="hero-body mb-20">
            <div className="container">
              <div className="columns is-vcentered">

                <div className="column is-6 is-offset-3 is-hero-title has-text-centered">
                  <h1 className="title is-1 is-medium">
                    {pricing.heading}
                  </h1>
                  <h2 className="subtitle is-4">
                    {pricing.description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-secondary" >
          <div className="container">
            {/* <!-- Pricing wrapper --> */}
            <div className="switch-pricing-wrapper">
              <div className="pricing-container">
                
                {/* <!-- Pricing Switcher --> */}
                <div className="pricing-switcher">
                  <p className="fieldset">
                    <input type="radio" name="duration-1" id="monthly-1"
                      value='monthly' onChange={this.selectionChanged} checked={this.state.pricing === 'monthly'}
                    />
                    <label htmlFor="monthly-1">Monthly</label>
                    <input type="radio" name="duration-1" id="yearly-1"
                      value='yearly' onChange={this.selectionChanged} checked={this.state.pricing === 'yearly'}/>
                    <label htmlFor="yearly-1">Yearly</label>
                    <span className="switch"></span>
                  </p>
                </div>

                <div className="columns tables-wrap">
                  <div className="columns">
                    {
                      pricing.plans.map(price => (

                        <div key={price.plan} className="column is-4">
                          <div className="flex-card">
                            {/* <!-- Pricing image --> */}
                            <div className="pricing-image-container">
                              <img src="assets/images/illustrations/icons/pricing/scooter.svg" alt="" />
                              <div className="plan-price is-monthly is-active">
                                <span>{price.monthly_price}</span>
                              </div>
                              <div className="plan-price is-yearly">
                                <span>{price.yearly_price}</span>
                              </div>
                            </div>
                            {/* <!-- Pricing plan name --> */}
                            <div className="plan-name has-text-centered">
                              <h3>{price.plan}</h3>
                            </div>
                            {/* <!-- Pricing plan features --> */}
                            <ul className="plan-features">
                              {price.description}
                              {price.items.map(item => (
                                <li key={item} className="is-size-5">
                                  {item}
                                </li>
                              ))}
                            </ul>
                            {/* <!-- Pricing action -->s */}
                            <div className="button-wrapper">
                              <a href="https://app.bluprnts.com" className="button secondary-btn is-fullwidth raised btn-align is-bold btn-upper">Sign up</a>
                            </div>
                          </div>
                        </div>
                      ))}

                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Clients --> */}
            <div className="hero-foot pt-10 pb-10">
              <div className="container">
                <div className="tabs partner-tabs is-centered">
                  <ul>
                    <li><img className="partner-logo" src="assets/images/logos/custom/covenant.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/infinite.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/kromo.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/grubspot.svg" alt="" /></li>
                    <li><img className="partner-logo" src="assets/images/logos/custom/systek.svg" alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /Clients --> */}

          </div>
        </div>

      </>
    )
  }
}


Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      monthly_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      yearly_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing

