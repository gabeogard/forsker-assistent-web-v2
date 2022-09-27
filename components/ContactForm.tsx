import React, { ChangeEvent, useState } from "react";
import { withEventValueSelector } from "../utils/input";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Sending...')

    const data = {
      name,
      email,
      subject,
      message
    }
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response succeeded!');
      console.log(res)
      setLoading(false);
    })
  }

  return (
      <div className="contact-modal">
        
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Navn</span>
            </label>
            <input
              type="text"
              placeholder="Skriv navn her"
              name="name"
              onChange={withEventValueSelector(setName)}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Nødvendig felt*</span>{" "}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">E-post adresse</span>
            </label>
            <input
              type="text"
              name="email"
              onChange={withEventValueSelector(setEmail)}
              placeholder="ola@nordmann.no"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Nødvendig felt*</span>{" "}
            </label>
          </div>
        
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Emne</span>
          </label>
          <input
            type="text textsubject"
            name="subject"
            onChange={withEventValueSelector(setSubject)}
            placeholder="Tittel"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Nødvendig felt*</span>{" "}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Forklar</span>
          </label>
          <textarea className="textarea textarea-bordered"
          name="message"
          onChange={withEventValueSelector(setMessage)}
           placeholder="Forklar tydelig hva du ønsker. Så svarer vi deg så snart som mulig. "/>
          <label className="label">
            <span className="label-text-alt">Nødvendig felt*</span>{" "}
          </label>
        </div>
        <button className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Send forespørsel</button>
      </div>
    
  );
};

export default ContactForm;