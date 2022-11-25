import React from 'react';
import CarCategory from '../CarCategory/CarCategory';
import LocationSection from '../LocationSection/LocationSection';
import SecondHandCarBanner from '../SecondHanCarBanner/SecondHandCarBanner';

const SecondHandCar = () => {
    return (
        <div>
            <SecondHandCarBanner></SecondHandCarBanner>
            <CarCategory></CarCategory>
            <LocationSection></LocationSection>
        </div>
    );
};

export default SecondHandCar;