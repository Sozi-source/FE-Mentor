import React, { useEffect, useState } from 'react'

function Advice() {

    const [slip, setSlip] = useState('');

    const fetchAdvice = async()=>{
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        setSlip(data.slip)
    }
  
    useEffect(()=>{
        fetchAdvice()
    },[])
  
  
  
  
    return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900 px-4'>
        <div className='bg-blue-950 w-full max-w-sm p-6 rounded-2xl shadow-lg text-white space-y-4'>
        <h2 className='text-xl font-semibold text-center text-green-300'>Advice #{slip.id} </h2>
        <p className='text-base text-center leading-relaxed'>{slip.advice} </p>

        <img src="/public/images/pattern-divider-mobile.svg" alt="" />
        
        <div className='flex justify-center'>
            <button onClick={fetchAdvice} className='bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300'> <img src="/public/images/icon-dice.svg" alt="" /></button>
        </div>
        </div>
    </div>
  )
}

export default Advice;