import React from 'react';

import '../../App.css';
import AvatarPreview from "../AvatarPreview";
import SearchButton from "../SearchButton";
import SettingsButton from "../SettingsButton";
import PageList from "../PageList";
import TemplatesButton from "../TemplatesButton";


const SideBar = () => {
    return (
        <nav className="side-menu">
            <AvatarPreview/>
            <SearchButton/>
            <SettingsButton/>
            <PageList pages={[{name: 'My Tasks'}, {name: 'My Books'}, {name: 'My Events'}, {name: 'My Calendar'},]}/>
            <TemplatesButton/>


            <div className="import-button side-menu-elem">
                <img className="icon menu-icon" src="assets/icons/import.png" alt=""/>
                Import
            </div>
            <div className="side-menu-elem">
                <img className="icon menu-icon" src="assets/icons/delete.png" alt=""/>
                Trash
            </div>
        </nav>
    )
};

export default SideBar;