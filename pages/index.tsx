import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavMenu } from "../components/NavMenu";
import { WelcomeItem } from "../components/WelcomeItem";

const Home: NextPage = () => {
  return (
    <div className="bg-base-100 drawer">
      <div className="drawer-content">
        <NavMenu />
        <WelcomeItem />
      </div>
    </div>
  );
};

export default Home;
