import ProductList from "@/components/ProductList";
import Breadcrumb from "@/components/Breadcrumb";
import ReactPaginate from "react-paginate";
import NoCartIcon from "@/assets/icons/no-cart.svg?react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../contexts/FavoritesContext";

const FavouritePage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [itemOffset, setItemOffset] = useState(0);

  const perPage = 10;

  const pageCount = Math.ceil(favorites.length / perPage);

  const endOffset = itemOffset + perPage;
  const handlePageClick = (data) => {
    const selected = data.selected;
    const offset = (selected * perPage) % favorites.length;
    setItemOffset(offset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentProducts = favorites.slice(itemOffset, endOffset);
  console.log("WatchListPage -> favorites", favorites);
  return (
    <>
      <main className="productMain">
        <Breadcrumb data={["Home", "Product List", "Favourites"]} />
        {favorites.length > 0 ? (
          <>
            <ProductList products={currentProducts} />
            {favorites.length > perPage && (
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
            )}
          </>
        ) : (
          <div className="cart--noItem container">
            <NoCartIcon />
            <h2 className="cartNoItem--title">
              Oops you have not added any item to favourites yet
            </h2>
            <p className="cartNoItem--desc">
              Please visit our{" "}
              <Link
                to="/"
                className="cartNoItem--link"
              >
                Product Page
              </Link>{" "}
              to select and pick item for favourites{" "}
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default FavouritePage;
