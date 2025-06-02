import React from "react";
import "./style.css"

const Image = ({imgUrl, children}) => {
    return (
        <img className="image" src={imgUrl} alt=""/>        
    )
}

export default Image;