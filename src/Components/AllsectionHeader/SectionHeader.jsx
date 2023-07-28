import React from 'react';
import "../../Css/sectionHeader.css"
import { Link } from 'react-router-dom';

const SectionHeader = ({section}) => {
    return (
        <div className='parent flex justify-center items-center'>
            <div>
                <p className='text-white text-5xl font-bold mb-2'>{section}</p>
                <p className='text-white text-xl group font-semibold hover:text-[#fa4738]'>
                    <Link to="/">Home</Link>
                    <span className='text-[#fa4738] mx-2 group-hover:text-white'><ion-icon name="caret-forward-outline"></ion-icon></span>
                    <Link to={`/${section.toLowerCase()}`}>{section}</Link>
                </p>
            </div>
        </div>
    );
};

export default SectionHeader;