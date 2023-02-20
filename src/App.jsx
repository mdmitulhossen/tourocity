import React from 'react';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import Navbar2 from "./Components/navbar/Navbar2";
import Demo from "./Components/HeroSlider/Demo";

const App = () => {

    return (
        <div className='w-screen h-screen font-["Gentium Book Plus"] bg-[#F5F6F7]'>
            <Navbar2 />
            <div>
                
                <HeroSlider />
                {/* <Demo/> */}
            </div>

        </div>
    );
};

export default App;