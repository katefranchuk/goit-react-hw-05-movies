import { Container } from 'components/Container/Container.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section.styled';
import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await getTrendingFilms();
        setTrendingMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <p style={{ textAlign: 'center' }}>
            {'Oops. Something went wrong 😔'}
          </p>
        )}
        <MoviesList movies={trendingMovies} />
      </Container>
    </Section>
  );
};

export default Home;
