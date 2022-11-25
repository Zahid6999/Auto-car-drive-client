import React from 'react';

const BookingModal = ({ bookingCategory, setBookingCategory }) => {
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
        console.log(bookingInfoSentToDB);
        setBookingCategory(null);
    };


    return (
        <>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-4 mt-8'>
                        <input name='user' type="text" placeholder="user" className="input input-bordered input-info w-full " />
                        <input name='email' type="email" placeholder="email" className="input input-bordered input-info w-full " />
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