import React from "react";

const AddPageButton = ({onAdd}) => {



    return (
        <li className="page-list-elem">
            <img className="icon menu-icon" src="assets/icons/plus.png" alt=""/>
            <span>Add page</span>
        </li>
    )
};

export default AddPageButton;
