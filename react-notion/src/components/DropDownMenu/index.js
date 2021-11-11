import React, { useState } from 'react';
import '../../App.css';

const DropDownMenu = ({ children }) => {
    
    const [visible, setVisible] = useState(false);

    const onVisible = () => {
        setVisible(!visible);
    };

    return(
        <>
        <div className={`add-block ${visible ? 'visible' : ''}`} onClick={onVisible}>
            {children}
        </div>
        {visible && (
            <div className="block-list">
                <div className="block-list-item">
                    Текстовый
                </div>
                <div className="block-list-item">
                    Изображение
                </div>
                <div className="block-list-item">
                    Видео с YouTube
                </div>
                <div className="block-list-item">
                    Ссылка на другую заметку
                </div>
            </div>
        )}
        </>
    );
}

export default DropDownMenu;