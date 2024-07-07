import React from "react";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviewList = ({ reviews }) => {
  return (
    <ul className="productReview--list">
      {reviews.map((review) => (
        <ProductReviewCard
          key={review.id}
          description={review.description}
          author={review.author}
          createAt={review.createAt}
          rating={review.rating}
          images={review.images}
        />
      ))}
    </ul>
  );
};

export default ProductReviewList;
