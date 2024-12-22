import React from "react";

function TextInput(props) {

  const styles = {
    display: "block",
    width: "15rem",
    boxSizing: "border-box",
    border: "0.1rem solid silver",
    borderRadius: "4rem",
    fontSize: "0.8rem",
    backgroundColor: "darkkhaki",
    padding: "0.5rem 1rem 0.5rem 1rem",
    marginBottom: "1rem"
  }

  return (
    <input
      type="text"
      style={styles}
      name={props.name}
      id={props.id}  
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default TextInput;