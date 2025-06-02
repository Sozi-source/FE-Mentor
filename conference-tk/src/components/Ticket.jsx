import React, { useState } from 'react'

function Ticket() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail]= useState('');
    const [githubUser, setGithubUser]= useState('')
    const [avatar, setAvatar] = useState(null)
    const [ticketGenerated, setTicketGenerated] = useState(false)


    const handleSubmit =(e)=>{
        e.preventDefault()

        // Ensure all fields are filled.

        if (!fullname || !email || !githubUser || !avatar){
            alert("Please fill all fields and Upload Avatar")
            return
        }
        setTicketGenerated(true)
;
    }
  
    const handleAvatarChange =(e)=>{
        const file = e.target.files[0];
        setAvatar(file)

    }
  
  
    return (
    <div className='bg-gray-400 bg-cover bg-center min-h-screen flex items-center justify-center font-sans text-white px-4'>
        <div className='max-w-md w-full bg-[#0D0221]/60 p-8 rounded-xl shadow-lg'>

        {!ticketGenerated ? (
        <>
        
            <div className='text-center mb-6'>
            <h1 className='text-3xl font-bold mb-2 leading-snug'>Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
            <p className='text-sm text-gray-300'>Secure your spot at next year's biggest coding conference.</p>
            </div>

        <form onSubmit={handleSubmit}>
            {/* Avatar Upload */}
            <div className='mb-4'>
            <label htmlFor="avatar" className='block mb-1 font-semibold'>Upload Avatar</label>
            <input type="file" name='avatar' accept='image/*' onChange={handleAvatarChange}  
            className='w-full text-sm text-white bg-[#1F1B2E]/30 border border-dashed border-gray-400 p-3 rounded-md'/>
            <p className='text-xs text-gray-400 mt-1'>Upload your photo (JPG or PNG, max size: 500KB)</p>
            {/* Avatar Preview */}

            {avatar && (
                <div className='mt-2'>
                    <h3 className='text-sm font-semibold'>Avatar Preview</h3>
                    <img src={URL.createObjectURL(avatar)} alt="avatar" width={100} className='w-20 h-20 rounded-full mt-2'/>
                </div>
            )}
        </div>
            <div className='mb-4'>
                <label htmlFor="name" className='block mb-1'>Full Name</label>
                <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)} 
                className='w-full p-3 rounded-md bg-[#1F1B2E]/50 text-white border border-gray-600'/>
            </div>

            <div className='mb-4'>
                <label htmlFor="email" className='block mb-1'>Email Address</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='example@email.com'
                className='w-full p-3 rounded-md bg-[#1F1B2E]/50 text-white border border-gray-600'/>
            </div>

            <div className='mb-6'>
                <label htmlFor="githubUser" className='block mb-1'>Github Username</label>
                <input type="text" value={githubUser} onChange={(e)=>setGithubUser(e.target.value)} placeholder='@yourusername' 
                className='w-full p-3 rounded-md bg-[#1F1B2E]/50 text-white border border-gray-600'/>
            </div>

            <button type="submit" 
            className='w-full bg-primary hover:bg-pink-600 text-white font-bold py-3 rounded-md transition duration-200'> Generate My Ticket</button>
        </form>
        </>
        ):(
            <div className='bg-[#0D0221] p-6 rounded-xl shadow-xl text-white text-center'>
                {/* Ticket Header */}
                <div className='flex items-center justify-center gap-2 mb-6'>
                    <img src="/assets/images/logo-mark.svg" alt="logo"  className='w-6 h-6'/>
                    <h3 className='text-lg font-semibold'> Coding Conf </h3>
                </div>
                
                {/* Avatar */}
                <div className='flex justify-center mb-4'>
                {avatar && (
                   <img src= {URL.createObjectURL (avatar)} alt="avatar" width={100} 
                   className='w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-orange-500'/>
                )}
                
                </div>
                <h2 className='text-2xl font-bold mb-2'> Congrats, <span className='text-orange-300'>{fullname}</span> !</h2>
                <p className='text-sm text-gray-300 mb-4'>Your ticket is ready. </p>
                
                {/* Email confiemation */}
                <div>
                <p>We've emailed your ticket to <span className='text-orange-300'>{email} </span><br /> 
                     and will send updates in the run up to the event.
                </p>
                </div>

                {/* Footer information */}
                <div className='mt-4 pt-4 border-t border-gray-700'>
                    <p className='uppercase text-xs text-gray-400 tracking-wide'> Coding Conf</p>
                    <p className='text-sm'>Jan 31, 2025 &bull; Austin, TX</p>
                    <p className='text-sm mt-1 text-gray-500'> @{githubUser} </p>
                </div>
        
                </div>
        )}

        </div>
    </div>
  )
}

export default Ticket

