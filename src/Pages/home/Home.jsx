import React, { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Container from '../../Layout/Container';
import Navbar from '../../Component/Navbar';
import Contact from '../Contact';
import AboutMe from '../Aboutme/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "motion/react";
import Tilt from 'react-parallax-tilt';

// Assets
import arch from '../../assets/arch.png';
import purpleangle from '../../assets/purpleangle.png';
import redRight from '../../assets/redRight.png';
import RedTriangle from '../../assets/RedTriangle.png';
import skyangle from '../../assets/skyangle.png';
import yellowtop from '../../assets/yellowtop.png';
import yellowtriangle from '../../assets/yellowtriangle.png';
import skycircle from '../../assets/skycircle.png';
import greencircle from '../../assets/greencircle.png';
import art from '../../assets/art.png';
import CaseStudies from './CaseStudies';
import Experiment from './Experiment';

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowContact(false);
        setAboutMe(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onContactClick={() => setShowContact(true)} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="bg-[#1c1c25fa] relative h-screen px-12 flex justify-between w-full overflow-hidden">
        {/* Tilted Background Elements */}
        <div className='absolute w-[90%] left-[5%] h-full'>
          <Tilt glareEnable={false} tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full relative">
            <img src={arch} className='absolute top-[5%] right-0 w-6 h-6' />
            <img src={yellowtriangle} className='absolute top-[10%] left-0 w-6 h-6' />
            <img src={yellowtop} className='absolute bottom-[6%] left-[30%] w-6 h-6' />
            <img src={greencircle} className='absolute top-[60%] left-[22%] w-6 h-6' />
            <img src={art} className='absolute bottom-[20%] left-[82%] w-6 h-6' />
            <img src={skycircle} className='absolute top-[60%] right-[35%] w-6 h-6' />
            <img src={skyangle} className='absolute top-[20%] left-[55%] w-6 h-6' />
            <img src={RedTriangle} className='absolute top-[28%] left-[80%] w-6 h-6' />
            <img src={redRight} className='absolute top-[80%] left-[2%] w-6 h-6' />
            <img src={purpleangle} className='absolute top-0 left-[30%] w-6 h-6' />
          </Tilt>
        </div>

        {/* Left Hero Content */}
        <div className='pl-[410px] pt-[290px] z-10'>
          <h1 className="text-[50px] leading-[60px] font-medium font-league text-white">SDM Tausif</h1>
          <p className="text-4 leading-6 text-white font-normal pb-[40px]">Interactive Front-end Developer</p>
          <div className='relative group'>
            <button
              onClick={() => setAboutMe(true)}
              className="font-league bg-[linear-gradient(90deg,rgba(255,42,0,0.97)_0%,rgba(255,217,105,1)_100%)] text-white px-[26px] py-[14px] tracking-[3.5px] group-hover:scale-[1.01]"
            >
              AboutMe
            </button>
            <HiOutlineArrowLongRight
              size={42}
              className='absolute top-[10%] left-[50%] text-white group-hover:left-[55%]'
            />
          </div>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-8 flex-col text-6xl text-gray-200 z-10 pt-[190px]">
          <a href="/"><FaTwitter className='hover:text-white hover:scale-[1.1] transition duration-300' /></a>
          <a href="https://www.linkedin.com/in/sdm-tausif-24450a296/"><FaLinkedinIn className='hover:text-white hover:scale-[1.1] transition duration-300' /></a>
          <a href="https://github.com/SDMtausif"><FaGithub className='hover:text-white hover:scale-[1.1] transition duration-300' /></a>
          <a href="https://dribbble.com/sdm-tausif"><IoLogoDribbble className='hover:text-white hover:scale-[1.1] transition duration-300' /></a>
        </div>

        {/* AboutMe Modal */}
        {aboutMe && (
          <div className="fixed inset-0 bg-[#1c1c25fa]/60 flex items-center justify-center z-50">
            <div className="relative">
              <motion.button
                className="absolute top-2 right-8 text-gray-500 hover:text-white text-[30px]"
                onClick={() => setAboutMe(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                ✕
              </motion.button>
              <AboutMe />
            </div>
          </div>
        )}
      </section>

      {/* Case Studies & Experiment */}
      <CaseStudies />
      <Experiment />

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-[#1c1c25fa]/60 flex items-center justify-center z-50">
          <div className="relative">
            <motion.button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-8 text-gray-500 hover:text-white text-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              ✕
            </motion.button>
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;


