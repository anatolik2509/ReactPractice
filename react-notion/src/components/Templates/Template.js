import React from 'react';
import TableTemplate from './TableTemplate';
import TextTemplate from './TextTemplate';


const Template = (props) => {

    const {
        data,
        editMode,
        hide,
    } = props;

    const { id, type } = data;

    console.log(data);

    const renderTextTemplate = () => {
        if (type !== 'text') return null;
        return (
            <TextTemplate 
                editMode={editMode}
                hide={hide}
            />
        );
    };

    const renderTableTemplate = () => {
        if (type !== 'table') return null;
        return (
            <TableTemplate 
                editMode={editMode} 
                hide={hide}
            />
        )
    }

    return (
        <>
            {renderTextTemplate()}
            {renderTableTemplate()}
        </>
    )
};

export default Template;