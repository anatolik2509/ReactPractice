import React, { useState } from "react";

const VideoTemplate = (props) => {

    const {
        editMode,
        hide,
    } = props;

    const [src, setSrc] = useState('https://www.youtube.com/embed/E7wJTI-1dvQ');

    const onChange = (ev) => {
        setSrc(ev.target.value);
    }

    const onSave = () => {
        console.log('TODO VideoTemplate');
        hide();
    };

    return (
        <>
            {editMode ? (
                <>
                    <div className="block-input">
                        <input onChange={onChange} value={src}/>
                    </div>
                    <button className="block-button" onClick={onSave}> Сохранить </button>
                </>
            ) : (
                <>
                    {src ? (
                        <div className="video-template">
                            <iframe src={src}
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                        </div>
                    ) : (
                        <h1>Ссылка невалидна</h1>
                    )}
                </>
            )}
        </>
    );
};

export default VideoTemplate;