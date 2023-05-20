import React from 'react';
import { Rate } from 'antd';
import img1 from "../../assets/Review/review1.jpeg"

const Review = () => {
    return (
        <div>

        <div className='bg-white w-[355px] h-[280px] rounded-lg cursor-pointer hover:bg-blue-900 duration-500 hover:text-white group border-x-4 hover:border-x-4 hover:border-red-500 shadow-lg'>
            <div className='flex justify-center w-full relative'>
                <img src={img1} className='rounded-full mt-8 w-16 h-16 z-30' alt="" />
                <div className='absolute w-16 bg-red-200 h-16 left-[67px]'></div>
                <div className='ml-4 mt-6'>
                   <p className='text-[#717171] text-[30px] font-bold group-hover:text-white'>Jims Pull</p>
                   <Rate/>
                </div>
            </div>    
            <div className='mt-4 w-full flex justify-center'>
                <p className='text-[#787878] text-lg w-[90%] group-hover:text-white'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat illum fuga delectus recusandae voluptates quod ratione eveniet consequuntur natus accusantium?
                </p>
            </div>     
        </div>
      
           
        </div>
    );
};

export default Review;