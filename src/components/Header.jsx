import LogoIcon from "@/assets/icons/logo.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import FavouriteIcon from "@/assets/icons/favourite.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import FavoritesContext from "../contexts/FavoritesContext";
const Header = () => {
  const { cart } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="wrapper">
      <header className="header container">
        <Link className="logo">
          <LogoIcon />
          <p className="logo--title">Timbu Cloud Shop</p>
        </Link>
        <section className="headerSearch">
          <SearchIcon className="headerSearch--icon" />
          <input
            className="headerSearch--input"
            type="text"
            placeholder="Search product and Brands"
          />
        </section>
        <nav>
          <ul className="headerNav">
            <li className="headerNav--item">
              <FavouriteIcon />
              {favorites.length > 0 ? (
                <div className="headerNav--count">{favorites.length}</div>
              ) : null}
            </li>
            <Link
              to="/cart"
              className="headerNav--item"
            >
              <CartIcon className="headerNav--cart" />
              {cart.length > 0 ? (
                <div className="headerNav--count">{cart.length}</div>
              ) : null}
            </Link>
            <li className="headerNav--item">
              <img
                src="/images/avatar.png"
                className="headerNav--avatar"
              />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
