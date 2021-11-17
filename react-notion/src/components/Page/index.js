import React from 'react';

import '../../App.css';
import NavBar from '../NavBar';
import DropDownMenu from '../DropDownMenu';
import TextFrame from '../TextFrame';

const Page = () => {

    return (
        <div className="page-content">
            <NavBar/>
            <div className="page-container">
                <DropDownMenu>
                    Добавить блок
                </DropDownMenu>
                <TextFrame />
            </div>
        </div>
    )
}

export default Page;