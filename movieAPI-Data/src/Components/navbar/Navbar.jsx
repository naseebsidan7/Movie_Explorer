import React from 'react'
import {  FaSearch } from 'react-icons/fa'
import {  FiSearch } from 'react-icons/fi'
import {  FcSearch } from 'react-icons/fc'
import {  FaSearchengin } from 'react-icons/fa6'
import './navabar.css'

import logo from '../../assets/img/Gold Line art Video Camera for Movie Cinema Production Logo.png'
import logo2 from '../../assets/img/Clean Modern Programmer Developer Web Designer Logo(1).png'


const Navbar = () => {
  return (
    <div className='nav_container'>
       <div className='app_logo'>
              <img src={logo} alt="logo" />
        </div>


        <div className='app_logo2' >
             <a href="https://sidan-profile.netlify.app/" target='_blank'> 
             <img src={logo2} alt="logo" />
             </a>
        </div>


      
    </div>
  )
}

export default Navbar