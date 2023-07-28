import React, { useState } from 'react';
import SectionHeader from '../AllsectionHeader/SectionHeader';
import OfferPackage1 from './OfferPackage1';

import imgA from "../../assets/Destination/bA1.png"
import img1 from "../../assets/Destination/d1.png"

import { catagoryP } from '../../ExtraData/packageDetailsData';
import { Rate } from 'antd';
import { ourCompany } from '../../ExtraData/ExtraData';

import "../../Css/package.css"
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';
import Details4 from './Details4';
import FQuickLinkSection from '../Footer/FQuickLinkSection';

const PackageDetails = () => {

    const packageData=[<Details1/>,<Details2/>,<Details3/>,<Details4/>]
  const [packageDetailsData, setPackageDetailsData] = useState(packageData[0]);

  
  
   // Add active class to the current button (highlight it)
 
   const activeBtn=(key)=>{
   
    const btns=document.getElementById(key)
    setPackageDetailsData(packageData[key-1])
  document.querySelector('.PActive').classList.remove('PActive')
  btns.classList.add('PActive')
   }


    return (
        <div className='mt-[3.125rem] bg-[#FAF9FC]'>
            <SectionHeader section="Package Details" />

            <div className='w-full flex justify-center mb-10'>
                <div className='w-[90%] mt-20 lg:flex gap-5'>
                         
                         {/*==== package offer ======= */}

                    <div className='w-full lg:w-[65%]'>
                        <div className='flex justify-around flex-wrap gap-y-4'>

                            {
                                catagoryP.map(d=>{
                                    return(
                                        <div className='flex justify-center items-center gap-4'>
                                            <p className='text-2xl text-[#fa4738]'><ion-icon name={d.icon}></ion-icon></p>
                                            <p className='text-lg font-semibold'>{d.name}
                                                <span className='block text-sm font-mono'>{d.details}</span>
                                            </p>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    

                        <div className='mt-10 border-b-2 pb-5'>
                              <div className=''>
                                  <img src={img1} className='w-full' alt="" />
                                  <div className='flex justify-between mt-5'>
                                    <p className='text-lg font-semibold text-[#fa4738]'>
                                        <span><ion-icon name="location-outline"></ion-icon></span>
                                        Kushtia,Bangladesh
                                    </p>
                                    <p><Rate/></p>
                                  </div>

                                  <p className='text-3xl font-bold mt-2'>San Francisco Golden Gate Bridge</p>
                              </div>
                        </div>


{/*=============== package details section ==========*/}
                        <div className='mt-8'>
                             <div className='flex justify-around flex-wrap gap-y-4'>
                                <button 
                                        id="1" onClick={() => {activeBtn("1");}}
                                        className='border-2 border-red-600 rounded-full px-6 py-2 lg:text-lg font-bold focus:ring-0 focus:outline-red-600 PActive duration-300'
                                >
                                            <ion-icon name="information-outline"></ion-icon>   Information
                                 </button>

                                <button id="2" onClick={() => {activeBtn("2");}} className='border-2 border-red-600 rounded-full px-6 py-2 lg:text-lg font-bold focus:ring-0 focus:outline-red-600 duration-300'><ion-icon name="business-outline"></ion-icon>   Travel Plan</button>

                                <button id="3" onClick={() => {activeBtn("3");}} className='border-2 border-red-600 rounded-full px-6 py-2 lg:text-lg font-bold focus:ring-0 focus:outline-red-600 duration-300'><ion-icon name="images-outline"></ion-icon>   Tour Gallary</button>

                                <button id="4" onClick={() => {activeBtn("4");}} className='border-2 border-red-600 rounded-full px-6 py-2 lg:text-lg font-bold focus:ring-0 focus:outline-red-600 duration-300'><ion-icon name="location-outline"></ion-icon>   Location</button>
                             </div>
                        </div>

                     {/*========= package details move on======= */}
                          <div>
                            {
                              packageDetailsData  
                            }
                          </div>

                    </div>



 {/*============== Right Side============ */}
                    <div className=' w-full lg:w-[30%]'>
                        <div className='p-4 pt-0 bg-white shadow-xl rounded-lg'>
                            <div className='border-b-2 p-4 mb-4'>
                                <p className='text-[#fa4738] font-semibold text-xl'>Search Here....</p>
                            </div>
                            <div className='flex justify-center'>
                                <input type="text" className='border-2 border-[#fa4738] focus:outline-none focus:ring-0 focus:border-[#fa4738] w-[80%] lg:w-[200px] rounded-l-lg py-[-20px]' placeholder='search...' />
                                <button className='btn-all focus:ring-0 p-2  bg-red-600 text-white rounded-r-lg border-l-0'>Search</button>
                            </div>
                            
                        </div>

      {/*============== offer package============ */}
                        <div className='mt-10 w-full'>
                            <OfferPackage1/>
                        </div>

{/*============== offer ADD============ */}
                        <div className='mt-10 w-full'>
                            <img src={imgA} className='w-full' alt="" />
                         </div>
                    </div>

                </div>
            </div>


{/*============== Footer============ */}
             <FQuickLinkSection/>
        </div>
    );
};

export default PackageDetails;