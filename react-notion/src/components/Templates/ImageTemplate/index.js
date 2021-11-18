import React from "react";

const ImageTemplate = (props) => {

    const {
        editMode,
        hide,
    } = props;

    const onSave = () => {
        console.log('TODO Save table');
        hide();
    }

    return (
        <>
            {editMode ? (
                <>
                    <h1>TODO Image Template</h1>
                    <button className="block-button" onClick={onSave}> Сохранить </button>
                </>
            ) : (
                <h1>This is Image template</h1>
            )}
        </>
    );
};

export default ImageTemplate;