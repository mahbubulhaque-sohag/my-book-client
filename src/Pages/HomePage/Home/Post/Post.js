import React from 'react';
import { useForm } from 'react-hook-form';
import { HiPhotograph } from "react-icons/hi";

const Post = () => {
    const { register,  data } = useForm();

    const handleOnSubmit = (data) =>{
        // event.preventDefault();
        // const text = event.target.text.value;
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        // const url =`https://api.imgbb.com/1/upload?key=509f8ce720ff9796d0f75f1e5c8e002b`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            console.log(imgData)
        })
    }
    return (
        <form className='flex flex-col' onSubmit={handleOnSubmit}>
            <textarea className="textarea textarea-bordered w-1/4" placeholder="What's in your mind" name='text'></textarea>
            <div className='flex flex-col'>
                {/* <label htmlFor="image" className='text-xl font-semibold'><HiPhotograph className="h-6 w-6 text-blue-500" /> upload photo</label> */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Image</span></label>
                    <input id="image"  type="file"  {...register("image")}  className="input input-bordered w-full max-w-xs hidden" />
                </div>
                {/* <input className='hidden' type="file" id="imageFile" name="imageFile" multiple /> */}
            </div>
            <div>
            <input className='btn btn-sm btn-primary' type='submit' value='Post'/>
            </div>
        </form>
    );
};

export default Post;