import React from "react";
import SelectOption from "./SelectOption";

function SelectInput(props) {

  const styles = {
    display: "block",
    width: "15rem",
    marginBottom: "1rem",
    padding: "0.5rem",
    boxSizing: "border-box",
    border: "0.1rem solid gray",
    borderRadius: "0.5rem"
  }

  return (

    <select
      style={styles}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    >
      <SelectOption
        value="unselected"
        textContent="select your age group"
      />
      <optgroup label="minor">
        <SelectOption
          value="0 to 11"
          textContent="0 to 10"
        />
        <SelectOption
          value="12 to 18"
          textContent="11 to 17"
        />
      </optgroup>
        <optgroup label="adult">
              <SelectOption
          value="18 to 25"
          textContent="18 to 25"
        />
        <SelectOption
          value="25 to 39"
          textContent="25 to 39"
        />
        <SelectOption
          value="40 to 59"
          textContent="40 to 59"
        />
      </optgroup>
      <optgroup label="senior">
        <SelectOption
          value="60 to 69"
          textContent="60 to 69"
        />
        <SelectOption
          value="70 to 79"
          textContent="70 to 79"
        />
        <SelectOption
          value="80 and over"
          textContent="80 and over"
        />
      </optgroup>
    </select>
  );
}

export default SelectInput;