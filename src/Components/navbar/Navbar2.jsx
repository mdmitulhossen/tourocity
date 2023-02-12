import React, { useState } from "react";
import GridItems from "../GridItems/GridItems";

const Navbar2 = () => {

    const [nav, setNav] = useState(false);
    const [grid, setGrid] = useState(false);
    const [profile, setProfile] = useState(false);
    const [dropDawnDest, setDropDawnDest] = useState(false);
    const [dropDawnPackage, setDropDawnPackage] = useState(false);
    const [dropDawnBlog, setDropDawnBlog] = useState(false);
    const [dropDawnPage, setDropDawnPage] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const handleGrid = () => {
        setGrid(!grid);
    };
    const handleProfile = () => {
        setProfile(!profile);
    };

    const handleDropDawnDestination = () => {
        setDropDawnDest(!dropDawnDest);
    };
    const handleDropDawnPackage = () => {
        setDropDawnPackage(!dropDawnPackage);
    };
    const handleDropDawnBlog = () => {
        setDropDawnBlog(!dropDawnBlog);
    };
    const handleDropDawnPage = () => {
        setDropDawnPage(!dropDawnPage);
    };

    return (
        <div className="shadow-md w-full fixed top-0 left-0 font-medium text-white">

            <div className="lg:flex bg-[#162B32] items-center justify-between py-4 lg:px-10 px-7 ">
                <div className="font-blod text-2xl cursor-pointer flex items-center ">
                    Designer
                </div>

                {/* responsive lg hidden header */}
                <div className="text-3xl absolute right-8 top-3 cursor-pointer lg:hidden flex gap-5">
                    <div className="mt-0 text-[38px]  text-[#C4C4C4] hover:text-[#FA4738] duration-300">
                        <span onClick={handleProfile}><ion-icon name="person-circle-outline"></ion-icon></span>
                        
                    </div>

                    <div onClick={handleGrid} className="mt-1 text-[28px] text-[#C4C4C4] hover:text-[#FA4738] duration-300">
                        <ion-icon name="grid-outline"></ion-icon>
                    </div>

                    <div
                        onClick={handleNav}
                        className="text-[40px] hover:text-[#FA4738] duration-300"
                    >
                        <ion-icon
                            name={`${nav ? "close-outline" : "menu-outline"}`}
                        ></ion-icon>
                    </div>
                </div>

                {/* menu items */}
                <ul
                    className={`overflow-auto  scrollbar-thumb-[#fa48381f] scrollbar-thin  lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-[#162B32] text-gray-800 lg:text-white lg:z-auto z-[10] left-0 top-0 w-[260px] h-screen lg:h-auto lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out ${nav
                        ? "left-0 opacity-100"
                        : "left-[-999px] lg:opacity-100 opacity-0"
                        }`}
                >
                    {/* extra mobile  */}
                    <li
                        className="lg:hidden
                     text-[35px] font-bold mt-8 pb-5"
                    >
                        <a href="">
                            <span className="text-[#FA4738] inline-block mr-1 text-[35px]">
                                <ion-icon name="airplane-outline"></ion-icon>
                            </span>
                            Touro<span className="text-[#FA4738]">City</span>
                        </a>
                    </li>

                    <li className="lg:ml-8 lg:my-0 my-7">
                        <a href="/" className="hover:text-[#FA4738] duration-300">
                            Home
                        </a>
                    </li>

                    <li className="lg:ml-8 lg:my-0 my-7">
                        <a href="/about" className="hover:text-[#FA4738] duration-300">
                            About
                        </a>
                    </li>

                    {/* With dropdawn */}
                    <li
                        onClick={handleDropDawnDestination}
                        className=" lg:ml-8 lg:my-0 my-7 hover:text-[#FA4738] duration-300 cursor-pointer  w-[90%] lg:w-auto group"
                    >
                        Destinations
                        <span className="inline-block float-right lg:float-none text-[#FA4738]">
                            <ion-icon
                                name={`${dropDawnDest ? "remove-outline" : "add-outline"}`}
                            ></ion-icon>
                        </span>
                        <div
                            className={`w-[90%] cursor-pointer ${dropDawnDest ? "opacity-100 block" : "opacity-0 hidden"
                                } lg:opacity-0 group-hover:opacity-100 lg:absolute lg:bg-slate-800 lg:w-[230px] lg:top-[55px] opacity-0 mt-2 mb-[-10px] transition-all ease-in-out duration-500`}
                        >
                            <li className="ml-3 hover:bg-[#FA4738] hover:text-white duration-500 py-2 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destination">Destination</a>{" "}
                            </li>

                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destinationDetails">Destination Details</a>
                            </li>
                        </div>
                    </li>

                    {/* With dropdawn */}
                    <li
                        onClick={handleDropDawnPackage}
                        className=" lg:ml-8 lg:my-0 my-7 hover:text-[#FA4738] duration-300 cursor-pointer  w-[90%] lg:w-auto group"
                    >
                        Packages
                        <span className="inline-block float-right lg:float-none text-[#FA4738]">
                            <ion-icon
                                name={`${dropDawnPackage ? "remove-outline" : "add-outline"}`}
                            ></ion-icon>
                        </span>
                        <div
                            className={`w-[90%] cursor-pointer ${dropDawnPackage ? "opacity-100 block" : "opacity-0 hidden"
                                } lg:opacity-0 group-hover:opacity-100 lg:absolute lg:bg-slate-800 lg:w-[230px] lg:top-[55px] opacity-0 mt-2 mb-[-10px] transition-all ease-in-out duration-500`}
                        >
                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destination">Package</a>{" "}
                            </li>

                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destinationDetails">Package Details</a>
                            </li>
                        </div>
                    </li>

                    {/* With dropdawn */}
                    <li
                        onClick={handleDropDawnBlog}
                        className=" lg:ml-8 lg:my-0 my-7 hover:text-[#FA4738] duration-300 cursor-pointer  w-[90%] lg:w-auto group"
                    >
                        Blogs
                        <span className="inline-block float-right lg:float-none text-[#FA4738]">
                            <ion-icon
                                name={`${dropDawnBlog ? "remove-outline" : "add-outline"}`}
                            ></ion-icon>
                        </span>
                        <div
                            className={`w-[90%] cursor-pointer ${dropDawnBlog ? "opacity-100 block" : "opacity-0 hidden"
                                } lg:opacity-0 group-hover:opacity-100 lg:absolute lg:bg-slate-800 lg:w-[230px] lg:top-[55px] opacity-0 mt-2 mb-[-10px] transition-all ease-in-out duration-500`}
                        >
                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destination">Blog</a>{" "}
                            </li>

                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destinationDetails">Blog Details</a>
                            </li>
                        </div>
                    </li>

                    {/* With dropdawn */}
                    <li
                        onClick={handleDropDawnPage}
                        className=" lg:ml-8 lg:my-0 my-7 hover:text-[#FA4738] duration-300 cursor-pointer  w-[90%] lg:w-auto group"
                    >
                        Pages
                        <span className="inline-block float-right lg:float-none text-[#FA4738]">
                            <ion-icon
                                name={`${dropDawnPage ? "remove-outline" : "add-outline"}`}
                            ></ion-icon>
                        </span>
                        <div
                            className={`w-[90%] cursor-pointer ${dropDawnPage ? "opacity-100 block" : "opacity-0 hidden"
                                } lg:opacity-0 group-hover:opacity-100 lg:absolute lg:bg-slate-800 lg:w-[230px] lg:top-[55px] opacity-0 mt-2 mb-[-10px] transition-all ease-in-out duration-500`}
                        >
                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destination">Guide</a>{" "}
                            </li>

                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destinationDetails">Gellery</a>
                            </li>

                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destinationDetails">FAQ</a>
                            </li>

                            <li className="ml-3 py-2 hover:bg-[#FA4738] hover:text-white duration-500 lg:ml-0 lg:py-2 lg:pl-5">
                                <span className="inline-block w-[8px] h-[8px]  rounded-[50%] bg-[#FA4738] mr-2 lg:hidden"></span>
                                <a href="/destinationDetails">404</a>
                            </li>
                        </div>
                    </li>

                    <li className="lg:ml-8 lg:my-0 my-7">
                        <a href="/contact" className="hover:text-[#FA4738] duration-300">
                            Contact Us
                        </a>
                    </li>

                    <li className="mt-10 lg:hidden">
                        <p>
                            <span className="text-[#FA4738]">
                                <ion-icon name="call"></ion-icon>
                            </span>
                            <span className="inline-block ml-3">0000000000</span>
                        </p>
                        <p>
                            <span className="text-[#FA4738]">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <span className="inline-block ml-3">developer@gmail.com</span>
                        </p>
                    </li>
                </ul>

                {/* lg container */}
                <div className="hidden cursor-pointer  lg:flex gap-6">
                    <div className="mt-1 text-[38px] lg:text-[30px] text-[#C4C4C4] hover:text-[#FA4738] duration-300">
                        <span onClick={handleProfile}><ion-icon name="person-circle-outline"></ion-icon></span>
                    </div>

                    <div onClick={handleGrid} className="mt-2 text-[28px] lg:text-[25px] text-[#C4C4C4] hover:text-[#FA4738] duration-300">
                        <ion-icon name="grid-outline"></ion-icon>
                    </div>

                    <div className="flex mt-2 gap-2 justify-self-stretch">
                        <div className="text-[25px] text-[#FA4738]">
                            <ion-icon name="tablet-portrait"></ion-icon>
                        </div>
                        <div>
                            <p className="font-semibold text-[12px]">Hot Line Number</p>
                            <p className="font-semibold text-[12px]">+880 1759 99410</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Items catagory */}
            <div className={`${grid?'left-0':'left-[-999px]'} w-[500px] h-screen bg-white text-gray-900 absolute top-0 shadow-md transition-all ease-in-out duration-500`}>
                <div className="flex justify-between w-[90%] mx-auto ml-10 mt-6 mb-20">
                    <p className="text-[30px]">Category</p>
                    <p onClick={handleGrid} className="w-[30px] h-[30px] rounded-[100%] mt-2 mr-5 bg-[#FA4738] text-[28px] text-white cursor-pointer "><ion-icon name="close-outline"></ion-icon></p>

                </div>
                <div className= "grid grid-cols-2 md:grid-cols-3 w-[90%] mx-auto ml-10 gap-y-16">
                    <GridItems name="Adventure" icon="telescope" />
                    <GridItems name="Group Tour" icon="people" />
                    <GridItems name="Couple Tour" icon="heart" />
                    <GridItems name="Single Tour" icon="man" />
                    <GridItems name="Honeymoon" icon="storefront" />
                    <GridItems name="Sea Beach" icon="bug" />
                    <GridItems name="Mountain Tour" icon="golf" />

                </div>
            </div>

            {/* profile Dropdawn */}
            <div className={`w-[200px] absolute bg-[#162B32] right-[150px] lg:right-[220px]  ${profile?"top-16 lg:top-20":"top-[-999px]"} border-b-[5px] border-b-[#fa4738] transition-all ease-in-out duration-300 cursor-pointer`}>
                            <ul className="text-[#9BA6A6] text-[16px] p-5">
                                <li className="hover:text-[#fa4738] hover:border-b hover:border-b-[#c4c4c461] pb-2 pt-2">My Account</li>
                                <li className="hover:text-[#FA4738] hover:border-b hover:border-b-[#c4c4c461] pb-2 pt-2">Login</li>
                                <li className="hover:text-[#FA4738] hover:border-b hover:border-b-[#c4c4c461] pb-2 pt-2">Register</li>
                                <li className="hover:text-[#FA4738] hover:border-b hover:border-b-[#c4c4c461] pb-2 pt-2">Setting</li>
                            </ul>
            </div>

        </div>
    );
};

export default Navbar2;
