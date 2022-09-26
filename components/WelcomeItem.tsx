import Link from "next/link";

export const WelcomeItem = () => {
  return (
    <div className="hero min-h-screen min-w-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Velkommen til Forskerassistenten!</h1>
          <p className="py-6">
            Vi ønsker å gjøre forskningsarbeidet enklere ved å utføre enkle og tidsbesparende arbeidsoppgaver for forskere og studenter.
          </p>
          <Link href="services"><button className="btn btn-primary">Se våre tjenester</button></Link>
        </div>
      </div>
    </div>
  );
};
