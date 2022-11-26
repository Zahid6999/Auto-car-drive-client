import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ bookingCategory, setBookingCategory }) => {
    const { user } = useContext(AuthContext);
    const { name, resell, location } = bookingCategory;

    // Handle Modal --------
    const handleModal = (event) => {
        event.preventDefault();

        const from = event.target;
        const user = from.user.value;
        const email = from.email.value;
        const price = from.price.value;
        const location = from.location.value;
        const phone = from.phone.value;


        // information send to data base------------------
        const bookingInfoSentToDB = {

            user,
            email,
            price,
            location,
            phone
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfoSentToDB)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingCategory(null);
                    toast.success('Your Booking confirmed')
                }
            })

    };




    return (
        <>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-4 mt-8'>
                        <input name='user' type="text" defaultValue={user?.displayName} className="input input-bordered input-info w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered input-info w-full " />
                        <input name='price' type="text" value={`Price: ${resell}`} disabled className="input input-bordered input-info w-full " />
                        <input name='location' type="text" value={`location: ${location}`} disabled className="input input-bordered input-info w-full " />
                        <input name='phone' type="number" placeholder='Phone' className="input input-bordered input-info w-full " />
                        <input type="submit" value="Submit" className="btn btn-success hover:bg-lime-500" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;