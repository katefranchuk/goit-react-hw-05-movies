import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/api';
import { ReviewsList } from './Reviews.styled';
import { formatReviewCreatedDate } from 'services/dataFormator';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getFilmReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && (
        <p style={{ textAlign: 'center' }}>Reviews aren't found</p>
      )}
      <ReviewsList>
        {reviews.map(({ id, author, content, created_at }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
            <span>{formatReviewCreatedDate(created_at)}</span>
          </li>
        ))}
      </ReviewsList>
    </>
  );
};

export default Reviews;
