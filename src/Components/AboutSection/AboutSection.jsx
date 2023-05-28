import React from 'react';
import SectionHeader from '../AllsectionHeader/SectionHeader';
import AboutCompany from './AboutCompany'
import WhyPackage from './WhyPackage';
import ClientReview from './ClientReview';
import ATourGuide1 from './ATourGuide1';
import BlogCard from '../Card/BlogCard';
import FQuickLinkSection from '../Footer/FQuickLinkSection';

const AboutSection = () => {
    return (
        <div className='mt-[50px] bg-[#FAF9FC]'>
           <SectionHeader section="About"/>
           <AboutCompany/>
           <WhyPackage/>
           <ClientReview/>
           <ATourGuide1/>
           <div className='mt-24'>
                <div className='flex w-full flex-wrap justify-center'>
                        <div  className='w-[80%] flex justify-between'>
                            <h1 className='text-[40px] font-bold'>Latest Blog</h1>  
                            <button className='btn-all rounded-md py-2 px-2'>View All Post</button>
                        </div>
                        <div className='lg:mt-0 mt-6'>
                       
                        </div>
                    </div>
                <div className='flex flex-wrap justify-center gap-10 mt-6'>
                        {
                            [1,2,3].map(()=>{
                                return(<BlogCard/>)
                            })
                        }
                    </div>
           </div>
         <div className='mt-24'>

           <FQuickLinkSection/>
         </div>
        </div>
    );
};

export default AboutSection;