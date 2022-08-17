import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <title>Forskerassistenten</title>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Velkommen til forskerassistenten
            </h1>
            <p className="py-6">
              Vi ønsker å gjøre forskningsarbeid enklere ved å utføre enkle og
              tidsbesparende arbeidsoppgaver for forskere og studenter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
