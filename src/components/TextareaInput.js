import React from "react";

function TextareaInput(props) {

  const styles = {
    display: "block",
    resize: "none",
    width: "15rem",
    minHeight: "12rem",
    maxHeight: "18rem",
    border: "1rem solid silver",
    borderRadius: "10rem"
  }
  
  return (
    <textarea
      name={props.name}
      id={props.about}
      cols={props.cols}
      rows={props.rows}
      onChange={props.onChange}
      placeholder={props.placeholder}
    >
    </textarea>
  );
}

export default TextareaInput;