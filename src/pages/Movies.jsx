import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { getFilmsBySearch } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section.styled';
import { Container } from 'components/Container/Container.styled';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmQuery = searchParams.get('filter') || '';

  useEffect(() => {
    if (!filmQuery) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const { results } = await getFilmsBySearch(filmQuery);

        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }

        setSearchedFilms(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();

    return () => {};
  }, [filmQuery]);

  const formSubmitHendler = query => {
    setSearchParams(query !== '' ? { filter: query } : {});
  };

  return (
    <Section>
      <Container>
        <SearchForm onFormSubmit={formSubmitHendler} defaultValue={filmQuery} />
        {isLoading && <Loader />}
        {error && (
          <p style={{ textAlign: 'center' }}>
            {'Oops. Something went wrong 😔'}
          </p>
        )}
        {!isEmpty ? (
          <MoviesList movies={searchedFilms} />
        ) : (
          <p style={{ textAlign: 'center' }}>Sorry. There are no films.</p>
        )}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Container>
    </Section>
  );
};

export default Movies;
