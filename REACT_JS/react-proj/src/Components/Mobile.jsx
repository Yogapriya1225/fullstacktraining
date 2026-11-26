
import React, { useContext } from "react";
import { MobileContext } from './MobileContext';
function Mobile(){
    const mobile = useContext(MobileContext);
    console.log(mobile);
    return (
        <>
        <center>
        <h2>Mobile Page</h2>
        <h3>Mobile : {mobile.name}</h3>
        </center>
        </>
    );
}
export default Mobile;