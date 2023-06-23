import { useState } from "react";
import logo from "../images/nav-logo.png";
import { Donate } from "./Donate";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <nav className="w-full flex justify-between px-4 py-4 items-center">
      <img src={logo} alt="" className="h-14 sm:mr-96" />
      <div className="hidden sm:flex w-full justify-between items-center max-w-xl font-medium hover:cursor-pointer">
        <button
          type="button"
          className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 focus:outline-none"
          onClick={() => setModal(true)}
        >
          Donate
        </button>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>OUR WORK</p>
        <p>CONTACT US</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 sm:hidden"
      >
        <path
          fill-rule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clip-rule="evenodd"
        />
      </svg>
      {modal && <Donate modal={modal} setModal={setModal} />}
    </nav>
  );
};