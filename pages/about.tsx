import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About: NextPage = () => {
  return (
    <div>
      <title>Om Oss</title>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">
              Om oss
            </h1>
            <br></br>
            <p className="text-2xl md:text-md">
            Forskerassistenten drives av forskere som selv ser behovet for en forskerassistent når tiden ikke strekker til. Vi har flere års erfaring med å transkribere og tolke forskningsdata, og vet også viktigheten av korrekt og lovmessig datahåndtering.
            </p>
            <br></br>
            <h1 className="text-3xl">
              Anita Øgård:
            </h1>
            <p className="text-1xl md:text-md">
            Universitetslektor/Ph.D stipendiat, Universitetet i Agder
            </p>
            <h1 className="text-3xl">
              Monika Øgård:
            </h1>
            <p className="text-1xl md:text-md">
            Universitetslektor/Ph.D stipendiat, Universitetet i Agder
            </p>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
