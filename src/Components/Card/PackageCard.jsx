import React from 'react';
import img1 from "../../assets/travel/travel.jpg"

const PackageCard = () => {
    return (
        <div>
            <div className='group/btn w-[90%] sm:w-[430px] md:w-[380px]  hover:bg-[#f4c8c596] duration-500 bg-white border-1 shadow-md rounded-lg mx-auto mt-8 overflow-hidden cursor-pointer'>
                <div className='absolute opacity-0 group-hover/btn:opacity-100 duration-500 translate-x-[10px] mt-4'>
                     <button className='py-2 px-5 rounded-full border border-[#fa4738] hover:bg-[#fa4738] hover:text-white   lg:w-[190px] lg:ml-[30px] text-center text-lg  my-3 bg-white text-[#fa4738] font-semibold duration-300'>5 Day & 6 Night</button>
                     </div>
            <img src={img1} alt="travel" className='w-[100%] h-[280px]'/>
                <div className='w-[80%] ml-6 mt-8 text-lg font-semibold'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsa.</p>
                </div>
                <div className='w-[80%] ml-6 my-4 flex justify-between'>
                    <button className='py-1 px-5 rounded-full border border-[#fa4738] hover:bg-[#fa4738] hover:text-white   lg:w-[130px] text-center text-md  my-3 bg-white text-[#fa4738] font-semibold duration-300'>Book Now</button>
                    <p className=' font-semibold'>From <span className='block'><span className='text-[#fa4738] text-md font-bold'>$69.00</span> Per Person</span></p>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;