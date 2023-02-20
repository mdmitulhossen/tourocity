import React from "react";
import "../../Css/heroSlider.css";
import hero1 from "../../assets/bg-highlight1.png";
import hero2 from "../../assets/bg-highlight2.png";
import hero3 from "../../assets/bg-highlight3.png";


const HeroSlider = () => {

    return (
        <div className="text-black h-screen overflow-hidden">
            <div className="h-full lg:flex">
                {/* lg_hero_Slider */}
                <div className="hidden lg:block w-[45%] bg-orange-800 relative overflow-hidden">
                    <div className="h-full absolute overflow-hidden w-[140%]  lg_hero_s1">
                        <img src={hero1} className="h-full" alt=""/>
                    </div>
                    <div className="h-full absolute overflow-hidden w-[140%] lg_hero_s2">
                        <img src={hero2} className="h-full" alt=""/>
                    </div>
                    <div className="h-full absolute overflow-hidden w-[140%] lg_hero_s3">
                        <img src={hero3} className="h-full" alt=""/>
                    </div>
                </div>
                {/* slider   */}
                <div className="hero lg:w-[55%]">
                    <div className='hero-wrap'>
                        <div className="w-full absolute slider1">
                            <p className='block top-[150px] absolute pl-16 sm:text-[73px] text-[50px] font-extrabold text-[#fa4738] hero_animate'>Travel & <span className='block mt-[-20px] text-[#fa4738] hero_stroke'>Adventure</span></p>

                            <p className='text-white pt-7 pl-16 w-5/6 lg:w-3/6 absolute top-[350px] hero_details_animate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, mollitia animi? Ipsum ratione ullam numquam soluta aliquam quia vitae voluptatibus!
                            </p>

                            {/* button div */}
                            <div className='pl-16 mt-16 absolute sm:top-[420px] top-[480px] hero_btn_animate'>
                                <button type="submit" className='mr-8 bg-[#fa4738] px-8 py-3 text-[18px] font-semibold text-white border-2 border-[#fa4738]
                            hover:bg-transparent
                            hover:text-[#fa4738] duration-300'>View Adventure</button>

                                <button type="submit" className='px-8 py-3 font-semibold border-2 border-[#fa4738] text-[#fa4738] text-[18px] hover:bg-[#fa4738] hover:text-white duration-300 mt-4 sm:mt-0'>Take A Tour</button>


                            </div>
                        </div>

                        <div className="w-full absolute slider2 ">
                            <p className='block top-[150px]  absolute pl-16 sm:text-[73px] text-[50px] font-extrabold text-[#fa4738] hero_animate'>Move The <span className='block mt-[-20px] text-[#fa4738] hero_stroke'>Earth</span></p>

                            <p className='text-white pt-7 pl-16 w-5/6 lg:w-3/6 absolute top-[350px] hero_details_animate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, mollitia animi? Ipsum ratione ullam numquam soluta aliquam quia vitae voluptatibus!
                            </p>

                            {/* button div */}
                            <div className='pl-16 mt-16 absolute sm:top-[420px] top-[480px] hero_btn_animate'>
                                <button type="submit" className='mr-8 bg-[#fa4738] px-8 py-3 text-[18px] font-semibold text-white border-2 border-[#fa4738]
                            hover:bg-transparent
                            hover:text-[#fa4738] duration-300'>View Adventure</button>

                                <button type="submit" className='px-8 py-3 font-semibold border-2 border-[#fa4738] text-[#fa4738] text-[18px] hover:bg-[#fa4738] hover:text-white duration-300 mt-4 sm:mt-0'>Take A Tour</button>
                            </div>
                        </div>

                        {/* number slider */}
                        <div className="relative w-[250px] h-[250px] top-[400px] left-[600px] lg:left-[500px] text-white">
                            <div className="absolute text-[150px] font-semibold image_text image_text-animate1">
                                <p>1</p>
                            </div>
                            <div className="absolute text-[150px] font-semibold image_text image_text-animate2">
                                <p>2</p>
                            </div>
                            <div className="absolute text-[150px] font-semibold image_text image_text-animate3">
                                <p>3</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
