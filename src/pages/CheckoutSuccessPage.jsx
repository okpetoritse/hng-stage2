import "@/styles/CheckoutSuccess.css";
import MarkLargeIcon from "@/assets/icons/mark-large.svg?react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { useEffect } from "react"


const CheckoutSuccessPage = () => {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  };

  useEffect(()=> {
    confetti({
      particleCount: 300,
      spread: 80,
      origin: { y: 0.8 },
    
    })
  }, [])

  return (
    <main className="checkoutSuccess container">
      <MarkLargeIcon className="checkoutSuccess--mark" />
      <h3 className="checkoutSuccess--title">Thank you for your purchase!</h3>
      <p className="checkoutSuccess--desc">
        Thank you for choosing our service! Your purchase means a lot to us.
      </p>
      <h4 className="checkoutSuccess--subTitle">Order Information</h4>
      <div className="checkoutSuccess--info">
        <p>Order ID:</p>
        <p>#123456789</p>
      </div>
      <div className="checkoutSuccess--info">
        <p>Date and Time of Purchase</p>
        <p>{formatDate(new Date())}</p>
      </div>
      <h4 className="checkoutSuccess--subTitle">Delivery Information</h4>
      <div className="checkoutSuccess--info">
        <p>Recipient</p>
        <p>
          Omowunmi Jimoh
          <br /> +2349078234392
        </p>
      </div>
      <div className="checkoutSuccess--info">
        <p>Delivery Address:</p>
        <p>17 Adeola Odeku Street, Victoria Island, Lagos, Nigeria</p>
      </div>
      <div className="checkoutSuccess--info">
        <p>Delivery Date:</p>
        <p>July 15, 2022</p>
      </div>
      <div className="checkoutSuccess--info">
        <p>Delivery Time:</p>
        <p>9:00 AM - 12:00 PM</p>
      </div>
      <Link
        to="/"
        className="checkoutSuccess--btn"
      >
        Continue shopping
      </Link>
      <button className="checkoutSuccess--view">View order</button>
    </main>
  );
};

export default CheckoutSuccessPage;
