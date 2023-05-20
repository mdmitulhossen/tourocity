import React from 'react';
import Guide from '../Card/Guide';

const TourGuide = () => {
    return (
        <div className='w-full mt-24'>
            <div>
                <div className='w-[50%] mx-auto text-center'>
                    <p className='text-4xl font-bold'>Tour Guide</p>
                    <p className='text-md font-medium text-[#666666] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi omnis ea laboriosam unde ratione explicabo eveniet perferendis sunt qui!</p>
                </div>
                <div className='flex flex-wrap sm:w-[90%] lg:w-[85%] mt-10 justify-center space-y-5 lg:space-y-0 lg:justify-between mx-auto '>
                    <Guide/>
                    <Guide/>
                    <Guide/>
                </div>
            </div>
        </div>
    );
};

export default TourGuide;