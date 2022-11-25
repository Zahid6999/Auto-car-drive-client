import React from 'react';

const CarCard = ({ category, setBookingCategory }) => {
    const { name, img, location, resell, original, sellerName, use } = category;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-end'>
                    <p>Used: {use}</p>
                    <p className="text-base text-orange-500">Seller Name: {sellerName}</p>
                </div>
                <p className='text-xs'>Original Price: {original}</p>
                <p className='text-xs'>Location: {location}</p>
                <p className='text-lg text-orange-500 font-bold'>Sell: ${resell}</p>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking"
                        onClick={() => setBookingCategory(category)}
                        className="btn btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default CarCard;