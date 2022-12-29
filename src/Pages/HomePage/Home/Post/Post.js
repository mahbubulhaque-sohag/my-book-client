import React, { useContext }  from 'react';
import { useForm } from 'react-hook-form';
import { HiPhotograph } from "react-icons/hi";
import { authContext } from '../../../../context/AuthProvider';

const Post = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(authContext);

    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const onSubmit = (data) => {
        const text = data.text;
        const image = data.image[0];
        console.log(image, text)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            console.log(imgData)
            if(imgData.success){
                console.log(imgData.data.url);
                const post = {
                        text : data.text,
                        image : imgData.data.url,
                        like: 0,
                        user : {
                           userName : user?.displayName, 
                           userEmail : user?.email,
                           userPhoto : user?.photoURL,
                        }
                    }
                    console.log(post)

                    // save product information to the database
                    fetch('http://localhost:5000/posts',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(post)
                    })
                    .then(res=> res.json())
                    .then(result=>{
                        console.log(result)
                    })
            }
        })
    }

    return (
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
            <textarea className="textarea textarea-bordered w-1/4" placeholder="What's in your mind" type='text' {...register("text")} name='text'></textarea>
            <div className='flex flex-col'>
                <div className="form-control w-full max-w-xs">
                    <label  htmlFor="image" className="label"><span className="label-text"><HiPhotograph className="h-6 w-6 text-blue-500" /> upload photo</span></label>
                    <input  id="image" type="file" {...register("image")} className="input input-bordered w-full max-w-xs hidden" />
                </div>
            </div>
            <div>
                <input className='btn btn-sm btn-primary' type='submit' value='Post' />
            </div>
        </form>
    );
};

export default Post;