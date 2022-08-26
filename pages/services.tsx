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
      <div className="hero min-h-screen bg-base-200">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="service-textsection">
              <h1 className="text-2xl font-bold text-service">Transkribering</h1>
              <p className="text-service">Har du et intervju som er spilt inn på video eller lydopptaker, og ønsker å få det i skriftlig format?</p>
              <p className="text-service">Vi hjelper deg med transkripsjon av intervju, og kan levere tekstfilen i løpet av kort tid!</p>
              <p className="text-service">Vi transkriberer forskningsintervjuer for både studenter og forskere.</p>
              <p className="text-service">Dette kan være personlige intervjuer eller gruppeintervjuer. Forskerassistenten transkriberer på en grundig og strukturert måte. </p>
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
              <PriceCalculator/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

