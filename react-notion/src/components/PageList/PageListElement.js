import React from "react";
import {NavLink} from "react-router-dom";

const PageListElement = (props) => {

    return (
        <li className="page-list-elem">
            <NavLink to={'/pages/' + props.id} activeClassName='current-page-element' className='nostyle'>
                <img className="icon-sm menu-icon" src="assets/icons/closed_triangle.png" alt=""/>
                {props.name}
            </NavLink>
        </li>
    );
}

export default PageListElement