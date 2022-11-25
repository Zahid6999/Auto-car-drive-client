import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import CarCard from '../CarCard/CarCard';

const CarCategory = () => {
    const [carCategory, setCarCategory] = useState([]);
    const [bookingCategory, setBookingCategory] = useState(null);

    useEffect(() => {
        fetch('carCategory.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCarCategory(data)
            })
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14'>
                {
                    carCategory.map(category => <CarCard
                        key={category._id}
                        category={category}
                        setBookingCategory={setBookingCategory}
                    ></CarCard>)
                }
            </div>

            {bookingCategory && <BookingModal
                bookingCategory={bookingCategory}
                setBookingCategory={setBookingCategory}
            ></BookingModal>}
        </>

    );
};

export default CarCategory;