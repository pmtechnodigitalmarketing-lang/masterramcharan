// Reusable Review / AggregateRating generators. Not wired into any page yet —
// wire these in only once real, verifiable rating data exists. Google's
// structured data guidelines prohibit self-serve/fabricated ratings.

export const buildReviewSchema = (testimonial, itemReviewedRef) => ({
  "@type": "Review",
  reviewBody: testimonial.quote,
  author: { "@type": "Person", name: testimonial.name },
  ...(itemReviewedRef && { itemReviewed: itemReviewedRef }),
});

export const buildAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  itemReviewedRef,
} = {}) => {
  if (!ratingValue || !reviewCount) return null;

  return {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount,
    ...(itemReviewedRef && { itemReviewed: itemReviewedRef }),
  };
};
