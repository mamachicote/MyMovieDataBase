// @packages
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// @app
import MovieCard from '../MovieCard';

// @own
import { apiUrl } from './constants';

function Search() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState({});
  const [success, setSuccess] = useState(false);

  const getMovies = () => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: apiUrl,
      params: {
        query: input,
      },
    };

    if (input !== '') {
      axios.request(options).then(function (response) {
        setResult(response.data);
        setSuccess(3000, true);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }

  return (
    <>
      <Box
        sx={{
          borderRadius: '10px',
          color: 'rgb(125, 170, 215)',
          display: 'flex',
          fontFamily: 'Rubik',
          margin: 'auto',
          marginTop: '20px',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            margin: 'auto',
            textAlign: 'center',
          }}
          variant="h2"
        >
          My Movie Date Base
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgb(210, 210, 210)',
          borderRadius: '10px',
          display: 'flex',
          fontFamily: 'Rubik',
          margin: 'auto',
          marginTop: '20px',
          padding: '10px',
          width: '75%',
          '&:hover': {
            backgroundColor: 'rgb(255, 255, 255, 0.85)',
          },
        }}
      >
        <TextField
          sx={{
            marginRight: '20px',
            width: '100%',
          }}
          label="Search a movie"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          variant="outlined"
        />
        <Button
          sx={{
            backgroundColor: 'rgb(60, 90, 240)',
            borderColor: 'rgb(52, 79, 211)',
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Rubik',
            fontSize: '20px',
            '&:hover': {
              backgroundColor: 'rgb(55, 110, 200)',
              borderColor: 'rgb(215, 215, 215)',
              color: 'rgb(215, 215, 215)',
              },
          }}
          size="medium"
          variant="outlined"
          onClick={() => getMovies()}
        >
          Go!
        </Button>
      </Box>
      {success && <MovieCard result={result} input={input} />}
    </>
  );
}

 export default Search;