import { DetailsCard } from 'components/DetailsCard/DetailsCard';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MoreDetailsBox } from 'components/MoreDetailsBox/MoreDetailsBox';
import { getFilmDetails } from 'services/api';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import { ButtonGoBack } from '../components/Button/ButtonGoBack.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmDetails(movieId);

        setMovieInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <p style={{ textAlign: 'center' }}>
            {'Oops. Something went wrong 😔'}
          </p>
        )}
        <ButtonGoBack to={location?.state?.from ?? '/'}>Go Back</ButtonGoBack>{' '}
        {/* MovieDetails отримує об'єкт location у місці <NavLink to={`/movies/${id}`} state={{ from: location }, щоб отримати дані пишемо const location = useLocation();}> */}
        {/* якщо state містить об'єкт from, то посилаємось на нього*/}
        <DetailsCard movieDetails={movieInfo} />
        <MoreDetailsBox />
      </Container>
    </Section>
  );
};

export default MovieDetails;
