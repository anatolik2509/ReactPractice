import React from 'react';

import '../../App.css';

const NavBar = () => {

    return (
        <div class="top-bar">
            <div class="current-page-title">
                My tasks
            </div>
            <div class="favorite-button">
                <img class="icon-lg" src="icons/favorite.png" alt="" />
            </div>
        </div>
    )
};

export default NavBar;