import React, { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Destination", link: "/destination" },
        { name: "Package", link: "/package" },
        { name: "Blogs", link: "/blogs" },
        { name: "Pages", link: "/pages" },
        { name: "Contact Us", link: "/contact" }
    ];
    return (
        <div className='bg-[#162B32] h-16 text-xl text-white transition-all duration-1000 ease-in-out'>
            <nav className='h-full flex justify-between items-center md:justify-around'>
                <div>Logo</div>
                <div>
                    <ul className='lg:flex hidden gap-6'>
                        {
                            navItems.map((value) => {
                                return (
                                    <li><a href={value.link}>{value.name}</a></li>)
                            })
                        }
                    </ul>
                </div>

                <div>
                    <span>Profile</span>
                    <span className='ml-4' onClick={handleNav}>toggle </span>
                </div>
            </nav>

        
             <div className={`w-72 h-screen  absolute bg-red-900 top-0 flex flex-col lg:hidden  ${nav?'top-0 left-0 ':'left-[-999px]'} transition-all ease-linear  duration-500`}>
                <div className='p-8'>
                    <p>Logo</p>
                </div>
                <ul className='p-8'>
                    {
                        navItems.map((value) => {
                            return (
                                <li className='mb-6 text-[18px] '><a href={value.link}>{value.name}</a></li>)
                        })
                    }
                </ul>

                <div className='p-8'>
                    <p>645343635</p>
                    <p>@gmail.com</p>
                </div>
            </div> 

        </div>
    )
}

export default Navbar
