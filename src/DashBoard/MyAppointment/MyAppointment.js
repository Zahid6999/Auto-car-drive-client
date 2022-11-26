
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='p-8'>
            <h2 className="text-xl lg:text-3xl font-semibold pb-5">My Appointment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            bookings.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.user}</td>
                                <td>{book.email}</td>
                                <td className='text-orange-400'>{book.price}</td>
                                <td>{book.location}</td>
                                <td>{book.phone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;