import React, { useState } from "react";

const ImageTemplate = (props) => {

    const {
        editMode,
        hide,
    } = props;

    const [drag, setDrag] = useState(false);

    const dragStartHandler = (ev) => {
        ev.preventDefault();
        setDrag(true);
    }

    const dragLeaveHandler = (ev) => {
        ev.preventDefault();
        setDrag(false);
    }

    const onDropHandler = () => {
        console.log('TODO SAVE IMAGE')
        setDrag(false);
    }

    const onSave = () => {
        console.log('TODO Save table');
        hide();
    }

    return (
        <>
            {editMode ? (
                <>
                    {drag 
                        ? <div 
                            className="drop-area"
                            onDragStart={dragStartHandler}
                            onDragLeave={dragLeaveHandler}
                            onDragOver={dragStartHandler}
                            onDrop={onDropHandler}
                        > Отпустите файлы, чтобы загрузить их </div> 
                        : <div
                            className="empty-drop-area"
                            onDragStart={dragStartHandler}
                            onDragLeave={dragLeaveHandler}
                            onDragOver={dragStartHandler}
                        > Перетащите файлы, чтобы загрузить их </div>
                    }
                    <button className="block-button" onClick={onSave}> Сохранить </button>
                </>
            ) : (
                <>
                    <h1>TODO Image Template</h1>  
                </>     
            )}
        </>
    );
};

export default ImageTemplate;