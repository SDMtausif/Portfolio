import React from "react";
import { motion } from "motion/react";

const Experiment = () => {
  return (
    <section
      id="experiment"   className="h-screen bg-[#d8d8e17e] py-[100px] "
    >
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
  className="absolute inset-0 bg-[#ff3636]  z-[40]"
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

    </section>
  );
};

export default Experiment;
