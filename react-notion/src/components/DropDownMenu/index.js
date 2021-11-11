import React from 'react';
import '../../App.css';

const DropDownMenu = ({ children }) => {
    return(
        <div className="add-block">
            {children}
        </div>
    );
}

export default DropDownMenu;