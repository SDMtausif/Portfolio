import React from "react";
import { motion } from "motion/react";

const data = [
  {
    link:"url",
    titles:"Experment 01",
    name:"loading......"
  },
  {
    link:"url",
    titles:"Experment 02",
    name:"loading......",
  },
  {
    link:"url",
    titles:"Experment 03",
    name:"loading......",
  },
  {
    link:"url",
    titles:"Experment 04",
    name:"loading......",
  }
]
const Experiment = () => {
  return (
    <section id="experiment"   className="h-screen bg-[#d8d8e17e] py-32">
       <h1 className='text-center  text-[12px] text-[#b19386] md-[25px] font-league' >EXPERIMENTS & OPEN SOURCE</h1>
       <p className='text-center text-[#4a4a4a] mb-[70px] text-[22px]'>Web is fun</p>
       <div className='flex justify-center relative  '>
     
       <motion.div  initial={{ y: 0 }}
          whileInView={{ y: "-100%", opacity:0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#1a1d75] z-[50]"> 
       </motion.div>
  
       <motion.div  initial={{ y: 0 }}
         whileInView={{ y: "-100%", opacity:0 }}
         viewport={{ once: true }}
         transition={{ duration: 2, ease: "easeInOut" }}
         className="absolute inset-0 bg-[#ff3636]  z-[40]" > 
       </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {data.map((item, key) => (
    <a key={key} href={item.link} className="relative block group bg-gray-200 p-10 overflow-hidden">
      {/* Sliding Overlay */}
      <div className="absolute inset-0 bg-[#df7e69] opacity-20 transform -translate-x-full group-hover:translate-x-0 
          transition-transform duration-700 ease-out z-10"></div>
      <div className="relative z-20 text-center">
         <img src="" className="w-[240px] h-[240px] mx-auto rounded-full object-cover transition-transform duration-300 
          group-hover:scale-105"/>
         <h6 className="text-gray-700 font-bold text-[12px] mt-6">{item.titles}</h6>
         <p className="text-[#1c1d25] text-[18px] font-semibold mt-2"> {item.name}</p>
        </div>
      </a>
      ))}
    </div>    
    </div>
    </section>
  );
};

export default Experiment;
