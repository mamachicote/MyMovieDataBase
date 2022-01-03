// @packages
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import isEmpty from 'lodash/isEmpty';

// @app
import MovieCast from '../MovieCast';
import MovieImg from '../MovieImg';

// @own
import { imgUrl, apiUrl, apiKey } from './constants';

function MovieDetail() {
  const [cast, setCast] = useState();
  const [detail, setdetail] = useState({});
  const [img, setImg] = useState();
  const history = useHistory();

  const hasResults = !isEmpty(detail);

  const id = history?.location?.state;

  useEffect(() => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: `${apiUrl}/${id}/credits?api_key=${apiKey}`,
    };

    axios.request(options).then(function (response) {
      setCast(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [detail, id]);

  useEffect(() => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: `${apiUrl}/${id}/images?api_key=${apiKey}`,
    };

    axios.request(options).then(function (response) {
      setImg(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [detail, id]);

  useEffect(() => {

    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: `${apiUrl}/${id}?api_key=${apiKey}`,
    };

    axios.request(options).then(function (response) {
      setdetail(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [id])


  return (hasResults &&
    <Box sx={{ justifyContent: 'center', marginBottom: '20px' }}>
      <Card
        sx={{
          backgroundColor: 'rgb(210, 210, 210)',
          borderRadius: '10px',
          display: 'block',
          fontFamily: 'Rubik',
          margin: 'auto',
          marginTop: '20px',
          padding: '10px',
          width: '75%',
        }}>
      <Breadcrumbs aria-label="rubik">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography>{detail?.title}</Typography>
      </Breadcrumbs>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'block' }} >
            <CardContent sx={{ width: '100%' }} >
              <Typography sx={{ fontWeight: 'bold' }} variant="h4">
                {detail?.title}
              </Typography>
              <Box sx={{ display: 'flex' }} >
                <Typography>
                  <b>Premiere:</b> {detail?.release_date} |
                </Typography>
                <Typography sx={{ marginLeft: '3px' }}>
                  <b>Duration:</b> {detail?.runtime}m
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 14 }}>
                {detail?.overview}
              </Typography>
            </CardContent>
            <CardContent sx={{ fontSize: 14, display: 'flex' }} >
              <Typography sx={{ }}>
                <b>Rating:</b> {detail?.vote_average}/10 ({detail?.vote_count}) |
              </Typography>
              <Typography sx={{ marginLeft: '8px' }}>
                <b>Populatiry:</b> {detail?.popularity} |
              </Typography>
              <Typography sx={{ marginLeft: '8px' }}>
                <b>Status:</b> {detail?.status}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              height: '300px',
              objectFit: 'scale-down',
              marginTop: '20px',
            }}
            image={`${imgUrl}${detail?.poster_path}`}
          />
        </Box>
        {cast && <MovieCast cast={cast} />}
        {img && <MovieImg img={img} />}
      </Card>
    </Box>
  );
}

 export default MovieDetail;