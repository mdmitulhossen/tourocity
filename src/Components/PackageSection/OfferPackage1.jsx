import React from 'react';
import { NavLink } from 'react-router-dom';

import img1 from "../../assets/Package/1.png"
import img3 from "../../assets/Package/2.png"
import img2 from "../../assets/Package/3.png"
import img4 from "../../assets/Package/4.png"

const OfferPackage1 = () => {
    return (
        <div className='w-full bg-white rounded-md'>
               <div className='w-full bg-black rounded p-2 text-center'>
                  <p className='text-white font-bold text-2xl'>Offer Package</p>
               </div>
                            
                <div className='w-full mt-5 p-2 divide-y-2 space-y-4'>

                    {
                        [img1,img2,img3,img4].map(d=>{
                            return(
                                <NavLink to="" className="block">
                                        <div className='flex w-full justify-around items-center gap-3 group cursor-pointer'>
                                        <div><img src={d} alt=""className='w-[150px] h-[90px] rounded' /></div>
                                        <div>
                                            <p className='font-semibold text-sm group-hover:text-[#fa4738] duration-300'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptate.
                                            </p>
                                            <p className='text-sm mt-1'>From</p>
                                            <p className='text-sm'><span className='text-md font-semibold text-[#fa4738]'>$67.00 </span>Per Person</p>
                                        </div>
                                    </div>
                                </NavLink>                        
                            )
                        })
                    }
                </div>
        </div>
    );
};

export default OfferPackage1;