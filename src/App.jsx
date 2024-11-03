import MobileContainer from "./components/layouts/MobileContainer";
import News from "./pages/News";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindProduct from "./pages/FindProduct";
import NewsDetail from "./pages/NewsDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product-detail",
      element: <ProductDetail />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news-detail",
      element: <NewsDetail />,
    },
    {
      path: "/find",
      element: <FindProduct />,
    },
  ]);

  return (
    <>
      <MobileContainer>
        <RouterProvider router={router} />
      </MobileContainer>
    </>
  );
}
