import React from 'react'
import { useState } from 'react'

const App = () => {
  const [bgcolorbaby, setbgcolorbaby] = useState('black')
  return (
    <div className='h-screen w-full items-end justify-center flex' style={{backgroundColor:bgcolorbaby}}>

    <div className='flex w-312 h-18 bg-amber-50 rounded-xl mb-12 items-center justify-evenly'>
      
      <button className='bg-red-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('red')
      }}>Red</button>
      <button className='bg-blue-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('blue')
      }}>Blue</button>
      <button className='bg-green-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('green')
      }}>Green</button>
      <button className='bg-yellow-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('yellow')
      }}>Yellow</button>
      <button className='bg-purple-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('purple')
      }}>Purple</button>
      <button className='bg-pink-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('pink')
      }}>Pink</button>
      <button className='bg-indigo-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('indigo')
      }}>Indigo</button>
      <button className='bg-orange-500 px-10 h-16 rounded-2xl' onClick={()=>{
        setbgcolorbaby('orange')
      }}>Orange</button>

    </div>

    </div>
  )
}

export default App