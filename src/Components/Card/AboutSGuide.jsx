import React from 'react';
import img1 from '../../assets/about/guide/guide-md4.png';
import img2 from '../../assets/about/guide/guide-md5.png';
import img3 from '../../assets/about/guide/guide-md6.png';

const AboutSGuide = ({name,img}) => {
    return (
        <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[18.75rem]'>
            <div className='w-full  shadow-2xl rounded-lg relative group'>
                <div className='absolute z-10 flex flex-col group-hover:right-5 space-y-4 right-[-10px] opacity-0 group-hover:opacity-100 duration-500 top-5'>
                            <button className='px-2 pt-1 rounded-lg  bg-white text-center text-black hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-instagram"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-black hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-facebook"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-black hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-whatsapp"></ion-icon></button>
                </div>
                <div className='w-full relative'>
                    <img src={img} className='w-full' alt="" />
                    <button className='absolute top-[80%] left-6 btn-all rounded-full py-1 px-5 text-md'>Connect</button>
                </div>
                <div className='text-center my-3'>
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className='text-[#666] font-medium'>Tour Guide</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSGuide;