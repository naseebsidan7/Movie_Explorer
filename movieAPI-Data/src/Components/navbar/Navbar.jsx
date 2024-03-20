import React from 'react'
import {  FaSearch } from 'react-icons/fa'
import {  FiSearch } from 'react-icons/fi'
import {  FcSearch } from 'react-icons/fc'
import {  FaSearchengin } from 'react-icons/fa6'
import './navabar.css'

const Navbar = () => {
  return (
    <div className='nav_container'>
       <h2 className='app_heading'>
              Search <span style={{color:"#64b5f6"}}>Movies </span>
        </h2>
        <div>
     
         <FcSearch className='search_icon'/>
      
        </div>
    </div>
  )
}

export default Navbar