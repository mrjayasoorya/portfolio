import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import VerticalSwipeToSlide from '../../components/slider/verticalSlider';
import withHeader from '../../hoc/header';
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

export default withHeader(withRouter(FloatingIcons(withContact(Home))));