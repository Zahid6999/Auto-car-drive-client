import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import CarCard from '../CarCard/CarCard';

const CarCategory = () => {
    const [bookingCategory, setBookingCategory] = useState(null);

    //    UseQuery ---------fetch

    const { data: carCategory = [], isLoading } = useQuery({
        queryKey: ['carCategory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/carCategory');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
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