import { Stack } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard/MovieCard'

const Movies = ({ genreData }) => {

  return (
    <Stack  flexDirection='row' flexWrap='wrap' justifyContent={{xs:'center',md:'start'}} alignItems='start' gap={3} padding={2.5} >
                   
    { genreData.map((item, index)=>(
    
      <MovieCard  key={index} item={item}  />
     
     ))}
    </Stack>
  )
}

export default Movies