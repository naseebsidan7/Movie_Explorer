import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './navabar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/Gold Line art Video Camera for Movie Cinema Production Logo.png'
import logo2 from '../../assets/img/Clean Modern Programmer Developer Web Designer Logo(1).png'
 

const Navbar = () => {

  
  const [ resData, setResData ] = useState([])
  const [ searchData, setSearchData ] = useState("")

    //setting input changing data to searchData() useState
    const HandleSearch=(event)=>{
      setSearchData(event.target.value)
    }


 // fetching data with api request according to search input
 useEffect(()=>{
       const ApiRequesting = async ()=>{
           try {
             const response = await axios.request(`https://www.omdbapi.com/?s=${searchData}&page=1&apikey=bc4364d3`)
              setResData(response.data.Search)
           } catch (error) {
              console.log("fetching faild "+ error)
           }
       }

       if(searchData.trim() !== ""){
         ApiRequesting()
       }else{
         setResData([])
       }

 },[searchData])


 // setting clicked list id to useState
const HandleSetId=()=>{
   setResData([])
   setSearchData('')
}


  return (
 
    <div className='nav_container'>
      <Link to='/'>
        <div className='app_logo'>
                <img src={logo} alt="logo" />
          </div>
      </Link>


      
       

       <div className='rightSide'>

          <div className='wrapper ' >
                    
                    <div className='input_feild'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="search">
                          <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2 2)">
                                <circle cx="9.767" cy="9.767" r="8.989"></circle>
                                <line x1="16.018" x2="19.542" y1="16.485" y2="20"></line>
                            </g>
                        </svg>
                        <input type="text" value={searchData} onChange={HandleSearch} placeholder='Search everything' />
                    </div>
        
                        
                              <div className='movie_list_container'>
                  
                                { resData && 
                                   resData.map((movie)=>(

                                     <Link to={`/movieDetails/${movie.imdbID}`}  key={movie.imdbID}>
                                        <div className='movie_list' onClick={()=> HandleSetId()}>
                                                
                                                <img src={movie.Poster} className='poster' alt="poster" />
                                              
                                                <div className='movie-title'>
                                                    <h3>{movie.Title}</h3>
                                                    <p>{movie.Year}</p>
                                                </div>
                                          </div>
                                     </Link>
                                  ))
                                }</div>
                              
                              
        
                        
                      </div>
        
                      <div className='app_logo2' >
                    <a href="https://sidan-profile.netlify.app/" target='_blank'> 
                    <img src={logo2} alt="logo" />
                    </a>
                    </div>

          </div>
    
    
      
    </div>
  
  )
}

export default Navbar