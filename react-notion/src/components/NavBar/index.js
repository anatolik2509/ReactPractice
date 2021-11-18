import React from 'react';

import '../../App.css';

const NavBar = (props) => {

    const {
        title
    } = props;

    return (
        <div className="top-bar">
            <div className="current-page-title">
                {title}
            </div>
            <div className="favorite-button">
                <img className="icon-lg" src="assets/icons/favorite.png" alt="" />
            </div>
        </div>
    )
};

export default NavBar;