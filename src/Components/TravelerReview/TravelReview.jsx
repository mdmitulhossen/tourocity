import React from 'react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../Css/upcoming.css"
import Review from '../Card/Review';

const TravelReview = () => {
    return (
        <div className='travelReviewSection overflow-hidden'>
        <div className='UpChild flex justify-center'>
            <div className='w-[85%] mt-24'>
                <p className='text-4xl text-white font-extrabold '>Travelers Review</p>
                <p className='text-white font-medium mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, unde.</p>

          {/*========= carousel============ */}
                <div className='mt-10 overflow-hidden'>
                    <Swiper
                        slidesPerView={3}
                         pagination={{
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 200,
                            },
                            "@0.50": {
                                slidesPerView: 1,
                                spaceBetween: 200,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 200,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 200,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 200,
                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 100,
                            },
                            "@1.75": {
                                slidesPerView: 4,
                                spaceBetween: 200,
                            },
                        }}

                        autoplay={{
                            delay: 4000,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {
                            [1,2,4,5,6,7,8,9,10].map((i)=>{
                                return(<SwiperSlide>
                                    <Review/>
                                </SwiperSlide>)
                            })
                        }
                    </Swiper>
                </div>   
            </div>

        </div>

    </div>
    );
};

export default TravelReview;