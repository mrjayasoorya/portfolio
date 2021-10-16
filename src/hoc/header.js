import React from "react";
import Header from "../components/header"

const withHeader = Component => props =>{
return (
    <>
    <Header/>
    <Component {...props}/>
    </>
)
}
export default withHeader