import React from 'react';
import "../../Css/guideCard.css";
import img1 from "../../assets/GuideTour/1.avif"

const Guide = () => {
    return (
        <div>
            <div class="flip-card shadow-lg">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={img1} className='mt-[-10px] rounded-t-2xl' alt="" />
                        <p class="title">Amam Groff</p>
                        <p className='font-bold'>Tour Guide</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title space-x-4">
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-instagram"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-facebook"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-whatsapp"></ion-icon></button>
                            <button className='px-2 pt-1 rounded-lg bg-white text-center text-[#fa4738] hover:bg-[#fa4738] hover:text-white'><ion-icon name="logo-twitter"></ion-icon></button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;