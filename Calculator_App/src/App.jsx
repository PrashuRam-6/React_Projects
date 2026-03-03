import React from 'react'
import { useState } from 'react';
import { evaluate } from 'mathjs';
const App = () => {
  const [expression, setExpression] = useState('')
  

  function handleClicks(value){
      setExpression((prev)=>prev + value)
      setdisplayExpression(expression)
  }
  function handleClear(){
      setExpression('')
     
  }

  function Calculate(){
      setExpression((evaluate(expression)).toString())
  }

  

   return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
      {/* Calculator Body */}
      <div className="w-[320px] bg-black rounded-[40px] p-5 shadow-2xl">
        
        {/* Display */}
        <div className="h-40 flex items-end justify-end">
          <span className="text-white text-6xl font-light">{expression || 0}</span>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          
          {/* Row 1 */}
          <button className="bg-gray-400 text-black h-16 rounded-full text-xl" onClick={handleClear}>AC</button>
          <button className="bg-gray-400 text-black h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('+')
          }}>±</button>
          <button className="bg-gray-400 text-black h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('%')
          }}>%</button>
          <button className="bg-orange-500 text-white h-16 rounded-full text-2xl" onClick={()=>{
            handleClicks('/')
          }}>÷</button>

          {/* Row 2 */}
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('7')
          }}>7</button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('8')
          }}>8</button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('9')
          }}>9</button>
          <button className="bg-orange-500 text-white h-16 rounded-full text-2xl" onClick={()=>{
            handleClicks('*')
          }}>×</button>

          
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl"  onClick={()=>{
            handleClicks('4')
          }}>4</button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('5')
          }}>5</button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('6')
          }}>6</button>
          <button className="bg-orange-500 text-white h-16 rounded-full text-2xl" onClick={()=>{
            handleClicks('-')
          }}>−</button>


          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('1')
          }}>1</button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('2')
          }}>2</button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('3')
          }}>3</button>
          <button className="bg-orange-500 text-white h-16 rounded-full text-2xl" onClick={()=>{
            handleClicks('+')
          }}>+</button>

          {/* Row 5 */}
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl col-span-2 text-left pl-7" onClick={()=>{
            handleClicks('0')
          }}>
            0
          </button>
          <button className="bg-gray-800 text-white h-16 rounded-full text-xl" onClick={()=>{
            handleClicks('.')
          }}>.</button>
          <button className="bg-orange-500 text-white h-16 rounded-full text-2xl"  onClick={()=>{
            Calculate()
          }}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App