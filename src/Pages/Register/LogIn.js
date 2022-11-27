import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const LogIn = () => {
    const googleProvider = new GoogleAuthProvider()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [logInError, setLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);


    const from = location.state?.from?.pathName || "/";

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (data) => {
        console.log(data);

        // signIn User--------
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error);
                setLogInError(error.message);
            })
    };

    // Google Sign In------------
    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    };
    return (
        <div className='h-[900px] flex justify-center items-center '>
            <div className='w-[440px] shadow-2xl p-8 rounded-xl'>
                <h1 className='text-4xl text-center'>Log In</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        <input type="password" {...register("password", { required: "Password Is Required", minLength: { value: 6, message: "password must be 6 character Or longer" } })} placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <p className='text-xs text-red-600 pt-2' role="alert">{errors.password?.message}</p>}
                        <label className="label"><Link className="text-xs link link-accent">forget password</Link></label>
                    </div>
                    <input type="submit" className='btn btn-info w-full mt-6 hover:btn-success' value='Register' />
                    {logInError && <p className='text-xs text-red-500 pt-2'>{logInError}</p>}
                    <p className='text-sm mt-3'>New to Auto Car Drive?<Link to='/register' className="link link-primary"> Create new account</Link></p>
                </form>
                <div className="flex flex-col w-full border-opacity-90 mt-3">
                    <div className="divider">OR</div>
                </div>
                <button onClick={handleGoogle} className='btn btn-outline btn-error w-full flex items-center'> <FcGoogle className='text-2xl mr-3' /> GOOGLE</button>
            </div>
        </div>
    );
};

export default LogIn;