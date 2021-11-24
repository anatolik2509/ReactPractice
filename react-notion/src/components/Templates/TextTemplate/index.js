import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import '../../../App.css';

const TextTemplate = (props) => {

    const {
        editMode,
        hide
    } = props;

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
    };

    const  [convertedContent, setConvertedContent] = useState(null);

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    };

    const onSave = () => {
        console.log('TODO Save');
        hide();
    }

    return (
        <>
        {editMode ? (
            <>
                <Editor 
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    toolbar={{
                        inline: { 
                            inDropdown: true,
                            options: ['bold', 'italic', 'underline', 'strikethrough'],
                        },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                    }}
                />
                <button className="block-button" onClick={onSave}>Сохранить</button>
            </>
        ) : (
            <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}/>
        )}
        </>
    )
};

export default TextTemplate;