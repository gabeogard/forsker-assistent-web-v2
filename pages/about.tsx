import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AboutSection } from "../components/AboutSection";
import Footer from "../components/Footer";
import { NavMenu } from "../components/NavMenu";

const About: NextPage = () => {
  return (
    <div className="bg-base-100 drawer">
      <div className="drawer-content">
      <title>Om Oss</title>
      <NavMenu />
      <AboutSection/>
      </div>
    </div>
  );
};

export default About;
