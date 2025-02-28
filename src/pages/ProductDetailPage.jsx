import { Rating } from "react-simple-star-rating";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import TagIcon from "@/assets/icons/tag.svg?react";
import FavouriteIcon from "@/assets/icons/favourite.svg?react";
import FavouriteFilledIcon from "@/assets/icons/favourite-filled.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import PaymentIcon from "@/assets/icons/payment-card.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import RotateIcon from "@/assets/icons/rotate.svg?react";
import { reviews } from "@/data/products";
import ProductReviewList from "@/components/ProductReviewList";
import { formatPrice } from "@/utils/product";
import "@/styles/ProductDetail.css";
import { useContext, useEffect, useMemo } from "react";
import CartContext from "@/contexts/CartContext";
import FavoritesContext from "@/contexts/FavoritesContext";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";

const ProductDetailPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const { id } = useParams();

  const inCart = useMemo(() => {
    return cart.some((product) => product.id === parseInt(id));
  }, [cart, id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const product = useMemo(() => {
    return products.find((product) => product.id === parseInt(id));
  }, [id]);

  const isFavourite = useMemo(() => {
    return favorites.some((f) => f.id === parseInt(id));
  }, [id, favorites]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(parseInt(id));
  };

  const handleAddFavorite = () => {
    addFavorite(product);
  };

  const handleRemoveFavorite = () => {
    removeFavorite(parseInt(id));
  };

  return (
    <main className="productDetailMain container">
      <Breadcrumb data={["Product List", "Female Shoe", "Product details"]} />
      <div className="productImage">
        <img
          src={product.images[0]}
          alt="product"
        />
      </div>
      <section className="productDetail">
        <div className="productDetail--info">
          <h1 className="productDetail--title">{product.title}</h1>
          <div className="productRating">
            <Rating
              size={16}
              initialValue={5}
              allowFraction={true}
            />
            <p className="productRating--count">{227}</p>
          </div>
          <p className="productDetail--price">
            {formatPrice(product.price)}{" "}
            <span className="productDetail--price-slash">
              {formatPrice(product.price * 2)}
            </span>
          </p>
          <p className="productDetail--discount">
            <TagIcon /> Save 50% right now
          </p>
          <p className="productDetail--color-text">Colors</p>
          <ul className="productDetail--colors">
            {product.colors.map((color) => (
              <li
                key={color}
                className="productDetail--color"
                style={{ background: color }}
              ></li>
            ))}
          </ul>
          <div className="productDetail--buttons">
            <button
              className={`productDetail--cart ${
                inCart && "productDetail--cart-remove"
              }`}
              onClick={inCart ? handleRemoveFromCart : handleAddToCart}
            >
              {inCart ? "Remove From Cart" : "Add To Cart"}
            </button>

            <button
              className="productDetail--favourite"
              onClick={isFavourite ? handleRemoveFavorite : handleAddFavorite}
            >
              {isFavourite ? <FavouriteFilledIcon /> : <FavouriteIcon />}
            </button>
          </div>
        </div>
        <p className="productDetail--addInfo">
          <CartIcon /> Free shipping worldwide
        </p>
        <p className="productDetail--addInfo">
          <PaymentIcon />
          100% Secured Payment
        </p>
        <p className="productDetail--addInfo">
          <UserIcon />
          Made by the Professionals
        </p>
      </section>
      <section>
        <ul className="productInfo--tabs">
          <li className="productInfo--tab">Description</li>
          <li className="productInfo--tab active">
            Reviews <span className="productInfo--review-count">157</span>
          </li>
          <li className="productInfo--tab">Support</li>
        </ul>
        <div className="productInfo--content">
          <div className="productReviews">
            <ProductReviewList reviews={reviews} />
            <p className="productReview--load-more">
              <RotateIcon /> load more reviews
            </p>
          </div>
        </div>
      </section>
      <aside className="recentlyViewed">
        <h3 className="recentlyViewed--title">Recently Viewed Product</h3>
        <div className="productList--recently">
          {products
            .filter((product) => product.id !== parseInt(id))
            .slice(0, 3)
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
        </div>
      </aside>
    </main>
  );
};

export default ProductDetailPage;
