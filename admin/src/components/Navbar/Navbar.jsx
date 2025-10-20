import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2><b>ECOBITE.</b></h2>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
