import ContactForm from "./ContactForm";

export const ContactModal = () => {
  return (
    <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-96">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <ContactForm/>
            </div>
          </div>
    </div>
  );
};
