import { useState } from "react";
import "./App.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Breadcrumb from "@/components/Breadcrumb";
import ReactPaginate from "react-paginate";
import AppRoutes from "./router";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
