import LogoIcon from "@/assets/icons/logo.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import FavouriteIcon from "@/assets/icons/favourite.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import { Link } from "react-router-dom";
const Header = () => {
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
            </li>
            <li className="headerNav--item">
              <CartIcon />
            </li>
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
