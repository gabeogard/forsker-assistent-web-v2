import React, { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Sending...')

    let data = {
      name,
      email,
      subject,
      message
    }

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
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
  }

  return (
      <div className="contact-modal">
        <div className="contact-info">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Navn</span>
            </label>
            <input
              type="text"
              placeholder="Skriv navn her"
              name="name"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ola@nordmann.no"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Nødvendig felt*</span>{" "}
            </label>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Emne</span>
          </label>
          <input
            type="text textsubject"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
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
          onChange={(e) => setMessage(e.target.value)}
           placeholder="Forklar tydelig hva du ønsker. Så svarer vi deg så snart som mulig. "/>
          <label className="label">
            <span className="label-text-alt">Nødvendig felt*</span>{" "}
          </label>
        </div>
        <button className="btn btn-success" onClick={(e)=>{handleSubmit(e)}}>Send forespørsel</button>
      </div>
    
  );
};

export default ContactForm;
