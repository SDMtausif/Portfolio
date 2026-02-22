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
    <section id="experiment" className="min-h-screen px-4 py-12 md:py-32 bg-[#d8d8e17e] w-full mx-auto">
       <h1 className='text-center  text-sm md:text-xl text-[#b19386]  font-league'>EXPERIMENTS & OPEN SOURCE</h1>
       <p className='text-center text-sm md:text-xl text-[#4a4a4a] mb-4 md:mb-16 text-[22px]'>Web is fun</p>
       <div className='flex justify-center relative'>
     
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

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {data.map((item, key) => (
     <a key={key} href={item.link} className="relative block group bg-gray-200 p-10 overflow-hidden">
      {/* Sliding Overlay */}
      <div className="absolute inset-0 bg-[#df7e69] opacity-20 transform -translate-x-full group-hover:translate-x-0 
          transition-transform duration-700 ease-out z-10"></div>
      <div className="relative z-20 text-center">
         <img src="" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full object-cover transition-transform duration-300 
          group-hover:scale-105"/>
         <h6 className="text-gray-700 font-bold text-sm md:text-xl mt-2 md:mt-6">{item.titles}</h6>
         <p className="text-[#1c1d25] font-semibold text-sm md:text-xl mt-1 md:mt-2"> {item.name}</p>
        </div>
       </a>
      ))}
    </div>    
    </div>
    </section>
  );
};

export default Experiment;
