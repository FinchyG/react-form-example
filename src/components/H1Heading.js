import React from "react";

function H1Heading(props) {

  const styles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem"
  }
  
  return (
    <p 
      style={styles}
    >
      {props.textContent}    
    </p>
  );
}

export default H1Heading;
