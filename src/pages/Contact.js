// Rehusable code
import React, { useState } from "react";
// Import email.js
import emailjs from "emailjs-com";

const Contact = () => {
  // Create the function to send the mail
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE}`,
        `${process.env.REACT_APP_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_USER}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email Sent')
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong')
        }
      );
    // Reset the form
    e.target.reset();
  }

  // const [email, setEmail] = useState("");
  // const [message, setMessaje] = useState("");

  // const [emailErr, setEmailErr] = useState("");

  // const handleFormChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = e.target;

  //   // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  //   return name === "email" ? setEmail(value) : setMessaje(value);
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   console.log(email);

  //   // if email is not valid (regex), set emailErr to "Bad email format"

  //   // Alert the user their first and last name, clear the inputs
  //   setEmail("");
  //   setMessaje("");
  // };

  return (

    <div className="about-test-div">
      <div className="container-fluid ">
        <h1 className="text-center contact-h1 mb-3" >Contact</h1>
        <form className="contact-form row g-3"style={{ marginTop: "2.5%" }} onSubmit={sendEmail}>
          <div className="col-md-6 mb-2">
            <label>Full Name</label>
            <input className="form-control" type="text" name="user_name" placeholder="name" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input className="form-control" type="email" name="user_email" placeholder="name@example.com"/>
          </div>
          <div className="col-12 mb-3">
            <label>Message</label>
            <textarea className="form-control" name="message" placeholder="text area"/>
            <input
              className="btn btn-success contact-form mt-3 text-center"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
