import React from "react";

const TableTemplate = (props) => {

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
                    <h1>TODO Table Template</h1>
                    <button className="block-button" onClick={onSave}> Сохранить </button>
                </>
            ) : (
                <h1>This is Table template</h1>
            )}
        </>
    );
};

export default TableTemplate;