import React from 'react';
import "../../Css/footer.css"
import img1 from "../../assets/travel/travel.jpg"
import img2 from "../../assets/Top Destination/topD5.jpg";
import img3 from "../../assets/Top Destination/topD2.jpg";
import img4 from "../../assets/Top Destination/topD6.jpeg";
import img5 from "../../assets/Upcoming/up3.jpeg";
import img6 from "../../assets/Upcoming/up1.jpg"
import FQuickLinkSection from './FQuickLinkSection';

const Footer = ({section}) => {
  
    return (
        <div className='mt-28'>
            {/*======== Join section=========== */}
            <div className={`joinUs  relative opacity-70 `}>
                <div className='absolute z-50 flex flex-wrap justify-center md:justify-around w-full h-full items-center'>
                    <div className='w-[90%] md:w-[500px]'>
                        <p className='text-white font-bold text-4xl '>JOIN US FOR MORE UPDATE</p>
                        <p className='text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, dicta!
                        </p>
                    </div>
                    <div>
                        <button className='btn-all  z-50'>Join Now</button>
                    </div>
                </div>
            </div>

            {/*===== Important Link Section=====  */}
           <FQuickLinkSection/>
        </div>
    );
};

export default Footer;