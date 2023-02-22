import PropTypes from 'prop-types';
import { getFilmPoster } from 'services/api';

export const MovieItem = ({ title, posterPath }) => {
  return (
    <>
      <img src={getFilmPoster(posterPath)} alt={title} />
      <h2>{title}</h2>
    </>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};
