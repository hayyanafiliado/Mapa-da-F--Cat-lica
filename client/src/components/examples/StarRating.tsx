import StarRating from '../StarRating';

export default function StarRatingExample() {
  return (
    <div className="flex flex-col gap-4">
      <StarRating rating={5} size="sm" />
      <StarRating rating={5} size="md" />
      <StarRating rating={5} size="lg" />
    </div>
  );
}
