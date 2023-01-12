import React from "react";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";

export default function ContactForm() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="text-light py-2 py-md-5">
      <p style={{color:"#ffffff78"}} className="mb-0">leave a message</p>
      <h4>We Love to Hear From You</h4>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" name="name" id="name" className="form-control" />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" name="email" id="email" className="form-control" />
      </div>
      <div>
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          rows="4"
          cols="50"
          name="message"
          id="message"
          className="form-control"
        />
      </div>
      <div>
        <TransparentButton type="submit" className="mt-2 mt-md-4">
          Submit
        </TransparentButton>
      </div>
    </form>
  );
}
