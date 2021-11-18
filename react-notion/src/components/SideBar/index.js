import React, { useState } from 'react';

import Modal from '../Modal';
import Button from '../Button';
import '../../App.css';
import AvatarPreview from "../AvatarPreview";
import SearchButton from "../SearchButton";
import SettingsButton from "../SettingsButton";
import PageList from "../PageList";
import TemplatesButton from "../TemplatesButton";
import TemplatesModal from '../Modal/TemplatesModal';


const SideBar = () => {

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }

    const onTemplateButtonClick = () => {
        setVisible(true);
    };

    const renderTemplatesModal = () => {
        if (!visible) return null;
        return (
            <Modal onClose={onClose}>
                <TemplatesModal />
            </Modal>
        )
    };

    return (
        <nav className="side-menu">
            <AvatarPreview />
            <SearchButton />
            <SettingsButton />
            <PageList/>
            <Button 
                text='Templates'
                img='/assets/icons/template.png'
                cN='cN'
                onClick={onTemplateButtonClick} 
            />

            <div className="import-button side-menu-elem">
                <img className="icon menu-icon" src="/assets/icons/import.png" alt=""/>
                Import
            </div>
            <div className="side-menu-elem">
                <img className="icon menu-icon" src="/assets/icons/delete.png" alt=""/>
                Trash
            </div>
            {renderTemplatesModal()}
        </nav>
    )
};

export default SideBar;