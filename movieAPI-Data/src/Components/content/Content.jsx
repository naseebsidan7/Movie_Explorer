import React, { useEffect, useState } from 'react'
import './content.css'
import { movieData } from '../../constants'

import axios from 'axios'
 
const Content = () => {

    const [ resDetails, setResDetails ] = useState([])

    useEffect(()=>{
         async function movieDetails(){
            try {
                const response = await axios.request(`http://www.omdbapi.com/?i=tt0499549&apikey=bc4364d3`)
                 setResDetails(response.data)
               
            } catch (error) {
                console.log("fetching faild "+ error)
            }
         }
         movieDetails()
    },[])


    useEffect(()=>{
        console.log(resDetails)
    },[ resDetails ])

  return (
    <div className='content_container'>
         
         <div className='poster_img'>
               <img src={movieData.Poster} alt="" />
         </div>

         <div className='movie_details'>
                <h2 className='h2_heading'>{movieData.Title}</h2>
             <div className='yr_rating_Rela_group'>
                <p className='text_p'><strong style={{display:"block"}}>Year</strong> {movieData.Year}</p>
                <p className='text_p'><strong style={{display:"block"}}>Rating⭐</strong> {movieData.Rated}</p>
                <p className='text_p'><strong style={{display:"block"}}>Released 📅</strong> {movieData.Released}</p>
             </div>
         
            <p className='text_p'>{
               movieData.Genre.split(',').map((genre,index)=>(
                   <span key={index} className='genre_custom'>{ genre.trim()}</span>
               ))
            }</p>

            <div className='about'>
               <p className='text_p'>{movieData.Plot}</p>
            </div>

            <p className='text_p custom_lines'><strong className='last_3strong'>Director</strong> {movieData.Director}</p>
            <p className='text_p custom_lines'><strong className='last_3strong'>Writer</strong> {movieData.Writer}</p>
            <p className='text_p custom_lines'><strong className='last_3strong'>Actors</strong> {movieData.Actors}</p>
           
         </div>
    </div>
  )
}

export default Content