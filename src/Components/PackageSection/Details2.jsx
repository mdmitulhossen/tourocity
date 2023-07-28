import React from 'react';
import '../../Css/package.css'
import { useState } from 'react';

const Details2 = () => {
    const [selected,setSelected]=useState(null);
    
    const toggle=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (
        <div className='mt-10'>
            <p className='text-3xl font-bold'>Details </p>
            <p className='mt-5 text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo facere nulla, dolor ea provident amet ex odit quisquam laborum dolore eveniet blanditiis, nobis sequi dolores fuga distinctio iusto et. Repudiandae velit, quod quis dignissimos optio dicta sint odit impedit cupiditate itaque adipisci porro eum quia debitis sit dolores. Voluptatem.</p>

            <div className='mt-10'>
                {
                    [1, 2, 3, 4, 5].map((d ,i)=> {
                        return (
                            <div>
                                <div className='flex accordionTitle  bg-red-200 rounded-lg cursor-pointer p-2' onClick={()=>toggle(i)}>
                                    <div className='w-[80px] md:w-[110px] '>
                                        <p className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-[50%] text-2xl font-bold bg-[#fa4738] ring-8 ring-red-900 text-white'>{d}</p>
                                    </div>
                                    <div className='flex justify-between items-center w-[85%]'>
                                        <p className='md:text-2xl text-base font-bold '>
                                            DAY 1 : Departure And Small Tour
                                            <span className='text-[#fa4738] font-semibold text-base block'>10.00 AM to 12.00PM</span>
                                        </p>
                                        <p className={` font-bold w-[5%] ml-16  duration-300`}>
                                            <ion-icon name={`${selected===i?'chevron-up':'chevron-down'}`}  ></ion-icon>
                                        </p>
                                    </div>
                                </div>

                                <div  className={`${selected ===i?'max-h-[200px] opacity-100':' max-h-0 opacity-0'}   p-4 duration-700`}>
                                    <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempora cumque, quo corrupti et ad consequatur laudantium odit unde? Consequatur.
                                    </p>
                                   
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Details2;