import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Content from '../content/Content'

import './search.css'

const SearchMovie = () => {
 
    const [ resData, setResData ] = useState([])
    const [ searchData, setSearchData ] = useState("")
    const [ id, setId ] = useState(null)

  //setting input changing data to searchData() useState
    const HandleSearch=(event)=>{
         setSearchData(event.target.value)
    }

    // fetching data with api request according to search input
    useEffect(()=>{
          async function ApiRequesting(){
              try {
                const response = await axios.request(`http://www.omdbapi.com/?s=${searchData}&page=1&apikey=bc4364d3`)
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
  const HandleSetId=( imdbId )=>{
      setId(imdbId)
      setResData([])
  }
 

     return (
        
           <div className='wrapper' >
                
                <div className='input_feild' >
                    <input type="text" value={searchData} onChange={ HandleSearch } placeholder='Search Movie..' />
                </div>
                
                      <div className='movie_list_container'>
                        {
                          resData &&  resData.map((movie)=>(
                              <div className='movie_list' key={movie.imdbID} onClick={()=> HandleSetId(movie.imdbID)}>
                                    
                                    <img src={movie.Poster} alt="poster" />
                                  
                                    <div className='movie-title'>
                                        <h3>{movie.Title}</h3>
                                        <p>{movie.Year}</p>
                                    </div>
                              </div>
                          ))
                        }</div>
                       

                      
                      { id &&  <Content imdbId={id}  />}
                       

                 
              </div>
      
     )
}

export default SearchMovie