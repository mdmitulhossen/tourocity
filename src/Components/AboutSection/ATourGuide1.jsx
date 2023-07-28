import React from 'react';
import AboutSGuide from '../Card/AboutSGuide';
import img1 from '../../assets/about/guide/guide-md4.png';
import img2 from '../../assets/about/guide/guide-md5.png';
import img3 from '../../assets/about/guide/guide-md6.png';

const ATourGuide1 = () => {
    return (
        <div className='text-center mt-20'>
            <p className='text-4xl font-bold mb-12'>Tour Guide</p>
            <div className='w-full flex justify-center'>
            <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-around justify-center items-center space-y-4 lg:w-[80%]'>
                <AboutSGuide name="Azad" img={img1}/> 
                <AboutSGuide name="Fahim" img={img2}/> 
                <AboutSGuide name="Usama" img={img3}/> 
           </div>
           </div>
        </div>
    );
};

export default ATourGuide1;