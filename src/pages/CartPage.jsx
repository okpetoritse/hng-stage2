import VerticalDividerIcon from "@/assets/icons/vertical-divider.svg?react";
import DownArrowIcon from "@/assets/icons/down-arrow.svg?react";
import TrashIcon from "@/assets/icons/trash.svg?react";
import InfoSquareIcon from "@/assets/icons/info-square.svg?react";
import "@/styles/Cart.css"; // Importing the CSS file
import Breadcrumb from "../components/Breadcrumb";
import { formatPrice } from "@/utils/product";

const CartPage = () => {
  // Mocked product data
  const products = [
    {
      id: 1,
      name: "Gucci Women's High-heeled Shoes",
      price: "2380",
      imageUrl: "https://picsum.photos/400/257",
      colorOptions: ["Black"],
    },
    {
      id: 2,
      name: "Gucci Women's Leather Bag",
      price: "23498",
      imageUrl: "https://picsum.photos/400/257",
      colorOptions: ["Pink", "Black"],
    },
  ];

  return (
    <section>
      <Breadcrumb data={["Product List"]} />
      <h2 className="cart--title container">Cart(2)</h2>
      <div className="cart container">
        <ul className="cartProduct--list">
          {products &&
            products.map((product) => (
              <li className="cartProduct--item">
                <div className="cartProductItem--info">
                  <img
                    className="cartProductItem--img"
                    src={product.imageUrl}
                    alt="product"
                  />
                  <div className="cartProductItem--desc">
                    <p className="cartProductItem--tag">Shoe</p>
                    <p className="cartProductItem--title">{product.name}</p>
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
                      <span className="cartProductItem--color"></span>
                      <VerticalDividerIcon />
                      <DownArrowIcon />
                    </div>
                  </div>

                  <TrashIcon className="cartProductItem--delete" />
                </footer>
              </li>
            ))}
        </ul>
        <section className="cartProducts--summary">
          <h3 className="cartProducts--title">Summary</h3>
          <div className="cartProducts--item">
            <p className="cartProducts--text">Sub-Total</p>
            <p className="cartProducts--price">{formatPrice(23080)}</p>
          </div>
          <div className="cartProducts--item">
            <p className="cartProducts--text">Estimated Shipping fee</p>
            <p className="cartProducts--price">{formatPrice(4980)}</p>
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
            <p className="cartProducts--price-total">{formatPrice(38000)}</p>
          </div>
          <button className="cartProducts--checkout">Checkout</button>
        </section>
      </div>
    </section>
  );
};

export default CartPage;
