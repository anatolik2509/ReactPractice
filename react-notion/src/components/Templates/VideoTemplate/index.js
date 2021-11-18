import React from "react";

const VideoTemplate = (props) => {

    const {
        editMode,
        hide,
    } = props;

    const onSave = () => {
        console.log('TODO VideoTemplate');
        hide();
    }

    return (
        <>
            {editMode ? (
                <>
                    <h1>TODO Video Template</h1>
                    <button className="block-button" onClick={onSave}> Сохранить </button>
                </>
            ) : (
                <h1>This is Video Template</h1>
            )}
        </>
    );
};

export default VideoTemplate;