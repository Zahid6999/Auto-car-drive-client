import React from 'react';
import Banner from '../Banner/Banner';
import Carousal from '../Carousal/Carousal';
import Others from '../Others/Others';


const Home = () => {
    return (
        <div className='mx-1 my-3'>
            <Carousal></Carousal>
            <Banner></Banner>

            <Others></Others>
        </div>
    );
};

export default Home;