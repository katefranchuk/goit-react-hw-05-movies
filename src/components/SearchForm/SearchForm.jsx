import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const SearchForm = ({ onFormSubmit, defaultValue }) => {
  const [filmName, setFilmName] = useState(defaultValue);

  const handleChange = event => {
    setFilmName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!filmName.trim()) {
      //тобто пустий рядок
      toast.info('Enter some text to search');
      setFilmName('');
      return;
    }

    onFormSubmit(filmName);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        name="filmName"
        value={filmName}
        type="text"
        onChange={handleChange}
      />
      <button type="button">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
