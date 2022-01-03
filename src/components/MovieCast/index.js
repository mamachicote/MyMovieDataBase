// @packages
import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// @own
import { imgUrl } from './constants';

function MovieCast({ cast }) {
  return (
    <Box
      sx={{
        marginRight: 2,
        marginLeft: 2,
      }}
    >
      <Divider variant="middle" sx={{ marginTop: '20px', marginBottom: '20px' }} />
      <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} variant="h6">
        Cast:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {cast?.cast?.slice(0, 12).map(char => (
          <Box
            sx={{
                height: 180,
                justifyContent: 'center',
                margin: 'auto',
                width: 180,
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: '50%', width: '50%', borderRadius: 20 }}
              image={`${imgUrl}${char?.profile_path}`}
            />
            <Box>
              <Typography
                component="div"
                sx={{ fontSize: 15, fontWeight: 'bold' }}
                variant="h5"
              >
                {char?.name}
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12 }}
                variant="h6"
              >
                as {char?.character}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

 export default MovieCast;