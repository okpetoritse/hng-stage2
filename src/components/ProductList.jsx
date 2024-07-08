import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <section className="productList container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};

export default ProductList;
