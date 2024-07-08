import "@/styles/CheckoutSuccess.css";
import MarkLargeIcon from "@/assets/icons/mark-large.svg?react";

const CheckoutSuccessPage = () => {
  return (
    <main className="checkoutSuccess container">
      <MarkLargeIcon />
      <h3 className="checkoutSucess--title">Thank you for your purchase!</h3>
      <p className="checkoutSuccess--desc">
        Thank you for choosing our service! Your purchase means a lot to us.
      </p>
      <h4 className="checkoutSuccess--order">Order Information</h4>
      <div>
        <p>Order ID:</p>
        <p>#123456789</p>
      </div>
    </main>
  );
};

export default CheckoutSuccessPage;
