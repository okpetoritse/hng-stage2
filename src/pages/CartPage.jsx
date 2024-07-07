import React from 'react';
import '@/styles/Cart.css'; // Importing the CSS file

const CartList = () => {
  // Mocked product data
  const products = [
    {
      id: 1,
      name: 'Gucci Women\'s High-heeled Shoes',
      price: '234,980.00',
      imageUrl: 'https://picsum.photos/400/257',
      colorOptions: ['Black'],
    },
    {
      id: 2,
      name: 'Gucci Women\'s Leather Bag',
      price: '234,980.00',
      imageUrl: 'https://picsum.photos/400/257',
      colorOptions: ['Pink', 'Black'],
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="product-price">₦{product.price}</p>
            <div className="action-items">
              <button className="wish-list-btn">&#9825;</button>
              <button className="add-to-cart-btn">&#128722;</button>
            </div>
            <div className="color-selection">
              {product.colorOptions.map((color, index) => (
                <span key={index} className={`color-option ${color.toLowerCase()}`}></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;