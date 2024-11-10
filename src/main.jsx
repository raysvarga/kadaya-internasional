import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./pages/News";
import Home from "./pages/Home";
import About from "./pages/About";
import NewsDetail from "./pages/NewsDetail.jsx";
import ProductDetail from "./pages/ProductDetail";
import FindProduct from "./pages/FindProduct";
import Statistics from "./pages/Statistics";
import MobileContainer from "./components/layouts/MobileContainer.jsx";
import { MainContextProvider } from "./context/MainContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-detail/:id",
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
    path: "/find/:cat",
    element: <FindProduct />,
  },
  {
    path: "/stats",
    element: <Statistics />,
  },
  {
    path: "/news-detail",
    element: <NewsDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MobileContainer>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </MobileContainer>
  // </StrictMode>
);
