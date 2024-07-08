import "@/styles/Checkout.css";
import Breadcrumb from "@/components/Breadcrumb";
import { formatPrice } from "@/utils/product";
import { Link } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import CartContext from "@/contexts/CartContext";
import Checkbox from "@/components/Checkbox";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const cartSubTotal = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }, [cart]);

  const [paymentMethod, setPaymentMethod] = useState("");

  const shippingFee = 4980;
  return (
    <main>
      <Breadcrumb data={["Product List"]} />
      <div className="checkout container">
        <section className="checkout--section1">
          <h3 className="checkout--heading">Contanct Information</h3>
          <div className="checkout--formGroup">
            <label className="checkout--formLabel">Email address</label>
            <input
              className="checkout--formInput"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <h3 className="checkout--heading">Shipment Information</h3>
          <div className="checkout--form-double">
            <div className="checkout--formGroup">
              <label className="checkout--formLabel">First Name</label>
              <input
                className="checkout--formInput"
                type="text"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="checkout--formGroup">
              <label className="checkout--formLabel">Last Name</label>
              <input
                className="checkout--formInput"
                type="text"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div className="checkout--phoneGroup">
            <label className="checkout--formLabel">Phone Number</label>
            <div className="checkout--phone">
              <input
                className="checkout--formInput"
                type="tel"
                placeholder="+234"
              />
              <input
                className="checkout--formInput"
                type="tel"
                placeholder="Enter your Phone Number"
              />
            </div>
          </div>
          <div className="checkout--formGroup">
            <label className="checkout--formLabel">Address</label>
            <input
              className="checkout--formInput"
              type="text"
              placeholder="Enter your Address"
            />
          </div>
          <div className="checkout--form-double">
            <div className="checkout--formGroup">
              <label className="checkout--formLabel">State</label>
              <input
                className="checkout--formInput"
                type="text"
                placeholder="Enter your State"
              />
            </div>
            <div className="checkout--formGroup">
              <label className="checkout--formLabel">City</label>
              <input
                className="checkout--formInput"
                type="text"
                placeholder="Enter your City"
              />
            </div>
          </div>
          <h3 className="checkout--heading">Payment Method</h3>
          <div
            className={`checkout--payment
              ${paymentMethod === "onDelivery" ? "active" : ""}`}
            onClick={() => {
              if (paymentMethod === "onDelivery") {
                setPaymentMethod("");
                return;
              }
              setPaymentMethod("onDelivery");
            }}
          >
            <Checkbox checked={paymentMethod === "onDelivery"} />
            <p>
              Payment on Delivery <br /> <span>make available the amount</span>
            </p>
          </div>
          <div
            className={`checkout--payment
            ${paymentMethod === "card" ? "active" : ""}`}
            onClick={() => {
              if (paymentMethod === "card") {
                setPaymentMethod("");
                return;
              }
              setPaymentMethod("card");
            }}
          >
            <Checkbox checked={paymentMethod === "card"} />
            <p>
              Pay Stack <br /> <span>pay with your card </span>
            </p>
          </div>
        </section>
        <section className="checkout--order">
          <h3 className="checkout--orderTitle">Order details</h3>
          <ul className="checkout--orderList">
            {cart &&
              cart.map((product) => (
                <li className="cartProduct--item checkout--orderItem">
                  <div className="cartProductItem--info">
                    <img
                      className="cartProductItem--img"
                      src={product.images[0]}
                      alt="product"
                    />
                    <div className="cartProductItem--desc">
                      <p className="cartProductItem--tag">Shoe</p>
                      <p className="cartProductItem--title">{product.title}</p>
                      <p className="cartProductItem--price">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <section className="checkout--summary">
            <h3 className="cartProducts--title">Summary</h3>
            <div className="cartProducts--item">
              <p className="cartProducts--text">Sub-Total</p>
              <p className="cartProducts--price">{formatPrice(cartSubTotal)}</p>
            </div>
            <div className="cartProducts--item">
              <p className="cartProducts--text">Estimated Shipping fee</p>
              <p className="cartProducts--price">{formatPrice(shippingFee)}</p>
            </div>
            <div className="cartProducts--item">
              <p className="cartProducts--text">Total</p>
              <p className="cartProducts--price-total">
                {formatPrice(shippingFee + cartSubTotal)}
              </p>
            </div>
            <Link
              to="/success"
              className="cartProducts--checkout"
            >
              Confirm Payment
            </Link>
          </section>
        </section>
      </div>
    </main>
  );
};

export default CheckoutPage;
