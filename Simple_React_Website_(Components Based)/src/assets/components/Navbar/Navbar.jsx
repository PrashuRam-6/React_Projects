import React from 'react'
import Midlinks from './midlinks'
import { logoLinks } from '../../images/logo'
import Signup_buttons from './login/signup_buttons'

const Navbar = () => {
  return (
    <div className='flex align-center justify-between mx-8 gap-4 text-2xl mt-2'>
      
      {/* Image */}
      <img src={logoLinks} alt="" className='h-14'/>

      {/* Links */}
      <div className='flex justify-center align-center gap-6'>
      <Midlinks title={'MENUE'}/>
      <Midlinks title={'LOCATION'}/>
      <Midlinks title={'ABOUT'}/>
      <Midlinks title={'CONTACT'}/>
      </div>

      {/* Signup/Login Buttons */}
    <div className='flex gap-4'>
      <Signup_buttons contentofthatbutton = {'Login'} />
      <Signup_buttons contentofthatbutton = {'Signup'} />
      </div>

    </div>
  )
}

export default Navbar