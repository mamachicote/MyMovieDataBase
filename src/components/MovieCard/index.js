// @packages
import React from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import isEmpty from 'lodash/isEmpty';

// @own
import { imgUrl } from './constants';

function MovieCard({ result }) {
  const hasResults = !isEmpty(result?.results);

  const history = useHistory();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {hasResults   ?
        <>
          {result?.results?.slice(0, 8).map(m => (
              <Card
                sx={{
                  backgroundColor: 'rgb(210, 210, 210)',
                  fontFamily: 'Rubik',
                  height: '100%',
                  margin: 2,
                  width: 300,
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'rgb(255, 255, 255, 0.95)',
                  },
                }}
                onClick={() => {
                  history.push(`/movie/${m?.id}`, m?.id)
                }}
                variant="outlined"
              >
                <Box
                  sx={{
                    fontFamily: 'Rubik',
                    height: 100,
                    margin: '5px',
                    overflow: 'hidden',
                  }} >
                  <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} variant="h4">
                    {m?.title}
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    {m?.overview}
                  </Typography>
                </Box>
                {m?.poster_path &&
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: 1,
                      margin: 'auto',
                      maxHeight: '400px',
                      width: '300px',
                    }}
                    image={`${imgUrl}${m?.poster_path}`}
                  />
                }
              </Card>
          ))}
        </>
      :
      <Typography
        variant="h3"
        sx={{
        backgroundColor: 'rgb(210, 210, 210)',
          borderRadius: '10px',
          fontFamily: 'Rubik',
          marginTop: 5,
          padding: 2,
          textAlign: 'center',
          width: '75%',
        }}
      >
        Are you sure that's the name of your movie? Please try again with another.
      </Typography>
      }
    </Box>
  );
}

 export default MovieCard;