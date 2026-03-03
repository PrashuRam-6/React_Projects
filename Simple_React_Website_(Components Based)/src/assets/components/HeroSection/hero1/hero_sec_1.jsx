import React from 'react'
import HeroText from './HeroText'
import Yapping from './yapping'
import Signup_buttons from '../../Navbar/login/signup_buttons'
const hero_sec_1 = () => {
  return (
    <div className='w-1/2 flex items-center'>
      <div className='px-16 flex flex-col gap-8'>
        
        <HeroText heroContentBaby={`YOUR FEET
           DESEVES 
           THE BEST`}/>

        <Yapping yappingTextContent = {`YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.`} />
        
        <div className='flex gap-8'>
        <Signup_buttons contentofthatbutton = {'Shop Now'} />
        <Signup_buttons contentofthatbutton = {'Category'} />
        
        </div>

          <div className='flex align-center gap-4 flex-col'>
          <h1 className='text-gray-400'>Also Availble On</h1>
          <div className='flex gap-4'>
          <a href=""><img className='h-12'  src="https://www.freelogovectors.net/wp-content/uploads/2025/07/flipkart-logo-icon-freelogovectors.net_.png" alt="" /></a>
          <a href=""><img className='h-12' src="https://www.freeiconspng.com/uploads/amazon-icon-9.png" alt="" /></a>
         </div>
          </div>


      </div>
    </div>
  )
}

export default hero_sec_1