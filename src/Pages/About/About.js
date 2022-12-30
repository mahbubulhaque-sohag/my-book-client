import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthProvider';
import { AiFillEdit } from "react-icons/ai";
import AboutUpdateModal from './AboutUpdateModal';

const About = () => {
    const { user } = useContext(authContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`https://my-book-server-eta.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const newData = {...userInfo, ...data}
                // console.log(userInfo)
                setUserInfo(newData)
                
            })
    }, [user?.email, userInfo])
    return (
        <div className='flex justify-between  bg-slate-200 w-2/4 container mx-auto py-10'>
            <div className='ml-10'>
                <h2 className='text-3xl font-semibold'>{userInfo.name}</h2>
                <h3>{userInfo.email}</h3>
                <p>{userInfo.university}</p>
                <p>{userInfo.address}</p>
                <p>{userInfo.contact}</p>
            </div>
            <div className='mr-10'>
                <label htmlFor="update-profile-modal" ><AiFillEdit className="h-6 w-6  text-blue-500 absolute right-50 top-20" /> edit </label>
                <AboutUpdateModal userInfo={userInfo} />
            </div>
        </div>
    );
};

export default About;