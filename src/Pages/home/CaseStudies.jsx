import React from "react";
import Container from "../../Layout/Container";
import Agence from "../../assets/Agence.png";
import QuriarBox from "../../assets/QuriarBox.png";
import Architects from "../../assets/WebOfArchitects.png";

const CaseStudies = () => {
  return (
    <section id="casestudies" className="py-[100px] bg-[#f8f8f8]">
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
  );
};

export default CaseStudies;
