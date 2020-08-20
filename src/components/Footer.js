import React from "react";

const Footer = ({text,className}) => {
    return(
        <footer className={className}><span><b>{text}</b></span></footer>
    )
}

export default Footer