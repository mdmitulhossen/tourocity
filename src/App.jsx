import React from 'react';
import Navbar2 from "./Components/navbar/Navbar2";
import HomeSection from './Components/Home/HomeSection';
import { Route, Routes } from 'react-router-dom';
import AboutSection from './Components/AboutSection/AboutSection';

const App = () => {

    return (
        <div className='w-screen h-screen font-["Gentium Book Plus"] bg-[#F5F6F7]'>
            <Navbar2 />
            <div className='w-100'>
                <Routes>
                    <Route path='/' element={<HomeSection/>}/>
                    <Route path='about' element={<AboutSection/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;