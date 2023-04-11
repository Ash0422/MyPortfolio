import "../index.css";
import React, { useState } from "react";

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(formValues.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Store the submitted data in localStorage
    localStorage.setItem("contactFormData", JSON.stringify(formValues));

    // Display the success message
    setSuccessMessage("Thank you for contacting me! I'll get back to you soon.");

    // Clear the form fields
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        ></input>
        <label>Your Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        ></input>
        {emailError && <p className="error-message">{emailError}</p>}
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          required
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          placeholder="How Can I Help you?"
          required
        />
        <button className="btn" type="submit">SUBMIT</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default ContactMe;
