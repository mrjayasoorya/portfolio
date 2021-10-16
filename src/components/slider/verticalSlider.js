import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IconButton, withStyles } from "@material-ui/core";
import Title from "../../screens/home/Title";
import Aboutus from "../../screens/home/Aboutus";
import Skills from "../../screens/home/Skills";
import Contact from "../../screens/home/Contact";
import Projects from "../../screens/home/Projects";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const style = ((theme)=>(
  {
   slickClass:{
     
   }
  }
))

 class VerticalSwipeToSlide extends Component {
   constructor(props){
     super(props)
     this.slide = this.slide.bind(this);
     this.state = {
      slideIndex: 0,
      updateCount: 0
    };
   }
   
   slide(y){
    y > 0 ? (
       this.slider.slickNext()
    ) : (
       this.slider.slickPrev()
    )
}
componentDidMount(){
  let slickListDiv = document.getElementsByClassName('slick-list')[0]
  slickListDiv.addEventListener('wheel', event => {
    event.preventDefault()
    event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
  })
}
componentWillMount(){
    window.addEventListener('wheel', (e) => {
        this.slide(e.wheelDelta);
    })
}
// shouldComponentUpdate() {
//   return true;
// }
  render() {
    const settings = {
      slidesToScroll: 1,
      arrows: false,
      infinite:false, 
      dots: true,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      customPaging: function (i) {
        return <div style={{opacity:0}}>{i}</div>;
      },
      // afterChange: () =>
      //   this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => {next > 0 ? document.getElementById('goback').style.display = "block" : document.getElementById('goback').style.display = "none"},
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots:false,
            slidesToScroll:1
          }
        }]
    };
const scrollDown = () =>{
  this.slider.slickGoTo(1)
}
    return (
      <div style={{width:"100%", height:"100%"}} >
          <IconButton color="secondary"  id="goback" style={{color:"white", zIndex:5, display:"none", position:"absolute", bottom:0, right:"45%" }} onClick={()=>{this.slider.slickGoTo(0)}}><KeyboardArrowUpIcon color="secondary" fontSize="large"/></IconButton>
        <Slider {...settings} ref={slider => this.slider = slider?.innerSlider}>
          <div >
          <div className="rootCard"><Title scrollDown={scrollDown}/></div>
          </div>
          <div >
          <div className="rootCard"><Aboutus/></div>
          </div>
          <div >
          <div className="rootCard"><Skills/></div>
          </div>
          <div >
          <div className="rootCard"><Projects/></div>
          </div>
          <div >
          <div className="rootCard"><Contact/></div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default (withStyles(style,{withTheme:true}))(VerticalSwipeToSlide)