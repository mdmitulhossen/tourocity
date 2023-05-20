import React from 'react';
import img1 from "../../assets/travel/travel.jpg"

const BlogCard = () => {
    return (
        <div>
            <div className='group/btn w-[90%] sm:w-[430px] md:w-[400px] h-[440px]  duration-500 bg-white border-1 shadow-md relative rounded-lg mx-auto mt-8 overflow-hidden cursor-pointer '>
                <div className='absolute  duration-500 top-[230px] z-40'>
                     <button className='py-1 px-4 rounded-full border border-[#fa4738] hover:bg-[#fa4738] hover:text-white   lg:w-[190px] lg:ml-[30px] text-center text-lg  my-3 bg-white text-[#fa4738] font-semibold duration-300'>5 Day & 6 Night</button>
                     </div>
                     <div className='h-[70%] overflow-hidden'>
                        <img src={img1} alt="travel" className='w-[100%] h-full hover:scale-125 duration-500'/>
                    </div>
               
                <div className='w-[80%] ml-8 mt-8  text-lg font-semibold flex justify-between'>
                    <div className='mt-[-20px]'>
                        
                        <p className='text-[#666] text-sm'>     
                           <span className='text-[#fa4738] mt-2 mr-1 text-lg'><ion-icon name="person-circle-outline"></ion-icon></span>                    
                            by Developer
                        </p>
                    </div>
                    <div className='mt-[-20px]'>  
                        <p className='text-[#666] text-sm'>  
                        <span className='text-[#fa4738] mt-2 mr-1 text-lg'><ion-icon name="calendar-outline"></ion-icon></span>                         
                            December 16,2023
                        </p>
                    </div>
                </div>
                <div className='w-[100%] ml-6 my-4 flex h-[60px] justify-center mb-8 overflow-hidden'>
                    <p className='w-[70%] text-lg font-semibold hover:text-[#fa4738]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;