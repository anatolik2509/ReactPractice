import React from "react";

const Button = (props) => {

    const {
        text,
        img,
        cN,
        onClick,
    } = props;

    return (
      <div className={`${cN} side-menu-elem`} onClick={onClick}>
          <img className="icon menu-icon" src={img} alt=""/>
          {text}
      </div>
    )
};

export default Button;