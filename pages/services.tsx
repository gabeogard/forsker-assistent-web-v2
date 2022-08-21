import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceCalculator from "../components/PriceCalculator";

const Services: NextPage = () => {
  return (
    <div>
      <title>Tjenester</title>
      <Navbar />
      <div className="hero my-5 min-h-screen bg-base-200 services-main">
        <div className="hero-content text-center">
          <div className="services max-w-md">
          <div className="services-section">
          <h1>Transkribering</h1>
            <p>
              Vi transkriberer forskningsintervjuer for både studenter og
              forskere. Dette kan være personlige intervjuer eller
              gruppeintervjuer.
            </p>
            <br></br>
            <p>
              Hver kunde og hvert oppdrag har sine ulikheter, og prisene kan
              derfor variere noe. Det gjelder f.eks dersom:
            </p>
            <ul className="service-list-text">
              <li>- Dere vil ha jobben gjort på kort varsel</li>
              <li>- Dersom det er dårlig lydkvalitet</li>
              <li>- Dersom lydfilen er på engelsk</li>
              <li>
                - Dersom dere har noen spesielle behov når det gjelder tjenesten
              </li>
            </ul>
            <br></br>
          </div>
          <PriceCalculator/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
