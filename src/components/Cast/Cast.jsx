import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast, getFilmPoster } from 'services/api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      try {
        const data = await getFilmCast(movieId);
        setCredits(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCredits();
  }, [movieId]);

  return (
    <>
      <CastList>
        {credits.length > 0 &&
          credits.map(({ credit_id, name, character, profile_path }) => (
            <li key={credit_id}>
              <img src={getFilmPoster(profile_path)} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </CastList>
    </>
  );
};

export default Cast;
