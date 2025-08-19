import React, { useState } from 'react'

function AgeCalculator() {

const [dob, setDob] = useState('');
const [age, setAge] = useState(null)
const [error, setError] = useState('')
const [name, setName] = useState('')

const CalculateAge = ()=>{
  if(!dob || !name){
    setError("Please enter both name and date of birth");
    return;

  
  }
    const birth = new Date(dob);
    const today = new Date()

   let years = today.getFullYear()- birth.getFullYear()
   let months = today.getMonth() - birth.getMonth()
   let days = today.getDate()- birth.getDate()

   if (days < 0 ){
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
   }

   if(months < 0){
    months += 12
    years--;
   }

   setAge(`You are ${years} years, ${months} months, and ${days} days old. Congratulations ${name}, you're getting older .`)
   setDob('')
   setError('')
   setName('')
}

 



  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-4'>
      <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-md'>
      <h2 className='text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-6'> 🎂 My-Age Calculator</h2>
        <div className='mb-4'>
        <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Enter Your Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} 
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' />
         </div>
      
        <div className='mb-6'>
          <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Date of Birth</label>
          <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} 
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'/>
        </div>
      
      <button onClick={CalculateAge} 
      className='w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300'> Calculate</button>
      {age && <p className='mt-6 text-green-600 font-medium text-center animate-bounce'> {age} </p> }
      { error && <p className='mt-4 text-red-500 text-sm text-center'> {error} </p> }
      </div>
    </div>
  )
}

export default AgeCalculator;