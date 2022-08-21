import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <title>Forskerassistenten</title>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Velkommen til Forskerassistenten</h1>
            <br></br>
            <p className="text-2xl md:text-md">Forskerassistenten ønsker å gjøre forskningsarbeidet enklere ved å utføre enkle og tidsbesparende arbeidsoppgaver for forskere og studenter.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
