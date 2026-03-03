import React from 'react'
import Hero_sec_1 from './hero1/hero_sec_1'
import Hero_sec_2 from './hero2/hero_sec_2'

const hero = () => {
  return (
    <div className=' w-full h-screen flex'>
        <Hero_sec_1 />
        <Hero_sec_2 />
    </div>
  )
}

export default hero