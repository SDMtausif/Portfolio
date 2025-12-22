import React from 'react';
import Container from '../Layout/Container';
import { FaCircleHalfStroke } from "react-icons/fa6";
const Navbar = ({ refs, onContactClick }) => {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='py-1.5  px-12'>
      <Container>
        <div className='flex justify-between'>
          <div className='text-[#B0B2c3] text-[60px]'>SDM</div>
          <ul className='flex gap-8 text-[#B0B2c3] text-[16px] items-center'>
            <li onClick={() => scrollTo(refs.casestudies)}>Case Studies</li>
            <li onClick={() => scrollTo(refs.experiment)}>Experiment</li>
            <li onClick={onContactClick}>Contact</li>
            <li><FaCircleHalfStroke /></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
