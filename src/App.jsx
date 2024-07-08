import "./App.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
