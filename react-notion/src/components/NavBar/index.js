import React from 'react';

import '../../App.css';

const NavBar = () => {

    return (
        <div className="top-bar">
            <div className="current-page-title">
                My tasks
            </div>
            <div className="favorite-button">
                <img className="icon-lg" src="assets/icons/favorite.png" alt="" />
            </div>
        </div>
    )
};

export default NavBar;