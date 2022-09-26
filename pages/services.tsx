import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavMenu } from "../components/NavMenu";
import PriceCalculator from "../components/PriceCalculator";
import { ServiceSection } from "../components/ServiceSection";

const Services: NextPage = () => {
  return (
    <div className="bg-base-100 drawer">
      <title>Tjenester</title>
      <div className="drawer-content h-900">
        <NavMenu/>
        <ServiceSection/>
        <meta name="description" content="Vi tilbyr transkribering av intervjuer for forskere og studenter."/>
      </div>
    </div>
  );
};

export default Services;
