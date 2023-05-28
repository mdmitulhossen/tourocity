import React from 'react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../Css/upcoming.css"
import PackageCard from '../Card/PackageCard';

const UpcomingSection = () => {
    return (
        <div className='upcomingSection overflow-hidden'>
            <div className='UpChild flex justify-center'>
                <div className='w-[85%] mt-24'>
                    <p className='text-4xl text-white font-extrabold '>Upcoming Best Tours</p>
                    <p className='text-white font-medium mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, unde.</p>

                    {/*========= carousel============ */}
                    <div className='mt-5 overflow-hidden'>
                        <Swiper
                            slidesPerView={3}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 1,
                                    spaceBetween: 300,
                                },
                                "@0.50": {
                                    slidesPerView: 1,
                                    spaceBetween: 400,
                                },
                                "@0.75": {
                                    slidesPerView: 2,
                                    spaceBetween: 300,
                                },
                                "@1.00": {
                                    slidesPerView: 3,
                                    spaceBetween: 200,
                                },
                                "@1.25": {
                                    slidesPerView: 3,
                                    spaceBetween: 300,
                                },
                                "@1.50": {
                                    slidesPerView: 3,
                                    spaceBetween: 100,
                                },
                                "@1.75": {
                                    slidesPerView: 4,
                                    spaceBetween: 300,
                                },
                            }}

                            autoplay={{
                                delay: 4000,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {
                                [1, 2, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                                    return (<SwiperSlide>
                                        <PackageCard />
                                    </SwiperSlide>)
                                })
                            }
                        </Swiper>
                    </div>
                    <div className='w-100 flex justify-center mt-6'>
                        <button className='btn-all mt-6 mx-auto'>View All</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UpcomingSection;