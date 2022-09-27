import Link from "next/link";
import { ContactModal } from "./contactModal";

export const WelcomeItem = () => {
  return (
    <div className="hero min-h-screen min-w-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="lg:text-5xl md:text-5xl sm:text-4xl font-bold">
            Velkommen til Forskerassistenten!
          </h1>
          <p className="py-6">
            Vi ønsker å gjøre forskningsarbeidet enklere ved å utføre enkle og
            tidsbesparende arbeidsoppgaver for forskere og studenter.
          </p>
          <Link href="services">
            <button className="btn btn-primary">Se våre tjenester</button>
          </Link>
          <ContactModal/>
        </div>
      </div>
    </div>
  );
};
