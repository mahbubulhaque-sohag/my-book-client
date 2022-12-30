import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(authContext);
    const [registerError, setRegisterError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();

    const handleRegister = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully');
                handleUpdateProfile(data.name);
                saveUserToDB(data.name, data.email)
                navigate('/');

            })
            .catch(err => {
                console.log(err);
                setRegisterError(err)
            })
    }

    const saveUserToDB = (name, email) => {
        const user = {name, university: '', address: '', contact: '', email};
        console.log(user)
        fetch('https://my-book-server-eta.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setCreatedUserEmail(email)
        })
    }

    const handleUpdateProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center font-bold' >
            <div className='w-auto'>
                <h3 className='text-4xl'>Register Now</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"  {...register("name", { required: 'Name is required' })} placeholder="Type your name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"  {...register("email", { required: 'Email is required' })} placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"  {...register("password", { required: 'Password should be at least 6 characters', minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} placeholder="Type a strong password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* show errors */}
                    {errors.password && <p className="text-red-400">{errors.password?.message}</p>}
                    <input className='btn btn-sm btn-primary mt-6 w-full' value='Register' type="submit" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    {registerError && <p className='text-red-600'>{registerError.message}</p>}
                </form>
                <p className='mt-1'>Already have an account? <Link className='text-blue-600/100' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;