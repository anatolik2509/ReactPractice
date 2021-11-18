import React, { useState } from 'react';
import '../../App.css';

import { addBlock } from "../../redux/local-store";
import { connect } from 'react-redux';

const DropDownMenu = (props) => {

    const {
        children,
        id,
        addBlock
    } = props;
    
    const [visible, setVisible] = useState(false);

    const onVisible = () => {
        setVisible(!visible);
    };

    const addTextBlock = (type) => {
        addBlock({ pageId: 0, type });
        setVisible(false);
    }

    return(
        <>
        <div className={`add-block ${visible ? 'visible' : ''}`} onClick={onVisible}>
            {children}
        </div>
        {visible && (
            <div className="block-list">
                <div className="block-list-item" onClick={() => addTextBlock('text')}>
                    Текстовый
                </div>
                <div className="block-list-item" onClick={() => addTextBlock('image')}>
                    Изображение
                </div>
                <div className="block-list-item" onClick={() => addTextBlock('video')}>
                    Видео с YouTube
                </div>
                <div className="block-list-item" onClick={() => addTextBlock('link')}>
                    Ссылка на другую заметку
                </div>
            </div>
        )}
        </>
    );
}


const mapStateToProps = (state) =>  {
    return { };
}

const mapDispatchToProps = {
    addBlock,
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);