import React from 'react';
import img from './banner-bg.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='bg-img'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;