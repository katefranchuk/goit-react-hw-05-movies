import { format } from 'date-fns';

export const formatReleaseDate = date => {
  return format(Date.parse(date), 'yyyy');
  // (new Date(), 'yyyy')
};

export const formatReviewCreatedDate = date => {
  return format(Date.parse(date), 'dd MMMM yyyy, HH:mm');
};
