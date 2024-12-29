import { React, useState } from "react";
import validator from "validator";

// component imports
import H1Header from "./components/H1Header";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import RadioInput from "./components/RadioInput";
import FileInput from "./components/FileInput";
import SelectInput from './components/SelectInput';
import TextareaInput from './components/TextareaInput';
import Button from './components/Button';

function App() {
  const [firstName, setFirstName] = useState(""||null);
  const [lastName, setLastName] = useState(""||null);
  const [email, setEmail] = useState(""||null);
  const [mobileNumber, setMobileNumber] = useState(""||null);
  const [gender, setGender] = useState("male");
  const [languages, setLanguages] = useState({
    English: true,
    Spanish: false,
    French: false,
  });
  const [aboutYou, setAboutYou] = useState(""||null);
  const [url, setUrl] = useState(""||null);
  const [selectedOption, setSelectedOption] =
    useState(""||null);
  const [about, setAbout] = useState(""||null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length === 0) {
      alert("please enter valid first name");
    } else if (lastName.length === 0) {
      alert("please enter lasst name");
    } else if (!validator.isEmail(email)) {
      alert("please enter valid email address");
    } else if (!validator.isMobilePhone(mobileNumber, 'en-GB')) {
      alert("please enter valid mobile phone number");
    } else if (!validator.isURL(url)) {
      alert("please enter a valid url");
    } else {
        console.log(
          firstName,
          lastName,
          email,
          mobileNumber,
          gender,
          selectedOption,
          languages,
          aboutYou,
          url,
          about
        );
      }
    // code for form submission to database to go here
  };

  const handleLanguagesChange = (lang) => {
    setLanguages((prev) => ({
      ...prev,
      [lang]: !prev[lang],
    }));
  };
  const handleReset = () => {
    // reset all state variables
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setGender("male");
    setLanguages({
      English: true,
      Spanish: false,
      French: false,
    });
    setAboutYou("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  const styles = {
    appStyle: {
      fontFamily: "sans-serif",
      width: "50%",
      margin: "auto",
      marginTop: "2rem"
    },
    pStyle: {
      color: "red"
    },
    labelStyle: {
      display: "block",
      fontWeight: "bold",
      marginTop: "1rem"
    },
    fieldsetStyle: {
      borderWidth: "0.1rem",
      borderColor: "lightgray",
      borderRadius: "0.2rem",
      width: "15rem",
      marginTop: "1.5rem",
      marginBottom: "1.5rem"
    },
    legendStyle: {
      backgroundColor: "lightgray",
      borderRadius: "0.2rem",
      fontWeight: "bold"
    }
  }

  return (
    <div style={styles.appStyle}>
      <H1Header textContent="Example React Form" />
      <p style={styles.pStyle}>* indicates required information</p>
      <form action="#" method="post">
        <label htmlFor="firstname" style={styles.labelStyle}>
          First Name*
          <TextInput
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
            placeholder="Type first name..."
            required
          />
        </label>
        <label htmlFor="lastname" style={styles.labelStyle}>
          Last Name*
          <TextInput
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
            placeholder="Type last name..."
            required
          />
        </label>
        <label htmlFor="email" style={styles.labelStyle}>
          Enter Email*
          <TextInput
            name="email"
            id="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter email"
            required
          />
        </label>
        <label htmlFor="mobileNumber" style={styles.labelStyle}>
          Mobile Phone
          <TextInput
            name="mobileNumber"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) =>
              setMobileNumber(e.target.value)
            }
            placeholder="Enter Mobile number"
          />
        </label>
        <fieldset style={styles.fieldsetStyle}>
          <legend style={styles.legendStyle}>Gender:</legend>
          <label htmlFor="male">
            <RadioInput
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              onChange={(e) =>
                setGender(e.target.value)
              }
            />
            Male
          </label>
          <label htmlFor="female">
            <RadioInput
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              onChange={(e) =>
                setGender(e.target.value)
              }
            />
            Female
          </label>
          <label htmlFor="other">
            <RadioInput
              name="gender"
              value="other"
              id="other"
              checked={gender === "other"}
              onChange={(e) =>
                setGender(e.target.value)
              }
            />
            Other
          </label>
        </fieldset>
        <fieldset style={styles.fieldsetStyle}>
          <legend style={styles.legendStyle}>
            Languages you speak:
          </legend>
          <label htmlFor="English">
            <CheckboxInput
              name="lang"
              id="English"
              checked={languages.English === true}
              onChange={(e) =>
                handleLanguagesChange("English")
              }
            />
            English
          </label>
          <label htmlFor="Spanish">
            <CheckboxInput
              name="lang"
              id="Spanish"
              checked={languages.Spanish === true}
              onChange={(e) =>
                handleLanguagesChange("Spanish")
              }
            />
            Spanish
          </label>
          <label htmlFor="French">
            <CheckboxInput
              name="lang"
              id="French"
              checked={languages.French === true}
              onChange={(e) =>
                handleLanguagesChange("French")
              }
            />
            French
          </label> 
        </fieldset>
        <label htmlFor="file" style={styles.labelStyle}>
          Upload Personal Photo:
        </label>
        <FileInput
          name="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={(e) =>
            setAboutYou(e.target.files[0])
          }
          placeholder="Enter Upload File"
          required
        />
        <label htmlFor="url" style={styles.labelStyle}>
          Enter URL*
          <TextInput
            id="url"
            name="url"
            onChange={(e) =>
              setUrl(e.target.value)
            }
            placeholder="Enter url"
            required
          />
        </label>
        <label style={styles.labelStyle}>
          Select your age group
        </label>
        <SelectInput
          name="select"
          id="select"
          value={selectedOption}
          onChange={(e) =>
            setSelectedOption(
              e.target.value
            )
          }
        />
        <label htmlFor="about" style={styles.labelStyle}>
          About you:
        </label>
        <TextareaInput
          name="about"
          id="about"
          cols="30"
          rows="10"
          onChange={(e) =>
            setAbout(e.target.value)
          }
          placeholder="About yourself..."
          required
        />
        <div style={{width: "15rem"}}>
          <Button
            type="reset"
            value="reset"
            onClick={() => handleReset()}
            textContent="Reset"
          />
          <Button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
            textContent="Submit"
          />
        </div>
      </form>
    
    </div>
  );
}

export default App;
