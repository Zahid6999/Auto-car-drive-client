import React from 'react';
import other from '../../../Access/images.jpg'
const Others = () => {
    return (
        <div>
            <h1 className='text-center text-2xl  lg:text-5xl font-bold mt-32'>Turning corners and heads.</h1>
            <p className=' mt-4 text-orange-500 text-center'>Exterior </p>
            <img src={other} alt="" className='w-2/3 rounded-lg mt-10 mx-auto' />

        </div>
    );
};

export default Others;