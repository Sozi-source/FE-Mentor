import React, { useState } from 'react'

function Form() {
  
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [querytype, setQuerytype] = useState("");
const [consent, setConsent] = useState(false)


const handleSubmit =(e)=>{
e.preventDefault()

if(!consent){
    alert("Please consent before submitting");
    return
}
alert("Form data submitted successfully")

// Clear form fields
setFirstname("");
setLastname("");
setEmail("");
setQuerytype("");
setMessage("");
setConsent(false)

}

 
  
  
    return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Contact Us</h2>

        <form onSubmit={handleSubmit} className='w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6'>
            
            {/* First name */}
           <div>
            <label htmlFor="firstName" className='block text-sm font-medium text-gray-700 mb-1'>First Name</label>
            <input type="text" name='firstName' value={firstname} onChange={(e)=>setFirstname(e.target.value)} required 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           
            {/* Last name */}
            <div>
            <label htmlFor="lastName" className='block text-sm font-medium text-gray-700 mb-1'> Last Name</label>
            <input type="text" name='lastName' value={lastname} onChange={(e)=>setLastname(e.target.value)} required 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>

            {/* Email */}
            <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>

            </div>
            
            {/* Query type */}
            
            <label htmlFor="queryType" className='block text-sm font-medium text-gray-700 mb-2'>Query Type</label>
            <div className='flex gap-6 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'> 
            <label className='flex items-center space-x-2'>
            <input type="radio" value="General" checked={querytype === "General"} onChange={(e)=>setQuerytype(e.target.value)} required className='ml-3'/>General Enquiry </label>
            </div>
            <div className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'> 
            <label className='flex items-center space-x-2'>
            <input type="radio" value="Support" checked={querytype === "Support"} onChange={(e)=>setQuerytype(e.target.value)} required className='ml-3'/>Support Request </label>
            </div>
            
            
            {/* Message */}
            <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
            <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' ></textarea>
            
            {/* Consent */}
            <div className='flex items-center'>
            <input type="checkbox" name="consent" value={consent} onChange={(e)=>setConsent(e.target.checked)} required />
            <label htmlFor="consent" className='text-sm text-gray-700 ml-3'> I consent to being contacted by the team</label>
            </div>
            {/* Submit button */}
            <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200'>Submit</button>
        
        </form>
    </div>
  )
}

export default Form;