import React from 'react';

import '../../App.css';

const SideBar = () => {
    return(
        <nav class="side-menu">
        <div class="account-preview side-menu-elem">
            <div class="avatar">A</div>
            <div class="account-name">Anatoly</div>
        </div>
        <div class="search-button side-menu-elem">
            <img class="icon" src="assets/icons/search.png" alt="" />
            Search
        </div>
        <div class="settings-button side-menu-elem">
            <img class="icon" src="assets/icons/setting.png" alt="" />
            Settings
        </div>
        <div class="pages-title side-menu-elem">
            <img class="icon-sm" src="assets/icons/opened_triangle.png" alt="" />
            <b>Pages</b>
        </div>

        <ul class="page-list side-menu-elem">
            <li class="page-list-elem">
                <img class="icon-sm" src="assets/icons/closed_triangle.png" alt="" />
                My tasks
            </li>
            <li class="page-list-elem">
                <img class="icon-sm" src="assets/icons/closed_triangle.png" alt="" />
                My books
            </li>
            <li class="page-list-elem">
                <img class="icon-sm" src="assets/icons/closed_triangle.png" alt="" />
                My events
            </li>
            <li class="page-list-elem">
                <img class="icon-sm" src="assets/icons/closed_triangle.png" alt="" />
                My calendar
            </li>
            <li class="page-list-elem">
                <img class="icon" src="assets/icons/plus.png" alt="" />
                Add page
            </li>
        </ul>
        <div class="template-button side-menu-elem">
            <img class="icon" src="assets/icons/template.png" alt="" />
            Templates
        </div>
        <div class="import-button side-menu-elem">
            <img class="icon" src="assets/icons/import.png" alt="" />
            Import
        </div>
        <div class="side-menu-elem">
            <img class="icon" src="assets/icons/delete.png" alt="" />
            Trash
        </div>
    </nav>
    )
};

export default SideBar;