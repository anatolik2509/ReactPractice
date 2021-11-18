import React from 'react';

import ImageTemplate from './ImageTemplate';
import LinkTemplate from './LinkTemplate';
import TextTemplate from './TextTemplate';
import VideoTemplate from './VideoTemplate';


const Template = (props) => {

    const {
        data,
        editMode,
        hide,
    } = props;

    const { id, type } = data;

    const renderTextTemplate = () => {
        if (type !== 'text') return null;
        return (
            <TextTemplate 
                editMode={editMode}
                hide={hide}
            />
        );
    };

    const renderImageTemplate = () => {
        if (type !== 'image') return null;
        return (
            <ImageTemplate 
                editMode={editMode} 
                hide={hide}
            />
        )
    };

    const renderVideoTemplate = () => {
        if (type !== 'video') return null;
        return (
            <VideoTemplate 
                editMode={editMode} 
                hide={hide}
            />
        )
    };

    const renderLinkTemplate = () => {
        if (type !== 'link') return null;
        return (
            <LinkTemplate 
                editMode={editMode} 
                hide={hide}
            />
        )
    }

    return (
        <>
            {renderTextTemplate()}
            {renderImageTemplate()}
            {renderVideoTemplate()}
            {renderLinkTemplate()}
        </>
    )
};

export default Template;