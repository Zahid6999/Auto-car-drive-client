import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();

    const handleRegister = (data) => {
        console.log(data);
    }
    return (
        <div className='h-[900px] flex justify-center items-center '>
            <div className='w-[440px] shadow-2xl p-8 rounded-xl'>
                <h1 className='text-4xl text-center'>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg">Name</span>
                        </label>
                        <input type="text" {...register("firstName")} placeholder="First name" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full " />
                    </div>
                    <input type="submit" className='btn btn-info w-full mt-6 hover:btn-success' value='Register' />
                    <p className='text-sm mt-3'>New to Auto Car Drive?<Link to='/login' className="link link-primary"> Create new account</Link></p>
                </form>
                <div className="flex flex-col w-full border-opacity-90 mt-3">
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline btn-error w-full flex items-center'> <FcGoogle className='text-2xl mr-3' /> GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;