import { SvgIcon } from "@material-ui/core";
import React from "react";

function ShapeWhite() {
  return (
   <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"> */}
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 255, 255, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        strokeWidth="0"
        d="M21.4-13.7C29.5-6.9 39.1 2.1 37.2 7.7c-1.9 5.5-15.4 7.6-26.3 11.7-11 4.1-19.5 10.2-25.5 8.3C-20.5 25.8-23.8 16-24.8 7c-1-9.1.2-17.4 4.7-23.4s12.3-9.8 19.5-9.3c7.2.4 13.9 5.1 22 12z"
        transform="translate(50 50)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    {/* </svg> */}
   </SvgIcon>
  );
}

export default ShapeWhite;
