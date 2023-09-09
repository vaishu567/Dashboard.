import React, { useState } from "react";
import "../styles/formpopup.css"; // You can create a CSS file for styling

const FormPopup = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <div>
      <button onClick={toggleForm}>Open Form</button>
      {isFormVisible && (
        <div className="form-popup">
          <form>
            {/* Your form fields go here */}
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            {/* Add more form fields as needed */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
