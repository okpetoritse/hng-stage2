import VerticalDividerIcon from "@/assets/icons/vertical-divider.svg?react";
import DownArrowIcon from "@/assets/icons/down-arrow.svg?react";
import TrashIcon from "@/assets/icons/trash.svg?react";
import InfoSquareIcon from "@/assets/icons/info-square.svg?react";
import NoCartIcon from "@/assets/icons/no-cart.svg?react";
import "@/styles/Cart.css"; // Importing the CSS file
import Breadcrumb from "../components/Breadcrumb";
import { formatPrice } from "@/utils/product";
import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import CartContext from "../contexts/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const cartSubTotal = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }, [cart]);

  const shippingFee = 4980;

  return (
    <section>
      <Breadcrumb data={["Product List"]} />

      {cart.length > 0 ? (
        <>
          <h2 className="cart--title container">Cart({cart.length})</h2>
          <div className="cart container">
            <ul className="cartProduct--list">
              {cart.length > 0 &&
                cart.map((product) => (
                  <li className="cartProduct--item">
                    <div className="cartProductItem--info">
                      <img
                        className="cartProductItem--img"
                        src={product.images[0]}
                        alt="product"
                      />
                      <div className="cartProductItem--desc">
                        <p className="cartProductItem--tag">Shoe</p>
                        <p className="cartProductItem--title">
                          {product.title}
                        </p>
                        <p className="cartProductItem--price">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>
                    <footer className="cartProductItem--footer">
                      <div>
                        <div className="cartProductItem--detail">
                          1
                          <VerticalDividerIcon />
                          <DownArrowIcon />
                        </div>
                        <div className="cartProductItem--detail ">
                          <span
                            className="cartProductItem--color"
                            style={{ background: product.colors[0] }}
                          ></span>
                          <VerticalDividerIcon />
                          <DownArrowIcon />
                        </div>
                      </div>

                      <TrashIcon
                        className="cartProductItem--delete"
                        onClick={() => removeFromCart(product.id)}
                      />
                    </footer>
                  </li>
                ))}
            </ul>
            <section className="cartProducts--summary">
              <h3 className="cartProducts--title">Summary</h3>
              <div className="cartProducts--item">
                <p className="cartProducts--text">Sub-Total</p>
                <p className="cartProducts--price">
                  {formatPrice(cartSubTotal)}
                </p>
              </div>
              <div className="cartProducts--item">
                <p className="cartProducts--text">Estimated Shipping fee</p>
                <p className="cartProducts--price">
                  {formatPrice(shippingFee)}
                </p>
              </div>
              <div className="cartProducts--promo">
                <p className="cartProducts--text">Promo Code</p>
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="cartProducts--promo-input"
                />
                <InfoSquareIcon className="cartProducts--info" />
              </div>
              <div className="cartProducts--item">
                <p className="cartProducts--text">Total</p>
                <p className="cartProducts--price-total">
                  {formatPrice(cartSubTotal + shippingFee)}
                </p>
              </div>
              <Link
                to="/checkout"
                className="cartProducts--checkout"
              >
                Checkout
              </Link>
            </section>
          </div>
        </>
      ) : (
        <div className="cart--noItem container">
          <NoCartIcon />
          <h2 className="cartNoItem--title">
            Oops you have not added any item to cart
          </h2>
          <p className="cartNoItem--desc">
            Please visit our{" "}
            <Link
              to="/"
              className="cartNoItem--link"
            >
              Product Page
            </Link>{" "}
            to select and pick item for purchase{" "}
          </p>
        </div>
      )}
    </section>
  );
};

export default CartPage;
