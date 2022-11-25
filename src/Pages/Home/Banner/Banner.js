import React from 'react';
import banner from '../../../Access/banner2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-100 mt-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className=" rounded-lg shadow-2xl lg:w-3/5" alt='' />
                <div className='lg:w-1/4 lg:mr-24'>
                    <h1 className="text-2xl lg:text-5xl font-bold">Refine your routine.</h1>
                    <p className="py-6">Refine your routine. Legendary reliability and innovative technology <br /> make Corolla a name you can trust to get you through every day.</p>
                    <button className="btn btn-primary">Build Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;