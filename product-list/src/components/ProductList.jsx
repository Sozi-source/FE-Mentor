import React, { useState } from 'react'
import ProductData from '../Data/data.json'

function ProductList() {

  const [cart, setCart]= useState([])

  const addToCart = (product)=>{
    const exist = cart.find(item=>item.name===product.name)

    if (exist){
      setCart(cart.map(item=>
        item.name===product.name ? {...item, quantity:item.quantity +1} : item));
    }
    else{
      setCart([...cart, {...product, quantity : 1}])
    }
    
  }

  const removeFromCart = (product)=>{
    const exist = cart.find(item=>item.name===product.name)

    if (exist.quantity === 1){
      setCart(cart.filter((item)=>item.name !== product.name))
    }
    else{
      setCart(cart.map((item)=>item.name === product.name? {...item, quantity:item.quantity -1}: item))
    }
  }

  const handleCheckout =()=>{
    if(cart.length === 0){
      alert("Your Cart is empty. Please add items before checkout")
      return
    } 

    alert(`Thank you for your purchase! Total: $ ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`)
  }
  
  
    return (
    <div className='flex max-w-7xl mx-auto px-4 py-6 gap-6'>
      <div className='flex-1'>
          <h2 className='text-3xl font-bold mb-6 text-center'>🍰 Product List</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          
          {ProductData.map(item=>(
          <div key={item.name} 
          className='bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition'>
            <img src={item.image.mobile.replace('./', '/')} alt="" />
            <h3 className='text-lg font-semibold'>{item.name} </h3>
            <p>{item.category} </p>
            <p className='text-gray-600'>${item.price.toFixed(2)} </p>
            <button onClick={()=>addToCart(item)} 
            className='mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Add to Cart</button>
          </div>
        ))}
        
        </div>
      </div>
       {/* side bar (Cart) */}
        <div className='w-80 bg-white shadow-lg rounded-lg p-4 sticky top-6 self-start h-[80vh] overflow-auto'>
        <h2 className='text-2xl font-bold mb-4'> 🛒 Cart</h2>
        {cart.length === 0?(
          <p className='text-gray-500 text-center'>Cart is empty</p>
        ):(
        <div className='space-y-4'>
            {cart.map((item)=>(
            
            <div key={item.name} 
            className='bg-white shadow-sm border rounded-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>

              <div>
                <span>{item.name} </span> <br />
                <span>{item.quantity} * ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            <button onClick={()=> removeFromCart(item)} 
            className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'>Remove </button>
            </div>
          ))}
        </div>
        )}
        
      {/* // Checkout Button */}
      <button onClick={handleCheckout} 
      className='w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:bg-gray-400' disabled = {cart.length === 0}> Checkout</button>
      
      </div>

      
      </div>
)
}

export default ProductList;