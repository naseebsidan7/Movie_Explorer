import React from 'react'
import './Sidebar.css'
import { Stack } from '@mui/material'
import { genres } from '../../utils/contants'

const Sidebar = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <Stack direction='row'
           className='side_bar'
           sx={{overflowY:'auto',
                height:{sx:'auto',md:'100%'}, 
                flexDirection:{md:'column'},
                pr:'35px',
                pb:'14px'
               }}
         
    >
      {genres.map((genre)=>(
            <button className='category-btn'
                    key={genre.id}
                    onClick={()=>setSelectedGenre(genre.name)}
                    style={{
                        background:  genre.name==selectedGenre &&  '#282222ad',
                       color: 'white'
                    }}
            >
                   <img  style={{ width:'25px', height:'20px',marginRight:'15px' }} src={genre.icon} alt={`${genre.name} icon`} />
                  <span style={{ opacity: genre.name !== selectedGenre? '.7':'1' }}>{genre.name}</span>
            </button>
      ))}

    </Stack>
  )
}

export default Sidebar