// import React from 'react'
// import { motion } from "motion/react"
// import { SiReact, SiCssdesignawards } from "react-icons/si";
// import { FaCss3Alt,  FaJs } from "react-icons/fa";


// const icons = [
//   { Icon: SiReact, color: 'text-sky-500', label: 'React.js' },
//   { Icon: SiCssdesignawards, color: 'text-blue-500', label: 'UX/UI' },
//   { Icon: FaCss3Alt, color: 'text-orange-500', label: 'is Fun' },
//   { Icon: FaJs, color: 'text-yellow-400', label: 'Semicolons' },
// ]
// const AboutLeft = () => {
//   return (
//     <motion.div
//    initial={{ y: -400, opacity: 0 }}
//    animate={{ y: 0, opacity: 1 }}
//    transition={{ duration: 1, ease: "easeOut" }}
//    className='bg-[#e3e3e4] pt-[120px] pb-[280px] px-[80px] '
//    >
    
//     <h1 className='text-[rgb(28,29,27)] font-league text-[23px] leading-[30px] font-bold '>About.me</h1>
//     <span className=' font-normal text-[14px] leading-[18px] font-league text-[rgb(28,29,37)] '>Interactive Front-end Developer</span>
//     <p className='max-w-[320px] font-normal text-[18px] leading-[22px] font-league text-[rgb(28,29,37)] mt-[30px]'>
//       I'm SDM Tausif a 21-year-old Front-end Developer.
//       I break things. Then i fix them. And now I break them better.
//       I like to resolve design problems, create smart user interface and imagine useful interaction, 
//       developing rich web experiences & web applications. When not working or futzing around with code,
//       I study how to escape from University. Actually for hire.
//     </p>
//    <div className='flex gap-6 pt-[80px]'>
        
//          {icons.map(({ Icon, color, label }, index) => (
//         <motion.div
//           key={index}
//           className="flex flex-col items-center group"
//           initial="rest"
//           whileHover="hover"
//           animate="rest"
//         >
//           <Icon
//             size={66}
//             className={`text-gray-800 group-hover:${color} transition-colors duration-300`}
//           />
//           <motion.span
//             className={`mt-1 text-sm text-black font-bold font-league`}
//             variants={{
//               rest: { y: 20, opacity: 0 },
//               hover: { y: 0, opacity: 1 },
//             }}
//             transition={{ duration: 0.4, ease: 'easeOut' }}
//           >
//             {label}
//           </motion.span>
//         </motion.div>
//       ))}    
//    </div>
//     </motion.div>
//   )
// }

// export default AboutLeft



import React from 'react';
import { motion } from "motion/react";
import { SiReact, SiCssdesignawards } from "react-icons/si";
import { FaCss3Alt, FaJs } from "react-icons/fa";

const AboutLeft = () => {
  return (
    <motion.div
      initial={{ y: -400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#e3e3e4] pt-[120px] pb-[160px] px-[80px]"
    >
      <h1 className="text-[rgb(28,29,27)] font-league text-[23px] leading-[30px] font-bold">About.me</h1>
      <span className="font-normal text-[14px] leading-[18px] font-league text-[rgb(28,29,37)]">Interactive Front-end Developer</span>
      <p className="max-w-[320px] font-normal text-[18px] leading-[22px] font-league text-[rgb(28,29,37)] mt-[30px]">
        I'm SDM Tausif, a 21-year-old Front-end Developer.
        I break things. Then I fix them. And now I break them better.
        I like to resolve design problems, create smart user interfaces and imagine useful interactions, 
        developing rich web experiences & web applications. When not working or futzing around with code,
        I study how to escape from University. Actually for hire.
      </p>

      <div className="flex gap-6 pt-[80px]">
        {/* React.js */}
        <motion.div className="flex flex-col items-center group" initial="rest" whileHover="hover" animate="rest">
          <SiReact size={66} className="text-gray-800 group-hover:text-sky-500 transition-colors duration-300" />
          <motion.span
            className="mt-1 text-sm text-black font-bold font-league group-hover:text-sky-500 transition-colors duration-300"
            variants={{ rest: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            React.js
          </motion.span>
        </motion.div>

        {/* UX/UI */}
        <motion.div className="flex flex-col items-center group" initial="rest" whileHover="hover" animate="rest">
          <SiCssdesignawards size={66} className="text-gray-800 group-hover:text-blue-500 transition-colors duration-300" />
          <motion.span
            className="mt-1 text-sm text-black font-bold font-league group-hover:text-blue-500 transition-colors duration-300"
            variants={{ rest: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            UX/UI
          </motion.span>
        </motion.div>

        {/* is Fun */}
        <motion.div className="flex flex-col items-center group" initial="rest" whileHover="hover" animate="rest">
          <FaCss3Alt size={66} className="text-gray-800 group-hover:text-orange-500 transition-colors duration-300" />
          <motion.span
            className="mt-1 text-sm text-black font-bold font-league group-hover:text-orange-500 transition-colors duration-300"
            variants={{ rest: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            is Fun
          </motion.span>
        </motion.div>

        {/* Semicolons */}
        <motion.div className="flex flex-col items-center group" initial="rest" whileHover="hover" animate="rest">
          <FaJs size={66} className="text-gray-800 group-hover:text-yellow-500 transition-colors duration-300" />
          <motion.span
            className="mt-1 text-sm text-black font-bold font-league group-hover:text-yellow-500 transition-colors duration-300"
            variants={{ rest: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Semicolons
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutLeft;
