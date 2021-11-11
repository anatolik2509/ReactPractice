import React from 'react';

import '../../App.css';
import NavBar from '../NavBar';
import DropDownMenu from '../DropDownMenu';

const Page = () => {

    return (
        <div className="page-content">
            <NavBar/>
            <div className="page-container">
                <DropDownMenu>
                    + Добавить блок
                </DropDownMenu>
            </div>
        </div>
    )
}

export default Page;