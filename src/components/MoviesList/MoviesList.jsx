import PropTypes from 'prop-types';

import { NavLink, useLocation } from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { MoviesListEl } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListEl>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {/* у state передаємо об'єкт із властивістю from - звідки прийшов юзер */}
            <MovieItem title={title} posterPath={poster_path} />
          </NavLink>
        </li>
      ))}
    </MoviesListEl>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
