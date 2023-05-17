import React from 'react';
import Navbar2 from "./Components/navbar/Navbar2";
import HomeSection from './Components/Home/HomeSection';

const App = () => {

    return (
        <div className='w-screen h-screen font-["Gentium Book Plus"] bg-[#F5F6F7]'>
            <Navbar2 />
            <div className='w-100'>
                <HomeSection/>
            </div>

        </div>
    );
};

export default App;