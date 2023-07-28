import React from 'react';
import Navbar2 from "./Components/navbar/Navbar2";
import HomeSection from './Components/Home/HomeSection';
import { Route, Routes } from 'react-router-dom';
import AboutSection from './Components/AboutSection/AboutSection';
import Destination from './Components/DestinationSection.jsx/Destination';
import DestinationDetails from './Components/DestinationSection.jsx/DestinationDetails';
import Package1 from './Components/PackageSection/Package1';
import PackageDetails from './Components/PackageSection/PackageDetails';


const App = () => {

    return (
        <div className='w-screen h-screen font-["Gentium Book Plus"] bg-[#F5F6F7]'>
            <Navbar2 />
            <div className='w-100'>
                <Routes>
                    <Route path='/' element={<HomeSection/>}/>
                    <Route path='about' element={<AboutSection/>}/>
                    <Route path='destination' element={<Destination/>}/>
                    <Route path='destination/details' element=    {<DestinationDetails/>}/>
                    <Route path='package' element={<Package1/>}/>
                    <Route path='package/details' element={<PackageDetails/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;