import React from 'react';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import FQuickLinkSection from '../Footer/FQuickLinkSection';
import SectionHeader from '../AllsectionHeader/SectionHeader';
import PackageCard from '../Card/PackageCard';

import { Input, Space } from 'antd';
const { Search } = Input;

import imgA from "../../assets/Destination/bA1.png"
import "../../Css/package.css"

// const onSearch = () => {
//     redirect("/package")
// }

import { redirect } from 'react-router-dom';
import OfferPackage1 from './OfferPackage1';
const Package1 = () => {
    const packageData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);


    //=======pagination==========
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = packageData.slice(firstPostIndex, lastPostIndex);
    return (
        <div className="mt-[3.125rem] bg-[#FAF9FC]">
            <SectionHeader section="Package" />

            <div className='w-full flex justify-center'>
                <div className='w-[90%] mt-20 lg:flex gap-5'>
                    <div className='w-full lg:w-[65%]'>
                        <div className=' flex flex-wrap justify-center gap-x-8'>

                            {
                                currentPosts.map(i => {
                                    return (
                                        <PackageCard />
                                    )
                                })
                            }
                        </div>

                     {/*==========Pagination ==========*/}
                        <div className='mt-10'>
                            <Pagination
                                totalPosts={packageData.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>


                    <div className='mt-10 lg:mt-10 w-full lg:w-[30%]'>
                        <div className='p-4 pt-0 bg-white shadow-xl rounded-lg'>
                            <div className='border-b-2 p-4 mb-4'>
                                <p className='text-[#fa4738] font-semibold text-xl'>Search Here....</p>
                            </div>
                            <div className='flex justify-center'>
                                <input type="text" className='border-2 border-[#fa4738] focus:outline-none focus:ring-0 focus:border-[#fa4738] w-[80%] lg:w-[200px] rounded-l-lg py-[-20px]' placeholder='search...' />
                                <button className='btn-all focus:ring-0 p-2  bg-red-600 text-white rounded-r-lg border-l-0'>Search</button>
                            </div>
                            
                        </div>

      {/*============== offer package============ */}
                        <div className='mt-10 w-full'>
                            <OfferPackage1/>
                        </div>

{/*============== offer ADD============ */}
                        <div className='mt-10 w-full'>
                            <img src={imgA} className='w-full' alt="" />
                         </div>
                    </div>

                </div>
            </div>



            {/* =======footer========= */}
            <div className='mt-20'>
                <FQuickLinkSection />
            </div>
        </div>
    );
};

export default Package1;