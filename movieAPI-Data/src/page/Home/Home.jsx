import React, { useState } from 'react';
import './Home.css';
import { Stack, Box,Typography, CircularProgress } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Movies from '../../Components/Movies';
import { useQuery } from 'react-query';
import { fetchData } from '../../utils/fetchFromAPI';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState('Action');

  const { data: genreData, isLoading, error } = useQuery(
    ['genreData', selectedGenre],
    () => fetchData(`filters?country=us&series_granularity=show&genres=${selectedGenre}&order_direction=asc&order_by=original_title&year_min=2005&genres_relation=and&output_language=en&show_type=movie&rating_min=70`),
    {
      staleTime: 60000, // 1 minute
      cacheTime: 300000, // 5 minutes
    }
  );
  

  return (
    <Stack className='homePage' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '100vh' },
          borderRight: '1px solid  #3d3d3dbb',
          borderBottom: '1px solid  #3d3d3dbb',
          pb: { xs: '0', md: '10px' },
          pt: '12px',
          pl: { xs: 1, md: 3 },
        }}
      >
        <Sidebar selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      </Box>
      <Box sx={{ overflowY: 'auto', height: '100vh', flex: 2 }}>
        <Box p={2} mt='10px'>
          {isLoading ? (
            <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
                 <CircularProgress/>
             </Box>
          ) : error ? (
            <Typography color='red'>Error loading data</Typography>
          ) : (
            <Movies genreData={genreData?.shows || []} />
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;
