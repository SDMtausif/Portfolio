import React, { useState } from 'react';
import { motion } from "motion/react";

const AboutRight = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or API logic here
    window.alert("Message sent!");
    // Optionally reset the form
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <motion.div className='bg-[#1c1c25fa] pt-[120px] pb-[160px] px-[80px]'
      initial={{ y: 400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      
      <h1 className='text-[#dadada] font-bold text-[23px] leading-[30px] font-league'>Let's talk</h1>
      <p className='text-[#dadada] font-normal text-[14px] leading-[22px] font-league'>New project, freelance, inquiry or even a coffee</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label className='block text-[#dadada] font-normal text-[18px] leading-[22px] font-league pt-3'>Name*</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border-b-2 outline-0 border-[#dadada] text-[#dadada] w-full py-2 px-1"
            required
          />      
        </div>

        <div>
          <label className='block text-[#dadada] font-normal text-[18px] leading-[22px] font-league pt-3'>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 outline-0 border-[#dadada] text-[#dadada] w-full px-1 py-2"
            required
          />
        </div>

        <div>
          <label className='block text-[#dadada] font-normal text-[18px] leading-[22px] font-league pt-3'>Message*</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 outline-0 border-[#dadada] text-[#dadada] w-full min-h-[80px] px-1 py-2"
            required
          />
        </div>
      
        <button type="submit" className="font-league bg-[linear-gradient(90deg,rgba(255,42,0,0.97)_0%,rgba(255,217,105,1)_100%)] text-white px-[26px] py-[14px] tracking-[3.5px] group-hover:scale-[1.01] mt-[60px]">
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default AboutRight;
