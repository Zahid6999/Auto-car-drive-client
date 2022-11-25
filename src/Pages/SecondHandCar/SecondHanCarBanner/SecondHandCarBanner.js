import React from 'react';
import secondhand from '../../../Access/secondhand.png'


const SecondHandCarBanner = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-xl  font-semibold text-center'>Second Hand <span className='text-orange-500'>Car</span></h1>

            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={secondhand} className="lg:w-2/3 rounded-lg shadow-2xl lg:mr-10" alt='secondHand' />
                    <div className='w-1/2'>
                        <h1 className="text-2xl lg:text-5xl font-bold">Your Dream Car Just One <span className='text-orange-500'>Click Away</span></h1>
                        <p className="py-6">Find a complete list of certified used cars in India. You can select second-hand cars by applying filters such as by location, price, body type, brand etc. & also get info of used car dealers & CarDekho used car stores.</p>
                        <button className="btn btn-primary">Get Your Dream</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondHandCarBanner;