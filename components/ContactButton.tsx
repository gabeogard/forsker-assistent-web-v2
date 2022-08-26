import { useModal } from "../hooks/useModal";
import { Modal } from "./modal";
import ContactForm from "./ContactForm";

const ContactButton = () => {
    
    const {isShown, toggle} = useModal();

    return(
        <div>
            <button
            className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={toggle}
          >
            Kontakt
          </button>
        <Modal
          isShown={isShown}
          hide={toggle}
          modalContent={<ContactForm />}
          headerText={"Kontakt"}
        />
        </div>
    );
}




export default ContactButton;