import React from "react";

function RadioInput(props) {

  const styles = {
    display: "inline",
    width: "10%"
  }

  return (
    <input
      style={styles}
      type="radio"
      name={props.name}
      value={props.value}
      id={props.id}
      checked={props.checked}
      onChange={props.onChange}
    />
  )

}

export default RadioInput;