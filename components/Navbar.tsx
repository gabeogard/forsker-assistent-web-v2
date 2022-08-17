import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { useModal } from "../hooks/useModal";
import { Modal } from "./modal";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";

const MENU_LIST = [
  { text: "Hjem", href: "/" },
  { text: "Om Oss", href: "/about" },
  { text: "Tjenester", href: "/services" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { isShown, toggle } = useModal();

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Forskerassistenten</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <ContactButton/>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
