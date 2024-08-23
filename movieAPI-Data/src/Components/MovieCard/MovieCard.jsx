import React from 'react';
import './MovieCard.css';
import { Box, CardMedia, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

// Utility function to truncate the title
const truncateTitle = (title, maxLen) => {
  if (!title) return 'Title not available';
  if (title.length <= maxLen) return title;

  let truncatedTitle = title.substring(0, maxLen);
  return truncatedTitle + '...';
};


// Styled components for animations
const MovieCardContainer = styled(Box)({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
  },
});

const CardImage = styled(CardMedia)({
  transition: 'opacity 0.5s ease-in-out',
  opacity: 0,
  '&.loaded': {
    opacity: 1,
  },
});




 
const MovieCard = ({ item }) => {
  
  const titleAfterTruncate = truncateTitle(item?.originalTitle, 24);
  
   console.log(item);

  return (
    <MovieCardContainer className='movie_card' flexDirection='column'   sx={{ width: { xs: '280px', sm: '280px', md: '270px' } }}>
      <Link to={`/movieDetails/${item?.imdbId}`}>
        <CardImage
          component="img"
          className='card-image'
          image={item?.imageSet?.verticalPoster?.w480}
          sx={{
            width: { xs: '100%', sm: '278px', md: '268px' },
            height: '330px',
            borderTopRightRadius: '18px',
            borderTopLeftRadius: '18px',
          }}
          alt={titleAfterTruncate || 'Movie poster'}
          onLoad={(e) => e.target.classList.add('loaded')}
          
        />
      </Link>

      <Link to={`/movieDetails/${item?.imdbId}`}>
        <Box sx={{ p: 2 }}>
          <Typography color='white' mb='14px' fontWeight={600} >
          {titleAfterTruncate || 'Not available '}
          </Typography>
          <Box display='flex'>
            <Typography color='white' fontSize='16px'>
            ⭐ { item?.rating ? (item.rating / 10).toFixed(1) : 'N/A' }
            </Typography>
            <span style={{color:'#80808094', margin:'-2px 7px '}}> | </span>
            <Typography color='white' fontSize='16px'>
              {item?.releaseYear || 'N/A'}
            </Typography>
            <Typography marginLeft="5rem" color='gray'  fontSize='16px'>
              {item?.showType || 'N/A'}
            </Typography>
          </Box>
          
        
        </Box>
      </Link>
    </MovieCardContainer>
  );
};

export default MovieCard;
