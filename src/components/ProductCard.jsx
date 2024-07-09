import FavouriteIcon from "@/assets/icons/favourite.svg?react";
import FavouriteFilledIcon from "@/assets/icons/favourite-filled.svg?react";
import FavoritesContext from "@/contexts/FavoritesContext";
import { formatPrice } from "../utils/product";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";

const ProductCard = ({ id, title, tags, price, images }) => {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoritesContext);

  const formattedPrice = formatPrice(price);

  const productCardRef = useRef(null);

  const handleAddFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addFavorite({ id, title, tags, price, images });
    setTimeout(() => {
      const favouriteIcon = productCardRef.current.querySelector(
        ".productCard--favourite"
      );
      favouriteIcon.classList.add("filled");
    }, 100);

    // setTimeout(() => {
    //   favouriteFilledRef.current.classList.remove("filled");
    // }, 3000);
  };

  const handleRemoveFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Removing favorite: ", id);
    removeFavorite(id);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="productCard"
      ref={productCardRef}
    >
      <div className="productCard--img">
        <img
          src={images[0]}
          alt="product"
        />
        {favorites.some((product) => product.id === id) ? (
          <FavouriteFilledIcon
            className="productCard--favourite"
            onClick={handleRemoveFavorite}
          />
        ) : (
          <FavouriteIcon
            className="productCard--favourite"
            onClick={handleAddFavorite}
          />
        )}
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
