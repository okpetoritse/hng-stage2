import LogoIcon from "@/assets/icons/logo.svg?react";

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer container">
        <section className="footerMain">
          <article className="footerMain--logo">
            <div className="logo">
              <LogoIcon />
              <p className="logo--title logo--title-light">Timbu Cloud Shop</p>
            </div>
            <p className="logo--desc">
              Timbu cloud shop is a shopping platform that gives you all the
              good experience of shopping.
            </p>
          </article>
            <ul className="footerMain--list">
              <li>Company</li>
              <li>About</li>
              <li>Become a distributor</li>
              <li>Career</li>
            </ul>
            <ul className="footerMain--list">
              <li>Help</li>
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Track Delivery</li>
              <li>Privary Policy</li>
            </ul>
          <article className="footerMain--list">
            <p>Newsletter</p>
            <input
            className="footerMain--input"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="footerMain--btn">Subscribe Now</button>
          </article>
        </section>
        <hr className="footer--divider" />
        <p className="footer--copyright">&copy; Copyright 2024. All Rights, Reserved by Timbu Cloud Shop</p>
      </footer>
    </div>
  );
};

export default Footer;
