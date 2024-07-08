import FavouriteIcon from "@/assets/icons/favourite.svg?react";
import FavoritesContext from "@/contexts/FavoritesContext";
import { formatPrice } from "../utils/product";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ProductCard = ({ id, title, tags, price, images }) => {
  const { addFavorite } = useContext(FavoritesContext);

  const formattedPrice = formatPrice(price);

  const handleAddFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addFavorite({ id, title, tags, price, images });
  }

  return (
    <Link
      to="/product/1"
      className="productCard"
    >
      <div className="productCard--img">
        <img
          src={images[0]}
          alt="product"
        />
        <FavouriteIcon
          className="productCard--favourite"
          onClick={handleAddFavorite}
        />
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
