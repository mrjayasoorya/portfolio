import React, { Component } from 'react';
import VerticalSwipeToSlide from '../../components/slider/verticalSlider';
import withContact from '../../hoc/withContact';
import FloatingIcons from '../../hoc/withFloatingIcons';
// import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
          <div style={{height:"100vh", width:"100%"}}>
              <VerticalSwipeToSlide {...this.props}/>
          </div>
        );
    }
}

Home.propTypes = {

};

export default FloatingIcons(withContact(Home));