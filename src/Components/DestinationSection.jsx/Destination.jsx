import React from 'react';
import SectionHeader from '../AllsectionHeader/SectionHeader';
import img1 from "../../assets/Top Destination/topD1.jpg";
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import FQuickLinkSection from '../Footer/FQuickLinkSection';

const Destination = () => {
    const destinationData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);


    //=======pagination==========
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = destinationData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="mt-[3.125rem] bg-[#FAF9FC]">
            <SectionHeader section="Destination" />
           
            {/*======== Destination card========= */}

            <div className='flex justify-center mt-24'>
                <div className='w-[85%] lg:w-[80%] flex flex-wrap space-y-4 sm:justify-around  sm:space-y-0 sm:gap-y-4'>
                    {
                        currentPosts.map(i => {
                            return (
                                <div>
                                    <div className="w-full h-[20rem] relative cursor-pointer group overflow-hidden sm:w-[15.625rem] sm:h-[14.375rem]  md:w-[13.75rem]  md:h-[12.5rem] lg:w-[16.25rem] lg:h-[15.313rem]">
                                        <img
                                            src={img1}
                                            className=" w-full hover:scale-110 duration-500 ease-in-out  h-full rounded-md"
                                            alt=""
                                        />
                                        <div className="absolute w-full text-center top-[13.75rem] sm:top-[6.5rem]">
                                            <p className=" font-bold text-3xl text-white">London</p>
                                        </div>
                                        <div className="absolute w-full text-center top-[18.125rem] sm:top-[10.5rem] opacity-0 group-hover:opacity-100 duration-500 group-hover:top-[16.25rem] sm:group-hover:top-[9rem]">
                                            <p className="border-t-4 inline-block border-red-600 text-center  text-white    duration-500  text-2xl font-bold hover:text-[#fa4738]">
                                                30 place
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>

            <div className='mt-10'>
                <Pagination
                    totalPosts={destinationData.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>

            <div className='mt-20'>
                <FQuickLinkSection />
            </div>
        </div>
    );
};

export default Destination;