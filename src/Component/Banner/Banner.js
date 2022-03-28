import React from 'react';
import img from './banner-bg.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-img'>
            <img src={img} alt="" srcset="" />
        </div>
    );
};

export default Banner;