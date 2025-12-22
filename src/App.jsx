import React from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route,} from "react-router";
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';


const App = () => {
  return (
 <>   
  <Routes>
      <Route path="/" element={<Home />} />  {/* Here Home and Contact both are indipendent page */}
      <Route path="/contact" element={<Contact />} /> 
      <Route path='/aboutme' element={<AboutMe/>} />
  </Routes> 
 </>
  )
}

export default App