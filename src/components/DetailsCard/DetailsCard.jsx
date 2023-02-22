import PropTypes from 'prop-types';
import { getFilmPoster } from 'services/api';
import { formatReleaseDate } from 'services/dataFormator';
import { FilmPoster } from './DetailsCard.styled';

export const DetailsCard = ({ movieDetails }) => {
  // const getGenres = genres => {
  //   return genres.map(genre => genre.name).join(', ');
  // };

  const getGenres = genres => {
    return genres.map(genre => <li key={genre.id}>{genre.name}</li>);
  };

  return (
    <>
      {Boolean(movieDetails) && (
        <div style={{ display: 'flex', marginTop: '32px' }}>
          <FilmPoster
            src={getFilmPoster(movieDetails.poster_path)}
            alt={movieDetails.title}
          />
          <div>
            <h2>
              {movieDetails.title} (
              {formatReleaseDate(movieDetails.release_date)})
            </h2>
            <p>Rating</p>
            <p>{movieDetails.vote_average.toFixed(1)}</p>
            <p>Overview</p>
            <p>{movieDetails.overview}</p>
            <p>Genres</p>
            <ul style={{ display: 'flex' }}>
              {getGenres(movieDetails.genres)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

DetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
