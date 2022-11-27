import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const { loading } = useContext(AuthContext);

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers');
            const data = await res.json();
            return data;
        }
    });
    // console.log(allUsers);


    // Handle Admin--------
    const handleAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Create Admin Successfully');
                    refetch();
                }
            })
    }


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-8'>
            <h2 className="text-xl lg:text-3xl font-semibold pb-5">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th className='text-red-600'>Delete</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            allUsers.map((users, i) => <tr key={users._id}>
                                <th>{i + 1}</th>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users?.role !== 'admin' && <button onClick={() => handleAdmin(users._id)} className='btn btn-primary'>Admin</button>}</td>
                                <td><button className='btn btn-warning'>Delete</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;