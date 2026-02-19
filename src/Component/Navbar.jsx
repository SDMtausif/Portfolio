import React from "react";
import Container from "../Layout/Container";
import { FaCircleHalfStroke } from "react-icons/fa6";

const Navbar = ({ onContactClick }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="py-0 px-12 fixed top-0 w-full bg-[#1c1c25fa] z-[100]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-[#B0B2c3] text-[30px] font-bold cursor-pointer  hover:text-white transition">
            SDM
          </div>
          <ul className="flex gap-8 text-[#B0B2c3] text-[16px] items-center">
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("casestudies")}
            >
              Case Studies
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("experiment")}
            >
              Experiment
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={onContactClick}
            >
              Contact
            </li>
            <li>
              <FaCircleHalfStroke />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
