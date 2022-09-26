import Image from "next/image";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import Link from "next/link";
export const NavMenu = () => {
    <Image
                src={magnifyingGlass}
                width={30}
                height={30}
                alt={"logo"}
              />
    return(
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">Hjem</Link></li>
        <li><Link href="/services">Tjenester</Link></li>
        <li><Link href="/about">Om oss</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case sm:text-l lg:text-xl md:text-xl">
    <Image
                src={magnifyingGlass}
                width={30}
                height={30}
                alt={"logo"}
              /> 
        Forskerassistenten</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link href="/">Hjem</Link></li>
      <li><Link href="/services">Tjenester</Link></li>
      <li><Link href="/about">Om oss</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="lg:btn md:btn sm:btn-sm">Kontakt oss</a>
  </div>
</div>
    );
}

