import React, { useEffect, useRef, useState } from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Container from '../Layout/Container';
import Navbar from '../Component/Navbar';
import Contact from './Contact';
import AboutMe from './AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "motion/react";
import Agence from '../assets/Agence.png'
import QuriarBox from '../assets/QuriarBox.png'
import Architects from '../assets/WebOfArchitects.png'
import Tilt from 'react-parallax-tilt';
import arch from '../assets/arch.png'
import purpleangle from '../assets/purpleangle.png'
import redRight from '../assets/redRight.png'
import RedTriangle from '../assets/RedTriangle.png'
import skyangle from '../assets/skyangle.png'
import yellowtop from '../assets/yellowtop.png'
import yellowtriangle from '../assets/yellowtriangle.png'
import skycircle from '../assets/skycircle.png'
import greencircle from '../assets/greencircle.png'
import art from '../assets/art.png'
const Home = () => {


  const casestudies = useRef();
  const experiment = useRef();
  const [showContact, setShowContact] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#casestudies') casestudies.current?.scrollIntoView({ behavior: 'smooth' });
    else if (hash === '#experiment') experiment.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowContact(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  return (
  <>
   <section className="bg-[#1c1c25fa]">
  <Container>
      <Navbar
        refs={{ casestudies, experiment }}
        onContactClick={() => setShowContact(true)}
      />
 
  </Container>
   <div className='relative h-screen px-12 flex justify-between w-[100%] z-0'>
    <div className='absolute w-[90%] left-[5%]'>
    <Tilt
    glareEnable={false}
    tiltMaxAngleX={5}
    tiltMaxAngleY={5}
    className=" h-screen  relative "
    >
    <div className=' absolute top-[5%]  right-0'><img src={arch} className='w-6 h-6' /></div>
    <div className=' absolute top-[10%] left-[0%]'><img src={yellowtriangle} className='w-6 h-6' /></div>
    <div className=' absolute bottom-[6%] left-[30%]'><img src={yellowtop} className='w-6 h-6' /></div>
    <div className=' absolute top-[60%] left-[22%]'><img src={greencircle} className='w-6 h-6' /></div>
    <div className=' absolute bottom-[20%] left-[82%]'><img src={art} className='w-6 h-6' /></div>
    <div className=' absolute top-[60%] right-[35%]'><img src={skycircle} className='w-6 h-6' /></div>
    <div className=' absolute top-[20%] left-[55%]'><img src={skyangle} className='w-6 h-6' /></div>
    <div className=' absolute top-[28%] left-[80%]'><img src={RedTriangle} className='w-6 h-6' /></div>
    <div className=' absolute top-[80%] left-[2%]'><img src={redRight} className='w-6 h-6' /></div>
    <div className=' absolute top-[0%] left-[30%]'><img src={purpleangle} className='w-6 h-6' /></div></Tilt>
    </div>
  <div className='pl-[410px] pt-[290px] z-0'>{/*left block */}
    <h1 className="text-[50px] leading-[60px] font-medium font-league text-white"> SDM Tausif</h1>
    <p className="text-4 leading-6 text-white font-normal pb-[40px]">Interactive Front-end Developer</p>
    <div className='relative group'> 
    <button onClick={() => setAboutMe(true)}
     className="font-league bg-[linear-gradient(90deg,rgba(255,42,0,0.97)_0%,rgba(255,217,105,1)_100%)] text-white px-[26px] py-[14px] tracking-[3.5px] group-hover:scale-[1.01] ">
       AboutMe 
       </button>
   <HiOutlineArrowLongRight size={42} className='absolute  top-[10%] left-[50%] font-normal text-white group-hover:left-[55%]' /> 
    </div>
  </div>

  {/* Right block */}
  <div className="flex items-center gap-8 flex-col text-6xl text-gray-200 z-0 pt-[190px] ">
    <a href="/"  rel="noopener noreferrer"> <FaTwitter className='hover:text-white hover:scale-[1.1] transition duration-300 ' /></a>
    <a href="https://www.linkedin.com/in/sdm-tausif-24450a296/"  rel="noopener noreferrer"> <FaLinkedinIn className='hover:text-white hover:scale-[1.1] transition duration-300 ' /></a>
    <a href="https://github.com/SDMtausif"  rel="noopener noreferrer"><FaGithub className='hover:text-white hover:scale-[1.1] transition duration-300 ' /></a>
    <a href="https://dribbble.com/sdm-tausif"  rel="noopener noreferrer"><IoLogoDribbble className='hover:text-white hover:scale-[1.1] transition duration-300 ' /></a>
    
  </div>  
      {aboutMe && (
  <div className="fixed inset-0 bg-[#1c1c25fa]/60 flex items-center justify-center z-50"> 
    <div className="relative"> 
      <motion.button
        className="absolute top-2 right-8 text-gray-500 hover:text-white text-[30px]" 
        onClick={() => setAboutMe(false)} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ✕
      </motion.button> 
      {/* ✅ Add this line to render the AboutMe content */}
      <AboutMe />
    </div>
  </div>
)}
      
     </div>
    








   </section>







































   <section className='py-[100px]'  ref={casestudies}>
    <Container>
      <div className='flex flex-col gap-20 '>
       <div>
        <h1 className='text-center leading-[18px] text-3 text-[#b19386] font-libre font-normal'>CASE STUDIES</h1>
        <p className='text-center leading-[32px] text-[32px] text-[#4a4a4a] font-league font-bold pt-[20px]'>Latest Work</p>
       </div>
<div>
<a href="https://sdmtausif.github.io/Agence/"
    rel="noopener noreferrer">
 <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"
  className="bg-white text-black  rounded min-w-[940px] min-h-[499px]  bg-cover overflow-hidden text-center ml-[10%]
   shadow-[20px_20px_60px_rgba(0,0,0,0.3)]"
   style={{backgroundImage:`url(${Agence})`}}>
</div>
</a>
</div>
<div>  
  <a href="https://sdmtausif.github.io/Portfolio01/">
  <div
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    data-aos-delay="200"
    className="bg-white text-black  rounded min-w-[940px] min-h-[499px]  bg-cover overflow-hidden text-center mr-[10%]
    shadow-[20px_20px_60px_rgba(0,0,0,0.3)]"
    style={{backgroundImage:`url(${QuriarBox})`}}>
  </div>
  </a>
</div>
<div>
   <a href="https://sdmtausif.github.io/Agence/" >
  <div
    data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    data-aos-delay="400"
    className="bg-white text-black  rounded min-w-[940px] min-h-[499px]  bg-center bg-cover overflow-hidden text-center ml-[10%]
    shadow-[20px_20px_60px_rgba(0,0,0,0.3)]"
    style={{backgroundImage:`url(${Architects})`}}
  > 
  </div>
  </a>
</div>
   </div>
    </Container>
   </section>

    <section
        ref={experiment}
        className="h-screen bg-[#d8d8e17e] py-[100px] ">
     <h1 className='text-center  text-[12px] text-[#b19386] md-[25px] font-league' >EXPERIMENTS & OPEN SOURCE</h1>
     <p className='text-center text-[#4a4a4a] mb-[70px] text-[22px]'>Web is fun</p>
  
     <div className='flex justify-center relative  '>

     <motion.div

       initial={{ y: 0 }}
  whileInView={{ y: "-100%", opacity:0 }}
  viewport={{ once: true }}
  transition={{ duration: 2.5, ease: "easeInOut" }}
  className="absolute inset-0 bg-[#1a1d75] z-[50]"
     > 

     </motion.div>
  
     <motion.div

       initial={{ y: 0 }}
  whileInView={{ y: "-100%", opacity:0 }}
  viewport={{ once: true }}
  transition={{ duration: 2, ease: "easeInOut" }}
  className="absolute inset-0 bg-[#ff3636]  z-[60]"
     > 

     </motion.div>

<div className='flex flex-wrap justify-center w-full'>
<div className='w-[25%] relative block group  bg-gray-100 px-[60px] pt-[60px] pb-[60px] overflow-hidden'>
<a href="https://your-project-url.com">
  <div
    className="absolute inset-0 bg-[#df7e69] opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-10"
  />
  <div className="relative z-20">
    <div className="flex justify-center">
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.IM24T5ZQAlGULeBZdllTxgHaHu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Temperature Calculator"
        className="w-[236px] h-[236px] rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="pt-[40px]">
      <h6 className="text-gray-700 font-bold text-[12px] font-league">-TITLE</h6>
      <p className="text-[#1c1d25] text-[18px] font-semibold font-libre">Temperature Calculator</p>
    </div>
  </div>
</a>
</div>
<div className='w-[25%] relative block group  bg-gray-100 px-[60px] pt-[60px] pb-[60px] overflow-hidden'>
<a href="https://ak.picdn.net/shutterstock/videos/1064188900/thumb/1.jpg">
  <div
    className="absolute inset-0 bg-[#df7e69] opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-10"
  />
  <div className="relative z-20">
    <div className="flex justify-center">
      <img
        src="https://ak.picdn.net/shutterstock/videos/1064188900/thumb/1.jpg"
        alt="Temperature Calculator"
        className="w-[236px] h-[236px] rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="pt-[40px]">
      <h6 className="text-gray-700 font-bold text-[12px] font-league">-TITLE</h6>
      <p className="text-[#1c1d25] text-[18px] font-semibold font-libre">Sonic-Tap</p>
    </div>
  </div>
</a>
</div>
<div className='w-[25%] relative block group  bg-gray-100 px-[60px] pt-[60px] pb-[60px] overflow-hidden'>
<a href="https://your-project-url.com">
  <div
    className="absolute inset-0 bg-[#df7e69] opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-10"
  />
  <div className="relative z-20">
    <div className="flex justify-center">
      <img
        src="https://global-uploads.webflow.com/618fa90c201104b94458e1fb/64feb619fc785789d5479c9c_react-practical-exercises-%26-coding-challenges_OG-Image.jpg"
        alt="Temperature Calculator"
        className="w-[236px] h-[236px] rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="pt-[40px]">
      <h6 className="text-gray-700 font-bold text-[12px] font-league">-TITLE</h6>
      <p className="text-[#1c1d25] text-[18px] font-semibold font-libre">Promise challenge</p>
    </div>
  </div>
</a>
</div>
<div className='w-[25%] relative block group  bg-gray-100 px-[60px] pt-[60px] pb-[60px] overflow-hidden'>
<a href="https://your-project-url.com" >
  <div
    className="absolute inset-0 bg-[#df7e69] opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-10"
  />
  <div className="relative z-20">
    <div className="flex justify-center">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.FmxRGV1oBE8KcjhfGwEbzQHaGS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Temperature Calculator"
        className="w-[236px] h-[236px] rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="pt-[40px] ">
      <h6 className="text-gray-700 font-bold text-[12px] font-league">-TITLE</h6>
      <p className="text-[#1c1d25] text-[18px] font-semibold font-libre">CallBackHell</p>
    </div>
  </div>
</a>
</div>
    </div>
</div>


     <div className='bg-[#1c1c25fa] pt-[160px] pb-[140px]'>
        <h1 className='text-center text-white mb-[26px] font-league text-[60px]'>SDM</h1>
        <ul className='flex justify-center gap-7 text-white mb-[20px]'>
          <li><a href="/">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/sdm-tausif-24450a296/" >Linkedin</a></li>
          <li><a href="https://github.com/SDMtausif">Github</a></li>
          <li><a href="/">Codepen</a></li>
        </ul>
        <p className='text-center text-white font-league font-3'>☕ SDM Tausif +88 01581859700-contact</p>
     </div>
      


    </section>

    {showContact && (
        <div className="fixed inset-0 bg-[#1c1c25fa]/60 flex items-center justify-center z-50">
          <div className="relative">
           <motion.button  onClick={() => setShowContact(false)}
          
            className="absolute top-2 right-8  text-gray-500 hover:text-white text-[30px] " 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            >✕ </motion.button> 
            <Contact />
          </div>
        </div>
    )}
    </>
  );
};

export default Home;

