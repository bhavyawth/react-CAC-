import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
    <img src={logo}
    className='w-16'/>
  )
}

export default Logo