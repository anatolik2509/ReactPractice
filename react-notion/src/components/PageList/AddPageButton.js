import React, {useState, useRef} from "react";

const AddPageButton = ({onAdd}) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputFieldRef = useRef();

    const addPageOnSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
        e.target[0].value = '';
        setIsFocused(false);
        onAdd(e.target[0].value); //лучше вызвать в конце
    };

    const onFormBlur = (e) => {
        console.log(e);
        console.log(inputFieldRef.current.contains(e.target))
        if(e.relatedTarget == null || !inputFieldRef.current.contains(e.relatedTarget)){
            setIsFocused(false);
        }
    };

    const Button = (
        <div onClick={(e) => {
            setIsFocused(true);
        }}>
            <img className="icon menu-icon" src="/assets/icons/plus.png" alt=""/>
            <span>Add page</span>
        </div>
    );

    const InputField = (
        <form ref={inputFieldRef} className='add-form' onBlur={onFormBlur} onSubmit={addPageOnSubmit}>
            <input autoFocus={true} className='add-form-field' type='text' placeholder='Title'/>
            <input type='submit' value='Add'/>
        </form>
    );

    return (
        isFocused ? InputField : Button
    );
};

export default AddPageButton;
