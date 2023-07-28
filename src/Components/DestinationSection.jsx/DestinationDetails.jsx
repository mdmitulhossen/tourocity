import React from 'react';
import SectionHeader from '../AllsectionHeader/SectionHeader';
import "../../Css/destinationSection.css";
import FQuickLinkSection from '../Footer/FQuickLinkSection';

import img1 from "../../assets/Destination/d1.png";
import imgAD from "../../assets/Destination/bA1.png";


import img2 from "../../assets/Destination/g1.png";
import img3 from "../../assets/Destination/g2.png";
import img4 from "../../assets/Destination/g3.png";
import img5 from "../../assets/Destination/g4.png";
import img6 from "../../assets/Destination/g5.png";
import img7 from "../../assets/Destination/g6.png";



const DestinationDetails = () => {
    return (
        <div className="mt-[3.125rem] bg-[#FAF9FC]">
            <SectionHeader section="Destination Details"/>
            
            <div className='w-full flex justify-center'>
                <div className='w-[90%] mt-20 lg:flex gap-5'>
                    <div className='w-full lg:w-[65%]'>
                        <div className='w-90% rounded-lg overflow-hidden'><img src={img1} className='w-full' alt="" /></div>
                        <div className='mt-10'>
                            <p className='text-2xl font-bold mb-4'>Descover New York</p>
                            <p className='text-[#666]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, repellat libero autem quae maiores placeat qui magni voluptate eligendi unde distinctio nostrum obcaecati iusto! Praesentium neque dignissimos impedit doloremque assumenda?</p>
                            <p className='text-[#666] mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, repellat libero autem quae maiores placeat qui magni voluptate eligendi unde distinctio nostrum obcaecati iusto! Praesentium neque dignissimos impedit doloremque assumenda?</p>
                            <p className='text-[#666] mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, repellat libero autem quae maiores placeat qui magni voluptate eligendi unde distinctio nostrum obcaecati iusto! Praesentium neque dignissimos impedit doloremque assumenda?</p>
                        </div>

                        {/*=========== overview table============ */}
                        <div className='mt-10'>
                            <p className='text-2xl font-bold mb-4'>Overview</p>
                            <div className='w-full flex justify-center'>
                                    <table className='table-fixed border divide-y w-[90%] divide-[#66666671] border-[#66666671]'>
                                        <tr className='divide-x divide-[#66666671]'>
                                            <td className='py-3 px-3 font-bold'>Destination</td>
                                            <td className='text-l font-bold text-[#fa4738] pl-3'>Bangladesh</td>
                                        </tr>
                                        <tr className='divide-x divide-[#66666671]'>
                                            <td className='py-3 px-3  font-bold'>Departure</td>
                                            <td className='text-l font-bold text-[#fa4738] pl-3'>Yes Required</td>
                                        </tr>
                                        <tr className='divide-x divide-[#66666671]'>
                                            <td className='py-3 px-3  font-bold'>Departure Time</td>
                                            <td className='text-l font-bold text-[#fa4738] pl-3'>1 April ,2021 10.00AM</td>
                                        </tr>
                                        <tr className='divide-x divide-[#66666671]'>
                                            <td className='py-3 px-3  font-bold'>Return Time</td>
                                            <td className='text-l font-bold text-[#fa4738] pl-3'>8 April ,2021 10.00AM</td>
                                        </tr>                         
                                    </table>
                            </div>
                        </div>

                        {/*======== map========== */}

                        <div className='mt-10 rounded-lg'>
                            <p className='text-2xl font-bold mb-4'>Map</p>
                              <div class="mapouter rounded-lg">
                                <div class="gmap_canvas">
                                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=New york&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://capcuttemplate.org/">Capcuttemplate.org</a>
                                </div>
                              </div>
                        </div>
                    </div>


                 {/*========= new destination & ads ==========*/}
                    <div className='mt-10 lg:mt-0 w-full lg:w-[30%]'>
                        {/*==== new destination==== */}
                         <div className='bg-white shadow-xl rounded-md'>
                             <div className=' p-4 border-b-2'>
                                <p className='text-2xl font-bold'>New Destination</p>
                             </div>
                            <div className='w-full  flex gap-3 lg:gap-2 flex-wrap justify-between p-4'>
                                <img src={img2} className='w-[31%] cursor-pointer' alt="" />
                                <img src={img3} className='w-[31%] cursor-pointer' alt="" />
                                <img src={img4} className='w-[31%] cursor-pointer' alt="" />
                                <img src={img5} className='w-[31%] cursor-pointer' alt="" />
                                <img src={img6} className='w-[31%] cursor-pointer' alt="" />
                                <img src={img7} className='w-[31%] cursor-pointer' alt="" />
                            </div>
                         </div>

                         <div className='w-[300px] sm:w-[55%] lg:w-full mt-10'>
                            <img src={imgAD} className='w-full' alt="" />
                         </div>
                    </div>
                </div>          
            </div>

            {/* =======footer========= */}
            <div className='mt-20'>
                <FQuickLinkSection />
            </div>
        </div>
    );
};

export default DestinationDetails;