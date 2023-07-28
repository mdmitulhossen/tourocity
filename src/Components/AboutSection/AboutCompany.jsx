import React from 'react';
import "../../Css/aboutsection.css";
import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import img1 from "../../assets/about/about-g2.png"
import img2 from "../../assets/about/about-g1.png"
import img3 from "../../assets/about/about-g3.png"
import { ourCompany } from '../../ExtraData/ExtraData';

const AboutCompany = () => {
  const [isOpen, setOpen] = useState(false);
  const [OurCompanyData, setOurCompanyData] = useState(ourCompany[0]);

  
  
   // Add active class to the current button (highlight it)
 
   const activeBtn=(key)=>{
   
    const btns=document.getElementById(key)
    setOurCompanyData(ourCompany[key-1])
  document.querySelector('.exActive').classList.remove('exActive')
  btns.classList.add('exActive')
   }

  
  
 
 


  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[90%] lg:flex">
           <div className='lg:w-[50%]'>
          <div className="w-full flex justify-center">
            <div className="w-full relative sm:w-[430px] sm:h-[225px]">
              <img src={img1} className="w-full h-full" alt="" />
              <div className="absolute bg-[#fa483858]  w-full h-full top-0 rounded-lg flex justify-center items-center">
                <p
                  className="text-8xl cursor-pointer hover:text-[130px] duration-300"
                  onClick={() => setOpen(true)}
                >
                  <ion-icon name="play-circle"></ion-icon>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-3 sm:flex sm:justify-center">
            <img
              src={img2}
              className="w-full mb-3 sm:w-[245px] sm:h-[225px] sm:mr-5"
              alt=""
            />
            <img
              src={img3}
              className="w-full sm:w-[245px] sm:h-[225px]"
              alt=""
            />
          </div>
          </div>

          {/* ====About company and offer ==== */}
          <div className="mt-12 text-center lg:w-[50%] lg:space-x-3">
            <p className="text-3xl sm:text-5xl font-bold text-black ">
              About Our Company{" "}
              <span className="text-[#fa4738]"> & What We Are</span> Offer
            </p>
            <div className='w-full mt-10 sm:flex'>
              <div className='w-full sm:w-[50%] flex justify-center sm:justify-between'>
                <button
                  id="1"
                  className="exBtn w-[11rem] h-[7.18rem]  rounded-md text-xl font-medium p-2 outline-0 exActive"
                  onClick={() => {
                    activeBtn("1");
                  }}
                >
                  <span className="block text-4xl font-bold ">10</span>Years
                  Experience
                </button>

                <button
                  id="2"
                  className="exBtn w-[11rem] h-[7.18rem]  rounded-md text-xl font-medium p-2 outline-0 "
                  onClick={() => {
                    activeBtn("2");
                  }}
                >
                  <span className="block text-4xl font-bold">100+</span>Tour Guide
                </button>
              </div>
              <div className='w-full flex justify-center sm:w-[50%]'>
                <button
                  id="3"
                  className="exBtn w-[11rem] h-[7.18rem]  rounded-md text-xl font-medium p-2 outline-0 "
                  onClick={() => {
                    activeBtn("3");
                  }}
                >
                  <span className="block text-4xl font-bold ">500+</span>Traveller Connect
                </button>
              </div>
            </div>
            <p className='text-[#666] font-light text-lg mt-5 sm:mt-10'>{OurCompanyData}</p>
          </div>
        </div>
      </div>

      {/* ====video add==== */}
      <>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="3SsK-cxlj_w"
          onClose={() => setOpen(false)}
        />
      </>
    </>
  );
};

export default AboutCompany;