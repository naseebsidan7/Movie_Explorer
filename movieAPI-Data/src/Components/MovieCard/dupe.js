import React from 'react';
import './MovieCard.css';
import { Box, CardMedia, Typography, CircularProgress, styled } from '@mui/material';
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
    transform: 'scale(1.04)',
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
  if(!item) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  const titleAfterTruncate = truncateTitle(item?.originalTitle, 24);
 
  return (
    <MovieCardContainer className='movie_card' flexDirection='column' sx={{ width: { xs: '280px', sm: '280px', md: '270px' } }}>
      <Link to={`/movieDetails/${item?.imdbId}`}>
        <CardImage
          component="img"
          className='card-image'
          image={item?.imageSet?.verticalPoster?.w720}
          sx={{
            width: { xs: '100%', sm: '278px', md: '268px' },
            height: '330px',
            borderTopRightRadius: '18px',
            borderTopLeftRadius: '18px',
          }}
          onLoad={(e) => e.target.classList.add('loaded')}
        />
      </Link>

      <Link to={`/movie/${item?.id}`}>
        <Box sx={{ p: 2 }}>
          <Typography color='white' mb='5px'>
            {titleAfterTruncate}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography color='white' fontSize='16px'>
              ⭐ {item?.rating}
            </Typography>
            <Typography color='white' fontSize='16px'>
              {item?.releaseYear}
            </Typography>
          </Box>
        </Box>
      </Link>
    </MovieCardContainer>
  );
};

export default React.memo(MovieCard);
