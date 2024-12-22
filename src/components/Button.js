import React from "react";

function Button(props) {

    const styles = {
      width: "30%",
      padding: "0.5rem",
      borderRadius: "1rem",
      margin: "1.5rem",
      border: "none",
      color: "white",
      cursor: "pointer",
      backgroundColor: "green",
      fontSize: "1rem"
    }

    return (
      <button
        style={styles}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
      >
        {props.textContent}
      </button>
    )
}

export default Button;