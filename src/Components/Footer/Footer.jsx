import React from 'react';
import "../../Css/footer.css"
import img1 from "../../assets/travel/travel.jpg"
import img2 from "../../assets/Top Destination/topD5.jpg";
import img3 from "../../assets/Top Destination/topD2.jpg";
import img4 from "../../assets/Top Destination/topD6.jpeg";
import img5 from "../../assets/Upcoming/up3.jpeg";
import img6 from "../../assets/Upcoming/up1.jpg"

const Footer = () => {
    return (
        <div className='mt-28'>
            {/*======== Join section=========== */}
            <div className='joinUs relative opacity-70'>
                <div className='absolute z-50 flex flex-wrap justify-center md:justify-around w-full h-full items-center'>
                    <div className='w-[90%] md:w-[500px]'>
                        <p className='text-white font-bold text-4xl '>JOIN US FOR MORE UPDATE</p>
                        <p className='text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, dicta!
                        </p>
                    </div>
                    <div>
                        <button className='btn-all  z-50'>Join Now</button>
                    </div>
                </div>
            </div>

            {/*===== Important Link Section=====  */}
            <div className='bg-[#2D373C] w-full py-10'>
                <div className='w-[90%] flex flex-wrap justify-center border-b border-dashed border-gray-500 pb-10 sm:justify-around  sm:ml-16'>
                    <div className='w-[70%] lg:w-[25%] md:w-[45%] mt-10'>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore.</p>
                        <p className='text-2xl font-bold text-white mt-6'>Follow Us On:</p>
                        <p className='mt-4 space-x-2 ml-5'>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-instagram"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-facebook"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-whatsapp"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-twitter"></ion-icon></button>
                        </p>
                    </div>
                    <div className='w-[60%] lg:w-[20%] md:w-[45%] mt-10'>
                        <p className='text-white font-bold text-2xl mb-4'>Quick Link</p>
                        <div>
                            <ul className='text-md font-medium text-white cursor-pointer list-none space-y-2'>
                                {
                                    ["About Us","Tour Packege","Destination","Tour Guide","Booking Process","Blog"].map((data)=>{
                                        return( <li className='hover:text-[#fa4738] duration-300'><a href='#'>{data}</a></li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='w-[60%] lg:w-[20%] md:w-[45%] mt-10'>
                        <p className='text-white font-bold text-2xl mb-4'>Quick Link</p>
                        <div>
                            <ul className='text-md font-medium text-white cursor-pointer list-none space-y-2'>
                                {
                                    ["Wild & Adventure Tours","Group Tour","Seasonal Tours","Relaxation Tours","Family Friendly Tours",].map((data)=>{
                                        return( <li className='hover:text-[#fa4738] duration-300'><a href='#'>{data}</a></li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='w-[70%] md:w-[30%] text-center mt-10'>
                        <p className='text-white text-2xl font-bold'>Gallery</p>
                        <div >
                            <div className='flex justify-around'>

                            <img src={img1} className='w-[125px] h-[100px] mt-3 rounded-lg' alt="" />
                            <img src={img2} className='w-[125px] h-[100px] mt-3  rounded-lg' alt="" />
                            <img src={img3} className='w-[125px] h-[100px] mt-3  rounded-lg' alt="" />
                            </div>
                            <div className='flex justify-around'>

                            <img src={img4} className='w-[125px] h-[100px] mt-3  rounded-lg' alt="" />
                            <img src={img5} className='w-[125px] h-[100px] mt-3  rounded-lg' alt="" />
                            <img src={img6} className='w-[125px] h-[100px] mt-3  rounded-lg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ========Contact us============ */}
            <div className='bg-[#2D373C] w-full flex justify-center mt-[-25px] pb-6'>
                <div className='w-[60%] sm:w-[90%] flex flex-wrap justify-around space-x-2 space-y-2'>
                    
                    <p className='text-white font-bold text-3xl'>Contact Us:</p>
                    <p className='text-white font-bold text-lg'><span className='mr-3'><ion-icon name="call-outline"></ion-icon></span>+8801700000000</p>
                    <p className='text-white font-bold text-lg'><span className='mr-3'><ion-icon name="mail-outline"></ion-icon></span>mitul@gmail.com</p>
                    <p className='text-white font-bold text-lg'><span className='mr-3'><ion-icon name="location-outline"></ion-icon></span>Kushtia,Bangladesh</p>
                </div>
            </div>
            <div className='bg-[#162B32] w-full flex justify-center  pb-6'>
                <div className='w-[60%] sm:w-[90%] flex flex-wrap justify-around space-x-3 space-y-6 items-center'>
                    <p className='text-white font-light mt-6'>Copyright 2023 Tourocity 
                        <span className='mx-2 text-[#fa4738]'>|</span>
                        Design from enavato
                        <span className='text-[#81B441]'>market</span>
                        <span className='block'>Develop by 
                        <span className='text-[#fa4738]'> Md Mitul Hossain</span>
                        </span>
                    </p>
                    <p className='text-white font-bold text-3xl'>
                        Touro
                        <span className='text-[#fa4738]'>city</span>
                    </p>
                    <p className='text-white font-light mt-6'>
                        <span><a href="">Terms & Condition</a></span>
                        <span className='mx-3 text-[#fa4738]'>|</span>
                        <span><a href="">Privacy Policy</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;