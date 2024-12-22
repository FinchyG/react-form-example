import React from "react";

function FileInput(props) {

  const styles = {

  }

  return (

    <input
      style={styles}
      type="file"
      name={props.name}
      id={props.id}
      accept={props.accept}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
    );
}

export default FileInput;