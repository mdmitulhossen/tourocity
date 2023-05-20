import React from 'react';
import "../../Css/offer.css"
import BlogCard from '../Card/BlogCard';

const Blog = () => {
    return (
        <div className='flex w-full mt-24 justify-center'>
             <div className='w-[85%] '>
            <div className='flex flex-wrap justify-between'>
                <div >
                    <h1 className='text-[40px] font-bold'>Recent Post</h1>
                    <p className='text-[#787878]'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum.</p>
                </div>
                <div className='lg:mt-0 mt-6'>
                   <button className='btn-all rounded-md py-2 px-2'>View All Post</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mt-6'>
                {
                    [1,2,3,4,5,6].map(()=>{
                        return(<BlogCard/>)
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default Blog;