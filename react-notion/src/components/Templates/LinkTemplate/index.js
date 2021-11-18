import React from "react";

const LinkTemplate = (props) => {

    const {
        editMode,
        hide,
    } = props;

    const onSave = () => {
        console.log('TODO LinkTemplate');
        hide();
    }

    return (
        <>
            {editMode ? (
                <>
                    <h1>TODO Link Template</h1>
                    <button className="block-button" onClick={onSave}> Сохранить </button>
                </>
            ) : (
                <h1>This is Link Template</h1>
            )}
        </>
    );
};

export default LinkTemplate;