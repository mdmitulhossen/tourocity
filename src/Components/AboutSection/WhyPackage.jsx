import React from 'react';
import img from "../../assets/about/about-image-group2.png"

const WhyPackage = () => {
    return (
        <div className='mt-12'>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-[90%] lg:w-[50%]'>
                    <div className='text-center'>
                       <p className="text-3xl sm:text-5xl font-bold text-black ">
                        Why Package Book 
                        <span className="text-[#fa4738]"> With Tourocity?</span> 
                        </p>
                    </div>
                   
                    <div className='w-full flex flex-col space-y-4 justify-center items-center mt-8'>
                        <div className='sm:w-[90%] border-2 border-[#fa483851] rounded-lg text-center sm:text-justify sm:flex sm:px-6 sm:justify-center group hover:border-0 hover:shadow-xl duration-300'>
                            <p className='text-4xl font-bold text-[#fa4738] mt-6 sm:w-[550px] group-hover:text-black duration-300'>500+<span className='text-xl font-medium block my-3'>Awesome Tour</span></p>

                            <p className='text-[#666] sm:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam officiis numquam voluptatem commodi explicabo similique vel nisi, eaque reiciendis? Molestiae laborum repudiandae deserunt, explicabo ullam maxime! Facilis, natus quod.</p>
                        </div>
                        <div className='sm:w-[90%] border-2 border-[#fa483851] rounded-lg text-center sm:text-justify sm:flex sm:px-6 sm:justify-center group hover:border-0 hover:shadow-xl duration-300'>
                            <p className='text-4xl font-bold text-[#fa4738] mt-6 sm:w-[550px] group-hover:text-black duration-300'>300+<span className='text-xl font-medium block my-3'>Destinations</span></p>

                            <p className='text-[#666] sm:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam officiis numquam voluptatem commodi explicabo similique vel nisi, eaque reiciendis? Molestiae laborum repudiandae deserunt, explicabo ullam maxime! Facilis, natus quod.</p>
                        </div>
                        <div className='sm:w-[90%] border-2 border-[#fa483851] rounded-lg text-center sm:text-justify sm:flex sm:px-6 sm:justify-center group hover:border-0 hover:shadow-xl duration-300'>
                            <p className='text-4xl font-bold text-[#fa4738] mt-6 sm:w-[550px] group-hover:text-black duration-300'>150+<span className='text-xl font-medium block my-3'>Mountains</span></p>

                            <p className='text-[#666] sm:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam officiis numquam voluptatem commodi explicabo similique vel nisi, eaque reiciendis? Molestiae laborum repudiandae deserunt, explicabo ullam maxime! Facilis, natus quod.</p>
                        </div>
                    </div>
                </div>

                {/*==== image========= */}
                <div className='w-[90%] mt-10 flex justify-center lg:w-[48%]'>
                    <div className='w-full sm:w-[90%] md:w-[60%] lg:w-[80%]'>
                        <img src={img} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyPackage;