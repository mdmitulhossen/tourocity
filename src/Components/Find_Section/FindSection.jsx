import React from 'react'
import { find } from '../../ExtraData/ExtraData'

const FindSection = () => {
    return (
        <div className='w-full h-auto  relative top-[-80px]'>
            <div className='w-[95%] gap-0 sm:w-[85%] lg:gap-0 h-full shadow-xl mx-auto  rounded-xl bg-white py-2 flex justify-center items-center flex-col md:flex-row flex-wrap md:gap-x-0 md:px-5 '>
                {
                    find.map((value) => {
                        return (
                            <div className='w-[90%] md:w-[50%] lg:w-[20%] flex items-center border-2  my-3'>
                                <span className='block text-[30px] mx-2 text-[#fa4738]'><ion-icon name={`${value.icon}-outline`}></ion-icon></span>
                                <div className='w-[90%] mt-2'>
                                    <p className='font-semibold pl-3'>{value.name}</p>
                                    <select className='w-[100%] border-0 focus:ring-0'>
                                        {
                                            value.option.map((option) => {
                                                return (
                                                    <option value={option.OptionValue}>{option.optionName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        )
                    })
                }

{/*============= date field========== */}

                <div className='w-[90%] md:w-[50%] lg:w-[20%] flex items-center border-2  my-3'>
                    <span className='block text-[30px] mx-2 text-[#fa4738]'><ion-icon name="calendar-outline"></ion-icon></span>
                    <div className='w-[90%] mt-2'>
                        <p className='font-semibold pl-3'>Journey Date</p>
                        <input type='date' className='w-[100%] border-0 focus:ring-0'>
                          
                        </input>
                    </div>
                </div>
                {/*============= date field End========== */}
               {/*============= Find Now Button========== */}
                    <button className='w-[90%] lg:py-6 py-3 border border-[#fa4738] hover:bg-white hover:text-[#fa4738]   lg:w-[15%] lg:ml-[30px] text-center text-lg  my-3 bg-[#fa4738] text-white font-semibold duration-300'>Find Now</button>
                
               
            </div>
        </div>
    )
}

export default FindSection
