import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import FindSection from '../Find_Section/FindSection';
import PAdvanture from '../P AdvantureSection/PAdvanture';
import TopDestinate from '../Top Destination/TopDestinate';


const HomeSection = () => {
    return (
        <div className='bg-[rgba(244,244,239,0.95)] overflow-hidden '>
            <HeroSlider/>
            <FindSection/>
            <PAdvanture/>
            <TopDestinate/>
        </div>
    );
};

export default HomeSection;