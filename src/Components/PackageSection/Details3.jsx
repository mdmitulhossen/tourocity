import React from 'react';
import img1 from "../../assets/Destination/g1.png"
import img2 from "../../assets/Destination/g2.png"
import img3 from "../../assets/Destination/g3.png"
import img4 from "../../assets/Destination/g4.png"
import img5 from "../../assets/Destination/g5.png"
import img6 from "../../assets/Destination/g6.png"


const Details3 = () => {
  
  return (
    <div className='mt-10'>
           <div className='space-y-4'>
            <div className='w-full flex justify-between'>
              <img src={img1} className='w-[49%] md:h-[250px] rounded-lg' alt="" />
              <img src={img2} className='w-[49%] md:h-[250px] rounded-lg' alt="" />
            </div>
            <div>
              <img src={img3} className='w-full md:h-[300px] rounded-lg' alt="" />
            </div>
           </div>

           <div className='space-y-4 mt-3'>
            <div className='w-full flex justify-between'>
              <img src={img1} className='w-[49%] md:h-[250px] rounded-lg' alt="" />
              <img src={img2} className='w-[49%] md:h-[250px] rounded-lg' alt="" />
            </div>
            <div>
              <img src={img3} className='w-full md:h-[300px] rounded-lg' alt="" />
            </div>
           </div>
    </div>
  );
};

export default Details3;
