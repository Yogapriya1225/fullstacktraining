import React from "react";
import Mobile from "./Mobile";
function Electronics(props){
    //console.log(data);
    return (
        <>
        <center>
        <h2>Welcome to Electronics</h2>
        <Mobile mobile = {props.name}/>
        </center>
        </>
    );
}
export default Electronics;