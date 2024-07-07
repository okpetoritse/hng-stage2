import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import MainLayout from "@/layouts/MainLayout";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      }
    ],
  },
];
export default routes;
