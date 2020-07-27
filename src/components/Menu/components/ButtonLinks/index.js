import React from 'react';
function ButtonLink(props){
    console.log(props)
    // props => {className: "oq alguem passar", href:"/"}
    return (
        <a href="/" className={props.className} >
            {props.children}
        </a>
    );
}
export default ButtonLink;