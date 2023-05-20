import React from 'react';
import PackageCard from '../Card/PackageCard';
import "../../Css/offer.css"

const Offer = () => {
    return (
        <div className='flex w-full mt-20 justify-center'>
            <div className='w-[85%] '>
            <div className='flex flex-wrap justify-between'>
                <div>
                    <h1 className='text-[40px] font-bold'>Last Minute Offers</h1>
                    <p className='text-[#787878]'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum.</p>
                </div>
                <div className='lg:mt-0 mt-6'>
                   <button className='btn-all rounded-md'>View All Post</button>
                </div>
            </div>
            <div className='space-x-5 mt-8 w-full flex justify-center'>
               <button className='btn-all rounded-md text-xl px-4 py-2 active'>10%</button>
               <button className='btn-all rounded-md text-xl px-4 py-2 active'>30%</button>
               <button className='btn-all rounded-md text-xl px-4 py-2 active'>20%</button>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mt-6'>
                {
                    [1,2,3,4,5,6].map(()=>{
                        return(<PackageCard/>)
                    })
                }
            </div>
            <div className='w-full flex justify-center mt-10'>
                <button className='btn-all m-auto rounded-full'>View All Offer</button>
            </div>
            </div>
        </div>
    );
};

export default Offer;