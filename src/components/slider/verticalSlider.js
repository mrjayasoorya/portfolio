import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { withStyles } from "@material-ui/core";
import Title from "../../screens/home/Title";
import Aboutus from "../../screens/home/Aboutus";
import Experience from "../../screens/home/Experience";
import Skills from "../../screens/home/Skills";
import Contact from "../../screens/home/Contact";


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
  render() {
    const settings = {
      slidesToScroll: 1,
      arrows: false,
      infinite:false, 
      dots: true,
      vertical: true,
      verticalSwiping: true,
      customPaging: function (i) {
        return <div ></div>;
      },
      // dotsClass: "slick-dots slick-thumb",
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div style={{width:"100%", height:"100%"}} >
        <Slider {...settings} ref={slider => this.slider = slider.innerSlider}>
          <div >
          <div className="rootCard"><Title/></div>
          </div>
          <div >
          <div className="rootCard"><Aboutus/></div>
          </div>
          <div >
          <div className="rootCard"><Experience/></div>
          </div>
          <div >
          <div className="rootCard"><Skills/></div>
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