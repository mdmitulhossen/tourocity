import React from 'react';
import PackageCard from '../Card/PackageCard';

const PAdvanture = () => {
    return (
        <div>
            <div className='w-[95%]  md:w-[80%] lg:w-[60%] mx-auto text-center'>
                <h1 className='text-[40px] font-bold'>Popular Adventures</h1>
                <p className='text-[#787878]'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    [1,2,3,4,5,6].map(()=>{
                        return(<PackageCard/>)
                    })
                }
            </div>
            <div className='w-full flex justify-center mt-16'>
                <button className='btn-all m-auto'>View All Tour</button>
            </div>
        </div>
    );
};

export default PAdvanture;