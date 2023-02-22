import axios from 'axios';
import defaultImg from '../images/no-poster.png';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6987abdd73bbf0837922d5a4f94ce9fa';
const IMAGE_PATH = `https://image.tmdb.org/t/p/w500/`;

export const getTrendingFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  return results;
};

export const getFilmsBySearch = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};

export const getFilmDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const getFilmReviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return results;
};

export const getFilmCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const getFilmPoster = url => (url ? IMAGE_PATH + url : defaultImg);
