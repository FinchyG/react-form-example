import React from "react";

function CheckboxInput(props) {

  const styles = {
    display: "inline",
    width: "10%"
  }

  return (

    <input
      style={styles}
      type="checkbox"
      name={props.name}
      id={props.id}
      checked={props.checked}
      onChange={props.onChange}
    />
  
  );

}

export default CheckboxInput;