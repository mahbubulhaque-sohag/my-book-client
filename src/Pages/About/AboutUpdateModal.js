import React from 'react';

const AboutUpdateModal = ({userInfo}) => {
    const {name, email, university, address, contact} = userInfo;

    const handleUpdateProfile = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const contact = form.contact.value;
        const address = form.address.value;
        const university = form.university.value;
        const updatedProfile = {name, email, contact, address, university};
        console.log(updatedProfile)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdateProfile}>
                    <label htmlFor="product-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Want to edit your profile?</h3>
                    <p>Name:<input type="text" name='name' defaultValue={name} className="input input-bordered w-full max-w-xs" /></p>
                    <p>Email: <input type="email" name='email' defaultValue={email}  className="input input-bordered w-full max-w-xs" /></p>
                    <p>Contact No: <input type="text" name='contact' defaultValue={contact} className="input input-bordered w-full max-w-xs" /></p>
                    <p>University: <input type="text" name='university' defaultValue={university} className="input input-bordered w-full max-w-xs" /></p>
                    <p>Address: <input type="text" name='address' defaultValue={address}   className="input input-bordered w-full max-w-xs" /></p>
                    <input type='submit' className="btn btn-secondary" value='submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutUpdateModal;