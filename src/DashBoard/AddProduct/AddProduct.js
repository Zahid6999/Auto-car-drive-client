
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    // Handle add product ----
    const handleAddProduct = data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const addProduct = {
                        firstName: data.firstName,
                        email: data.email,
                        price: data.price,
                        phone: data.phone,
                        location: data.location,
                        photo: imgData.data.url,
                        select: data.select
                    }

                    // save Add product to the data base------
                    fetch('http://localhost:5000/addProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.firstName}, your Product add success`);
                            navigate('/dashboard/manageproducts')
                        })
                }

            })
    };

    return (
        <div className='p-8'>
            <h2 className="text-xl lg:text-3xl font-semibold pb-5">Add a Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-lg">Name</span>
                    </label>
                    <input type="text" name='firstName' {...register("firstName", { required: 'Name is required' })} placeholder="First name" className="input input-bordered w-full " />
                    {errors.firstName && <p className='text-xs text-red-600 pt-2' role="alert">{errors.firstName?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-lg">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: "Email Address is required please provide Email" })} placeholder="Email" className="input input-bordered w-full " />
                    {errors.email && <p className='text-xs text-red-600 pt-2' role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-lg">Price</span>
                    </label>
                    <input type="number" name='price' {...register("price", { required: 'price is required' })} placeholder="price" className="input input-bordered w-full " />
                    {errors.price && <p className='text-xs text-red-600 pt-2' role="alert">{errors.price?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-lg">Mobile</span>
                    </label>
                    <input type="number" name='phone' {...register("phone", { required: 'number is required' })} placeholder="phone" className="input input-bordered w-full " />
                    {errors.phone && <p className='text-xs text-red-600 pt-2' role="alert">{errors.phone?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-lg">Location</span>
                    </label>
                    <input type="text" name='location' {...register("location", { required: 'location is required' })} placeholder="location" className="input input-bordered w-full " />
                    {errors.location && <p className='text-xs text-red-600 pt-2' role="alert">{errors.location?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-lg">Photo</span>
                    </label>
                    <input type="file" name='photo' {...register("photo", { required: 'photo is required' })} placeholder="photo" className="input input-bordered w-full " />
                    {errors.photo && <p className='text-xs text-red-600 pt-2' role="alert">{errors.photo?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="text-lg">productType</span>
                    </label>
                    <select className="select select-success w-full max-w-xs" {...register("select", { required: 'location is required' })}>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    {errors.select && <p className='text-xs text-red-600 pt-2' role="alert">{errors.select?.message}</p>}
                </div>

                <input type="submit" className='btn btn-info w-full mt-6 hover:btn-success' value='Add Product' />


            </form>
        </div>
    );
};

export default AddProduct;