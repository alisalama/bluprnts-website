import React from 'react'

const BackToTop = class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isHidden: '',
    }
  }

  //
  componentDidMount() {
    window.addEventListener('scroll', this.navbarScroll);
  }

  // set the scrolling behaviours
  navbarScroll = () => {
      
    var pxShow = 600;

    if(window.scroll){
      var height = window.scrollY;  //getting the scrolling height of window
      this.setState({ isVisible: height > pxShow ? 'visible' : '' }); // set the state, dependent on the height
    }

  }
  
  // set the scrolling behaviours
  scrollToTop = () => {
    
    if(window.scroll){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });  //getting the scrolling height of window
    }

  }


  render() {
    return (
      <>
        <div id="backtotop" className={`${this.state.isVisible}`}>
          <div onClick={this.scrollToTop}></div>
        </div>
      </>
    )
  }
}

export default BackToTop
