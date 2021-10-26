import React from 'react';

import '../../App.css';

const SideBar = () => {
    return(
        <nav className="side-menu">
        <div className="account-preview side-menu-elem">
            <div className="avatar">A</div>
            <div className="account-name">Anatoly</div>
        </div>
        <div className="search-button side-menu-elem">
            <img className="icon menu-icon" src="assets/icons/search.png" alt="" />
            Search
        </div>
        <div className="settings-button side-menu-elem">
            <img className="icon menu-icon" src="assets/icons/setting.png" alt="" />
            Settings
        </div>
        <div className="pages-title side-menu-elem">
            <img className="icon-sm menu-icon" src="assets/icons/opened_triangle.png" alt="" />
            <b>Pages</b>
        </div>

        <ul className="page-list side-menu-elem">
            <li className="page-list-elem">
                <img className="icon-sm menu-icon" src="assets/icons/closed_triangle.png" alt="" />
                My tasks
            </li>
            <li className="page-list-elem">
                <img className="icon-sm menu-icon" src="assets/icons/closed_triangle.png" alt="" />
                My books
            </li>
            <li className="page-list-elem">
                <img className="icon-sm menu-icon" src="assets/icons/closed_triangle.png" alt="" />
                My events
            </li>
            <li className="page-list-elem">
                <img className="icon-sm menu-icon" src="assets/icons/closed_triangle.png" alt="" />
                My calendar
            </li>
            <li className="page-list-elem">
                <img className="icon menu-icon" src="assets/icons/plus.png" alt="" />
                Add page
            </li>
        </ul>
        <div className="template-button side-menu-elem">
            <img className="icon menu-icon" src="assets/icons/template.png" alt="" />
            Templates
        </div>
        <div className="import-button side-menu-elem">
            <img className="icon menu-icon" src="assets/icons/import.png" alt="" />
            Import
        </div>
        <div className="side-menu-elem">
            <img className="icon menu-icon" src="assets/icons/delete.png" alt="" />
            Trash
        </div>
    </nav>
    )
};

export default SideBar;