import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import FindSection from '../Find_Section/FindSection';
import PAdvanture from '../P AdvantureSection/PAdvanture';
import TopDestinate from '../Top Destination/TopDestinate';
import UpcomingSection from '../UpcomingSectrion/UpcomingSection';
import Offer from '../Offer/Offer';
import TravelReview from '../TravelerReview/TravelReview';
import TourGuide from '../TourGuide/TourGuide';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';



const HomeSection = () => {
    return (
        <div className='bg-[rgba(244,244,239,0.95)] overflow-hidden '>
            <HeroSlider/>
            <FindSection/>
            <PAdvanture/>
            <TopDestinate/>
            <UpcomingSection/>
            <Offer/>
            <TravelReview/>
            <TourGuide/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default HomeSection;