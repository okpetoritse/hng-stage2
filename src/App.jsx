import "./App.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { CartProvider } from "./contexts/CartContext";
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
