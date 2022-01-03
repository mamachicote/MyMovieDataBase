// @packages
import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// @own
import { imgUrl } from './constants';

function MovieImg({
  img,
}) {
  return (
    <Box
      sx={{
        marginRight: 2,
        marginLeft: 2,
      }}
    >
      <Divider variant="middle" sx={{ marginTop: '20px', marginBottom: '20px' }} />
      <Typography sx={{ fontSize: 25, fontWeight: 'bold', marginBottom: '10px' }} variant="h6">
        Photos & Work-Arts:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {img?.backdrops?.slice(0, 20).map(img => (
          <Box sx={{ margin: 'auto', marginTop: '-50px' }}>
            <CardMedia
                component="img"
                sx={{ height: '200px', width: '200px', objectFit: 'scale-down'}}
                image={`${imgUrl}${img?.file_path}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

 export default MovieImg;