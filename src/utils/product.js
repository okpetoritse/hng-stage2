const formatPrice = (price) => {
    // Convert price to string and remove any non-digit characters
    const formattedPrice = price.toString().replace(/\D/g, '');

    // Add commas to separate thousands
    const parts = [];
    for (let i = formattedPrice.length; i > 0; i -= 3) {
      parts.unshift(formattedPrice.slice(Math.max(0, i - 3), i));
    }

    // Join the parts with commas and return the formatted price
    return `₦${parts.join(',')}`;
  };


  export { formatPrice };