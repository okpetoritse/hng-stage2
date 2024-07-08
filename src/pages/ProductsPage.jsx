import { useState } from "react";
import { products } from "@/data/products";
import ProductList from "@/components/ProductList";
import Breadcrumb from "@/components/Breadcrumb";
import ReactPaginate from "react-paginate";
import FilterIcon from "@/assets/icons/filter.svg?react";
import VerticalDividerIcon from "@/assets/icons/vertical-divider.svg?react";
import DownArrowIcon from "@/assets/icons/down-arrow.svg?react";

const ProductPage = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const perPage = 10;

  const pageCount = Math.ceil(products.length / perPage);

  const endOffset = itemOffset + perPage;
  const handlePageClick = (data) => {
    const selected = data.selected;
    const offset = (selected * perPage) % products.length;
    setItemOffset(offset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentProducts = products.slice(itemOffset, endOffset);

  return (
    <main className="productMain">
      <section className="productFilter--wrapper">
        <div className="productFilter container">
          <ul className="productFilter--list">
            <li className="productFilter--item">
              <FilterIcon /> Filter
            </li>
            <li className="productFilter--item">
              <VerticalDividerIcon />
            </li>
            <li className="productFilter--item">
              All Category <DownArrowIcon />
            </li>
            <li className="productFilter--item">Fashion</li>
            <li className="productFilter--item">Books</li>
            <li className="productFilter--item">Electronics</li>
            <li className="productFilter--item">Bags</li>
            <li className="productFilter--item">Phone</li>
          </ul>

          <aside className="productFilter--btns">
            <button className="productFilter--btn">Become a seller</button>
            <button className="productFilter--allOrder">All order</button>
          </aside>
        </div>
      </section>
      <Breadcrumb data={["Home", "Product List"]} />
      <ProductList products={currentProducts} />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination container"}
        previousLinkClassName={"pagination--prev"}
        nextLinkClassName={"pagination--next"}
        disabledClassName={"pagination--disabled"}
        activeClassName={"pagination--active"}
        pageClassName={"pagination--page"}
      />
    </main>
  );
};

export default ProductPage;
