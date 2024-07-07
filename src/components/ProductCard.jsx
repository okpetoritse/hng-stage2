import FavouriteIcon from "@/assets/icons/favourite.svg?react";
import { formatPrice } from "../utils/product";
import { Link } from "react-router-dom";

const ProductCard = ({ title, tags, price }) => {
  // Call the formatPrice function to format the price
  const formattedPrice = formatPrice(price);

  return (
    <Link
      to="/product/1"
      className="productCard"
    >
      <div className="productCard--img">
        <img
          src="https://picsum.photos/400/257"
          alt="product"
        />
        <FavouriteIcon className="productCard--favourite" />
      </div>
      <div className="productCard--desc">
        <p className="productCard--title">{title}</p>
        {tags && (
          <ul className="productCard--tags">
            {tags.map((tag) => (
              <li
                className="productCard--tag"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <p className="productCard--price">{formattedPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
