import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthProvider';
import { AiFillEdit } from "react-icons/ai";
import AboutUpdateModal from './AboutUpdateModal';

const About = () => {
    const {user} = useContext(authContext);
    const [userInfo, setUserInfo] = useState({});
    useEffect( ()=>{
        fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUserInfo(data)
        })
    } ,[user?.email])
    return (
        <div className='flex justify-between items-center bg-slate-200 w-2/4 container mx-auto'>
           <div className='ml-10'>
           <h2 className='text-3xl font-semibold'>{userInfo.name}</h2>
            <h3>{userInfo.email}</h3>
            <p>{userInfo.university}</p>
            <p>{userInfo.address}</p>
            <p>{userInfo.contact}</p>
           </div>
           <label htmlFor="my-modal-3" className=""><AiFillEdit  className="h-6 w-6 mr-10 text-blue-500" /> </label>
           
            <AboutUpdateModal userInfo={userInfo}/>
        </div>
    );
};

export default About;