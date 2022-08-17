import React from "react";

const ContactForm = () => {
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
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt">Nødvendige felt*</span>{" "}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Emne</span>
          </label>
          <input
            type="text textsubject"
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
           placeholder="Forklar tydelig hva du ønsker. Så svarer vi deg så snart som mulig. "/>
          <label className="label">
            <span className="label-text-alt">Nødvendig felt*</span>{" "}
          </label>
        </div>

      </div>
    
  );
};

export default ContactForm;
