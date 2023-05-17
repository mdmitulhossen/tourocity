import React from 'react';
import img1 from "../../assets/Top Destination/topD1.jpg";
import img2 from "../../assets/Top Destination/topD2.jpg";
import img3 from "../../assets/Top Destination/topD3.jpg"
import img4 from "../../assets/Top Destination/topD4.jpg";
import img5 from "../../assets/Top Destination/topD5.jpg";
import img6 from '../../assets/Top Destination/topD6.jpeg'


import "../../Css/zoom.css"

const TopDestinate = () => {
    return (
        <div>
            <div>
                <div className='w-[95%]  md:w-[80%] lg:w-[60%] mx-auto mt-24 text-center'>
                    <h1 className='text-[40px] font-bold'>Top Destination</h1>
                    <p className='text-[#787878]'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum.</p>
                </div>

                {/* card */}

                <div className='flex justify-center w-full items-center mt-10'>
                    <div className='flex justify-center w-[100%] flex-wrap md:w-[750px] lg:w-[1150px]'>

                        <div className='w-[90%] relative cursor-pointer group/place overflow-hidden   sm:w-full sm:mr-0 sm:h-[340px] sm:mt-[30px] lg:mr-[30px]  lg:w-[260px] lg:h-[270px]'>
                            <img src={img1} className=' w-full hover:scale-125 duration-500 ease-in-out  h-full rounded-md' alt="" />
                            <p className='absolute top-[50px] md:top-[170px] left-3 font-bold text-3xl text-white'>London <span className='block opacity-0 duration-500 group-hover/place:opacity-100 text-2xl hover:text-[#fa4738]'>30 place</span></p>
                        </div>

                        <div className='w-[90%] cursor-pointer  group/place relative overflow-hidden mt-[30px]  sm:w-[360px] sm:mr-[30px] sm:mt-[30px] lg:mr-[30px]  lg:w-[260px] lg:h-[270px]'>
                            <img src={img2} className='w-full  hover:scale-125 duration-500 ease-in-out h-full rounded-md' alt="" />
                            <p className='absolute top-[50px] md:top-[170px] left-3 font-bold text-3xl text-white'>Paris <span className='block opacity-0 duration-500 group-hover/place:opacity-100 text-2xl hover:text-[#fa4738]'>35 place</span></p>
                        </div>

                        <div className='w-[90%] relative cursor-pointer group/place overflow-hidden mt-[30px] sm:w-[360px]  sm:mt-[30px]   lg:w-[550px] lg:h-[270px]'>
                            <img src={img3} className='w-full hover:scale-125 duration-500 ease-in-out h-full rounded-md' alt="" />
                            <p className='absolute top-[50px] md:top-[170px] left-3 font-bold text-3xl text-white'>Dubai <span className='block opacity-0 duration-500 group-hover/place:opacity-100 text-2xl hover:text-[#fa4738]'>25 place</span></p>
                        </div>

                        <div className='w-[90%] relative cursor-pointer group/place overflow-hidden mt-[30px] sm:w-[360px] sm:mr-[30px] sm:mt-[30px] lg:w-[550px] lg:h-[270px]'>
                            <img src={img4} className='w-full hover:scale-125 duration-500 ease-in-out h-full rounded-md' alt="" />
                            <p className='absolute top-[50px] md:top-[170px] left-3 font-bold text-3xl text-white'>Bangladesh <span className='block opacity-0 duration-500 group-hover/place:opacity-100 text-2xl hover:text-[#fa4738]'>20 place</span></p>

                        </div>

                        <div className='w-[90%] relative cursor-pointer group/place overflow-hidden mt-[30px] sm:w-[360px] sm:mr-[0px] sm:mt-[30px] lg:mr-[30px] lg:w-[260px] lg:h-[270px]'>
                            <img src={img5} className='w-full hover:scale-125 duration-500 ease-in-out h-full rounded-md' alt="" />
                            <p className='absolute top-[50px] md:top-[170px] left-3 font-bold text-3xl text-white'>Poland <span className='block opacity-0 duration-500 group-hover/place:opacity-100 text-2xl hover:text-[#fa4738]'>15 place</span></p>
                        </div>

                        <div className='w-[90%] relative cursor-pointer group/place overflow-hidden sm:w-full sm:mr-0 sm:h-[340px] mt-[30px] lg:w-[260px] lg:h-[270px]'>
                            <img src={img6} className='w-full hover:scale-125 duration-500 ease-in-out h-full rounded-md' alt="" />
                            <p className='absolute top-[50px] md:top-[170px] left-3 font-bold text-3xl text-white'>India <span className='block opacity-0 duration-500 group-hover/place:opacity-100 text-2xl hover:text-[#fa4738]'>45 place</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDestinate;