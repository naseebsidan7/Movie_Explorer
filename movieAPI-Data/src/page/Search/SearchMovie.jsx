 
import './search.css'
import React, { useEffect, useState } from 'react'
 
import fallbackImg  from '../../assets/img/Red and Black Graffiti Computer Error Page T-Shirt.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SearchMovie = () => {
 
 
     const [ resDetails, setResDetails ] = useState([])
     const [ img, setImg] = useState(fallbackImg)
     const { id } = useParams()

     console.log(id)
     
     useEffect(()=>{
          async function movieDetails(){
             try {
                  
                if(id){
                      const response = await axios.request(`https://www.omdbapi.com/?i=${id}&apikey=bc4364d3`)
                      setResDetails(prevState => ({ ...prevState, ...response.data }));
                      setImg(response.data.Poster || fallbackImg)
                  }else{
                   setResDetails([])
                   setImg(fallbackImg)
                  }
 
             } catch (error) {
                 setResDetails({})
                 setImg(fallbackImg)
                 console.log("fetching faild "+ error)
             }
          }
          movieDetails()
     },[ id  ])
 
  
 
  
   return (

    <div className='content_container'>
          <div className='poster_img' >
               <img src={img} alt="poster" onError={()=>  setImg(fallbackImg)} style={{width:img===fallbackImg?'300px':''}}/>
           </div>
          <div className='movie_details'>
             <div className='movie_details_right'>
               <h2 className='h2_heading'>{resDetails.Title || 'Title not available'}</h2>
               <div className='yr_rating_Rela_group'>
                    <p className='text_p'><strong style={{ display: "block" }}>Type 🎬 </strong> {resDetails.Type || 'Type not available'}</p>
                    <p className='text_p'><strong style={{ display: "block" }}>Rating⭐</strong> {resDetails.imdbRating || 'Rating not available'}</p>
                    <p className='text_p'><strong style={{ display: "block" }}>Released 📅</strong> {resDetails.Released || 'Release date not available'}</p>
               </div>
               <p className='text_p'>{resDetails.Genre ? resDetails.Genre.split(',').map((genre, index) => (
                    <span key={index} className='genre_custom'>{genre.trim()}</span>
               )) : 'Genre not available'}</p>
               <div className='about'>
                    <p className='text_p'>{resDetails.Plot || 'Plot not available'}</p>
               </div>
               
             </div>

               <div className='movie_details_left'>
               <p className='text_p custom_lines'><strong className='last_3strong'>Director</strong> {resDetails.Director || 'Director not available'}</p>
               <p className='text_p custom_lines'><strong className='last_3strong'>Writer</strong> {resDetails.Writer  || 'Writer not available'}</p>
               <p className='text_p custom_lines'><strong className='last_3strong'>Actors</strong> {resDetails.Actors  || 'Actors not available'}</p>
               </div>
          </div>
 </div>
 
   )
 
}

export default SearchMovie