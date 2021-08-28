import React, { Component } from 'react';
import VerticalSwipeToSlide from '../../components/slider/verticalSlider';
// import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        return (
          <div style={{height:"100vh", width:"100%"}}>
              <VerticalSwipeToSlide/>
          </div>
        );
    }
}

Home.propTypes = {

};

export default Home;