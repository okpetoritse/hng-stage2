import React from "react";
import { Rating } from "react-simple-star-rating";

const ProductReviewCard = ({
  description,
  author,
  createAt,
  rating,
  images,
}) => {
  return (
    <li className="productReview--item">
      <img
        src="/images/avatar.png"
        alt="avatar"
        className="productReview--avatar"
      />
      <div className="productReview--desc">
        <Rating
          size={16}
          initialValue={rating.average}
          allowFraction={true}
        />

        <p className="productReview--comment">{description}</p>
        {images && (
          <div className="productReview--images">
            {images.map((image) => (
              <img
                key={image}
                src={image}
                alt="review"
                className="productReview--image"
              />
            ))}
          </div>
        )}
        <div className="productReview--info">
          <p className="productReview--name">{author.fullName}</p>
          <p className="productReview--date">{createAt}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductReviewCard;
