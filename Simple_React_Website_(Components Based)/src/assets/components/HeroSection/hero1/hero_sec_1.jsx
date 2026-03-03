import React from 'react'
import HeroText from './HeroText'
import Yapping from './yapping'

const hero_sec_1 = () => {
  return (
    <div className=' w-1/2 h-screen'>
      <div className='m-8 mt-22 ml-18 flex flex-col gap-8'>
        
        <HeroText heroContentBaby={`YOUR FEET
           DESEVES 
           THE BEST`}/>

        <Yapping yappingTextContent = {`YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.`} />
        
      </div>
    </div>
  )
}

export default hero_sec_1