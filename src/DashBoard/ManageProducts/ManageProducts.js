import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageProducts = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    // close Modal -----
    const closeModal = () => {
        setDeleteUser(null);
    };



    // Manage products user fetch ---------
    const { data: manageUser = [], isLoading, refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addProducts', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });


    // delete success Modal
    const handleDeleteSuccess = (user) => {
        fetch(`http://localhost:5000/addProducts/${user?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${user.firstName} Deleted successfully`)
                    refetch();
                }
            })

    }



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-8'>
            <h2 className="text-xl lg:text-3xl font-semibold pb-5">Manage Product</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageUser.map(user => <tr key={user?._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photo} alt='user' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.firstName}</div>
                                            <div className="text-sm opacity-50">{user?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.email}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user?.phone}</span>
                                </td>
                                <td className='text-orange-500'>${user?.price}
                                    <br />


                                    <span className="badge badge-ghost badge-sm">{user?.select}</span>
                                </td>
                                <th>

                                    <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn bg-orange-500 btn-sm border-none hover:bg-red-500">Delete</label>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are You Sure you want to delete`}
                    message={`If You delete ${deleteUser.firstName} it cannot be undone`}
                    successAction={handleDeleteSuccess}
                    deleteData={deleteUser}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;