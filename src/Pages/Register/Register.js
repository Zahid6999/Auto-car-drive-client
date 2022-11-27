import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {
    const googleProvider = new GoogleAuthProvider()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, upDateUser, googleSignIn } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/')
    }

    const handleRegister = (data) => {
        console.log(data);
        setRegisterError('')

        // create user ------------
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')

                // <---Update user---->
                const userInfo = {
                    displayName: data.firstName
                }
                upDateUser(userInfo)
                    .then(() => {

                        saveUSer(data.firstName, data.email);
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }

    // Google Sign In------------
    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    };


    // user er info db te send korchi
    const saveUSer = (name, email) => {
        const users = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)
            })
    };


    // Jwt token function------


    return (
        <div className='h-[900px] flex justify-center items-center '>
            <div className='w-[440px] shadow-2xl p-8 rounded-xl'>
                <h1 className='text-4xl text-center'>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>

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
                            <span className="text-lg">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "password must be 6 character Or longer" } })} placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <p className='text-xs text-red-600 pt-2' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className='btn btn-info w-full mt-6 hover:btn-success' value='Register' />
                    {registerError && <p className='text-xs text-red-600 py-2'>{registerError}</p>}
                    <p className='text-sm mt-3'>All ready have an account <Link to='/login' className="link link-primary"> please LogIn</Link></p>
                </form>
                <div className="flex flex-col w-full border-opacity-90 mt-3">
                    <div className="divider">OR</div>
                </div>
                <button onClick={handleGoogle} className='btn btn-outline btn-error w-full flex items-center'> <FcGoogle className='text-2xl mr-3' /> GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;