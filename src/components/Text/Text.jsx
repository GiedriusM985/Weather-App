import React from "react";
import "./style.css"

const Text = ({children, item}) => {
    return(
       <div className={`${item} === "city" ? "city" : "temp"  ? "temp" : "day" ? "day" : "small"`}>
        {children}
       </div>       
    )    
}

export default Text;