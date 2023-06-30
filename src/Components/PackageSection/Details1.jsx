import React from 'react';
import img1 from "../../assets/Destination/g2.png"
import img2 from "../../assets/Destination/g3.png"
import cm1 from "../../assets/about/guide/guide-md4.png"
import { Progress, Rate } from 'antd';

const Details1 = () => {
    return (
        <div className='mt-10'>
            <p className='text-3xl font-bold'>Package Details </p>
            <p className='mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus reiciendis iure placeat. Consequatur ipsam ratione tempora qui, veritatis iusto temporibus officiis consectetur! Officia officiis id perspiciatis repellendus iusto ad consectetur blanditiis dolores esse laudantium nulla recusandae numquam ipsa dolorum veritatis velit deleniti incidunt ipsum quas laboriosam, eveniet cumque odio. Dolor.
            </p>
            <div className=' md:flex justify-between'>
                <img src={img1} className='w-full h-[250px] md:w-[48%] md:h-[350px] my-5 rounded-lg' alt="" />
                <img src={img2} className='w-full h-[250px] md:w-[48%] md:h-[350px] rounded-lg' alt="" />
            </div>

            {/*=====Package Details table======= */}
            <div className='mt-10 flex justify-center'>
                <table className='border-2 w-[95%] text-sm md:text-base font-semibold border-collapse'>
                    <tr className=''>
                        <td className='border-2 p-2'>Destination</td>
                        <td className='border-2 p-2 text-[#666] font-medium'>Bangladesh</td>
                    </tr>
                    <tr className=''>
                        <td className='border-2 p-2'>Depature</td>
                        <td className='border-2 p-2 text-[#666] font-medium'>Yes Required</td>
                    </tr>
                    <tr className=''>
                        <td className='border-2 p-2'>Depature Time</td>
                        <td className='border-2 p-2 text-[#666] font-medium'>01 April,2021 10.00AM</td>
                    </tr>
                    <tr className=''>
                        <td className='border-2 p-2'>Return Time</td>
                        <td className='border-2 p-2 text-[#666] font-medium'>05 April,2021 10.00AM</td>
                    </tr>
                    <tr className=''>
                        <td className='border-2 p-2'>Included</td>
                        <td className='border-2 p-2 text-[#666] font-medium'>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="checkmark-outline"></ion-icon></span>
                                Specilazied Billingual Guide
                            </p>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="checkmark-outline"></ion-icon></span>
                                Private Transport
                            </p>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="checkmark-outline"></ion-icon></span>
                                Entrance Fees
                            </p>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="checkmark-outline"></ion-icon></span>
                                Box Lunch, Water, Dinner & Snacks
                            </p>
                        </td>
                    </tr>
                    <tr className=''>
                        <td className='border-2 p-2'>Excluded</td>
                        <td className='border-2 p-2 text-[#666] font-medium'>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="close-outline"></ion-icon></span>
                                Additional Services
                            </p>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="close-outline"></ion-icon></span>
                                Insurance
                            </p>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="close-outline"></ion-icon></span>
                                Drink
                            </p>
                            <p>
                                <span className="text-[#fa4738] mr-2"><ion-icon name="close-outline"></ion-icon></span>
                                Tickets
                            </p>
                        </td>
                    </tr>
                    <tr className=''>
                        <td></td>
                        <td className='p-2 col-span-2'>
                            <p className='w-full'>
                                <span className='text-[#fa4738] mr-2'><ion-icon name="bus-outline"></ion-icon></span>
                                Travel With Bus
                            </p>
                        </td>
                    </tr>

                </table>
            </div>

            {/*========== OverView=========== */}
            <p className='mt-10 mb-6 text-3xl font-bold'>Overview</p>
            <div className='flex justify-center'>
                <div className='w-[95%]  shadow-lg border border-[#e7b1adc9] rounded-md'>
                    <div className='md:flex justify-between'>
                        <div className='bg-[#F5F5F5] p-6 rounded-md md:w-[35%] flex justify-center items-center'>
                            <div>
                                <p className='text-5xl text-[#fa4738] font-bold'>10.00</p>
                                <p className='text-3xl  font-bold'>Excellent</p>
                            </div>

                        </div>


                        <div className='p-10 bg-white rounded-md md:w-[63%]'>
                            <div>
                                <p className='font-semibold text-lg'>Accommodation</p>
                                <p><Progress percent={100} status='active' strokeColor="#fa4738" strokeLinecap='butt' size={[350, 4]} /></p>
                            </div>
                            <div>
                                <p className='font-semibold text-lg'>Transport</p>
                                <p><Progress percent={80} status='active' strokeColor="#fa4738" strokeLinecap='butt' size={[350, 4]} /></p>
                            </div>
                            <div>
                                <p className='font-semibold text-lg'>Comfort</p>
                                <p><Progress percent={90} status='active' strokeColor="#fa4738" strokeLinecap='butt' size={[350, 4]} /></p>
                            </div>
                            <div>
                                <p className='font-semibold text-lg'>Hospitality</p>
                                <p><Progress percent={100} status='active' strokeColor="#fa4738" strokeLinecap='butt' size={[350, 4]} /></p>
                            </div>
                            <div>
                                <p className='font-semibold text-lg'>Food</p>
                                <p><Progress percent={70} status='active' strokeColor="#fa4738" strokeLinecap='butt' size={[350, 4]} /></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



            {/*======= comment========= */}
            <div className='mt-12 flex justify-center'>
            <div className='w-[95%] flex flex-col justify-center gap-10'>
                {
                    [1, 2, 3].map(i => {
                        return (
                            <div className='md:flex gap-5'>
                                <div className='mb-3'>
                                    <img src={cm1} className='w-[150px] md:w-[250px] md:h-[140px] rounded-md' alt="" />
                                </div>
                                <div>

                                    <div className='flex justify-between mb-2'>
                                        <p className='font-semibold text-lg'>
                                            Usama
                                            <span className='text-[#fa4738] block text-sm font-thin'>2 April,2023 10.11AM</span>
                                        </p>
                                        <p>
                                            <Rate style={{ color: "#fa4738" }} />
                                        </p>
                                    </div>
                                    <div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus non eum dolorem fuga voluptates rerum aliquam ratione provident magnam!</p>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p className='hover:text-[#fa4738] duration-300 cursor-pointer'>
                                            <span className='mr-2'><ion-icon name="arrow-undo"></ion-icon></span>
                                            Reply
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='my-4 text-center'>
            <span className='hover:text-[#fa4738] hover:border-black p-3 border border-[#fa4738] font-semibold text-lg cursor-pointer text-center duration-300'>View All Comment</span>
        </div>


{/* =============comment from============ */}
<div className='flex justify-center my-12'>
    <div className=' bg-white w-[95%] p-4 rounded'>
         <p className='md:text-4xl text-2xl font-bold mb-4'>Leave Your Comment</p>
         <form className='space-y-4 mb-3'>
             <div className='space-y-4 '>
                <input type="text" placeholder='Your Full Name'  className='border-2 border-[rgba(220,67,67,0.5)]  focus:ring-0 focus:border-[#fa4738] rounded-2xl w-full md:w-[48%] p-2 mr-6'/>
                <input type="email" placeholder='Your Email'  className='border-2 border-[rgba(220,67,67,0.5)]  focus:ring-0 focus:border-[#fa4738] rounded-2xl w-full md:w-[48%] p-2 '/>
             </div>
             <input type="text" placeholder='Your Type'  className='border-2 border-[rgba(220,67,67,0.5)]  focus:ring-0 focus:border-[#fa4738] rounded-2xl w-full p-2'/>
             <textarea name="" placeholder='Write  Message'  cols="30" rows="10" className='border-2 border-[rgba(220,67,67,0.5)]  focus:ring-0 focus:border-[#fa4738] rounded-2xl w-full p-2'></textarea>
         </form>

         <Rate style={{color:"#fa4738"}}/>
         <button className='block btn-all rounded-full hover:bg-slate-800 hover:text-white mt-5'>Send Message</button>
    </div>
</div>

        </div>
    );
};

export default Details1;