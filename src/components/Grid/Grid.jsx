import React from "react";
import "./style.css";

const Grid = ({children, templateColumns = 5, gap = "10px"}) => {
    return(
       <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${templateColumns}, 1fr)`,
        gap: gap
       }}>
        {children}
       </div>
    )
}

export default Grid;