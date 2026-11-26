import React from "react";
import Electronics from "./Electronics";
function Flipcart(props){
    //console.log(props);
    return(
        <>
        <center>
        <h2>Welcome to Flipcart</h2>
        {/*<p>{mobile}</p>*/}
        <Electronics mobile = {props.name}/>
        </center>
        </>
    );
}
export default Flipcart;
