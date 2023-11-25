import Review from '../review/review';
import { ReviewType } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { PropsWithChildren } from 'react';
import { MAX_REVIEWS } from '../../const';
import { getReviews } from '../../store/reviews-data/selectors';


function ReviewsList({children}: PropsWithChildren): JSX.Element {
  const reviews = useAppSelector(getReviews);

  const sortedReviews = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews?.map((item: ReviewType) => (
          <Review key={item.id} review={item} />
        ))}
      </ul>
      {children}
    </section>
  );
}

export default ReviewsList;