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
            <input type="file" name='avatar' accept='image/*' onChange={handleAvatarChange} placeholder='Drag and drop or click to upload' 
            className='w-full text-sm text-white bg-[#1F1B2E]/30 border border-dashed border-gray-400 p-3 rounded-md'/>
            <p className='text-xs text-gray-400 mt-1'>Upload your photo (JPG or PNG, max size: 500KB)</p>
            {/* Avatar Preview */}

            {avatar && (
                <div>
                    <h3>Avatar Preview</h3>
                    <img src={URL.createObjectURL(avatar)} alt="avatar" width={100}/>
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
            <div>
                <h3>Your Ticket </h3>
                {avatar && (
                   <img src="/public/assets/images/pattern-ticket.svg" alt="ticket" />
                )}
                <p> Full Name: {fullname} </p>
                <p> Email Address: {email} </p>
                <p> Github Username: {githubUser} </p>
                <button></button>

            </div>  
        )}

        </div>
    </div>
  )
}

export default Ticket