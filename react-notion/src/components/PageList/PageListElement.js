import React from "react";

const PageListElement = (props) => {
    return (
        <li className="page-list-elem">
            <img className="icon-sm menu-icon" src="assets/icons/closed_triangle.png" alt=""/>
            {props.name}
        </li>
    )
}

export default PageListElement