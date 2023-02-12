import React from 'react'

const GridItems = ({name,icon}) => {
    return (
        <div>
            <div>
                <div className='w-[200px] md:w-[120px] h-[100px] shadow-inner relative border-1 hover:bg-[#ff4838] group rounded-md duration-500 cursor-pointer'>
                    <div className='w-[80px] h-[80px] md:h-[65px] md:w-[65px] shadow-lg rounded-[100%] absolute top-[-33px] left-[58px] md:left-[30px] bg-gray-100 flex justify-center items-center'><span className='inline-block mt-2 text-[40px] md:text-[30px] text-[#ff4938bf] '><ion-icon name={`${icon}-outline`}></ion-icon></span></div>
                    <p className='absolute group-hover:text-white text-center bottom-3 left-[65px] md:left-[20px] text-[16px]'>
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GridItems
