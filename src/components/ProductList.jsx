import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
      <section className="productList container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            tags={product.tags}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </section>
  );
};

export default ProductList;
