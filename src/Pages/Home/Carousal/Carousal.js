import React from 'react';
import carouser1 from '../../../Access/carusel/carusel1.jpg'
import carouser2 from '../../../Access/carusel/carusel2.jpg'
import carouser3 from '../../../Access/carusel/carusel3.jpg'
const Carousal = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={carouser1} className="w-full rounded-lg" alt='carouser' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={carouser2} className="w-full rounded-lg" alt='carouser' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={carouser3} className="w-full rounded-lg" alt='carouser' />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </>
    );
};

export default Carousal;