import { useState, type SyntheticEvent } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__title heading-2">contact</div>
      <form className="form contact__form" onClick={handleSubmit}>
        <div className="form__group form__group--1">
          <input
            type="text"
            id="name"
            value={name}
            className="form__input "
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form__label">Name</label>
        </div>
        <div className="form__group form__group--2">
          <input
            type="text"
            id="email"
            value={email}
            name="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div className="form__group form__group--3">
          <textarea
            className="form__input form__textArea"
            value={message}
            name="message"
            placeholder="Say something"
            onChange={(e) => setMessage(e.target.value)}
            rows={15}
          />
          <label className="form__label">Message</label>
        </div>
        <div className="form__group form__group--4">
          <button className="btn" type="submit">
            send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
