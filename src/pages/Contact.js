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
        },
        (error) => {
          console.log(error.text);
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
    // <div className="about-test-div">
    //   <main className="contact-form-main">
    //     <section className="contact-menu">
    //       <div className="container-fluid">
    //         <h1 className="text-center contact-h1">Contact</h1>
    //         <form className="row g-3" onSubmit={sendEmail}>
    //           <div className="col-md-6">
    //             <label htmlFor="inputEmail4" className="form-label">
    //               Email
    //             </label>
    //             <input
    //               // value={email}
    //               name="email"
    //               // onChange={handleFormChange}
    //               type="email"
    //               className="form-control"
    //               id="inputEmail4"
    //             />
    //             {/* {emailErr && (
    //               <div style={{ color: "white"}}>{emailErr}</div>
    //             )} */}
    //           </div>
    //           <div className="col-md-6 mb-3">
    //             <label htmlFor="inputPassword4" className="form-label">
    //               Full Name
    //             </label>
    //             <input
    //               name="name"
    //               type="text"
    //               className="form-control"
    //               id="inputPassword4"
    //             />
    //           </div>
    //           <div className="col-12 mb-3">
    //             <label htmlFor="exampleFormControlTextarea1" className="form-label">
    //               Message
    //             </label>
    //             <textarea
    //               // value={message}
    //               // onChange={handleFormChange}
    //               name="message"
    //               type="text"
    //               className="form-control"
    //               id="exampleFormControlTextarea1"
    //               rows="3"
    //             ></textarea>
    //           </div>

    //           <div className="col-12 text-center contact-button">
    //             <button
    //               type="button"
    //               className="btn btn-success contact-form"

    //             >
    //               Send
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </section>
    //   </main>
    // </div>
    <div className="about-test-div">
      <div className="container-fluid ">
        <h1 className="text-center contact-h1 mb-3">Contact</h1>
        <form className="contact-form row g-3" onSubmit={sendEmail}>
          <div className="col-md-6 mb-3">
            <label>Full Name</label>
            <input className="form-control" type="text" name="user_name" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input className="form-control" type="email" name="user_email" />
          </div>
          <div className="col-12 mb-3">
            <label>Message</label>
            <textarea className="form-control" name="message" />
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
