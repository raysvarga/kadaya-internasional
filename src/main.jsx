import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./pages/News";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import FindProduct from "./pages/FindProduct";
import Statistics from "./pages/Statistics";
import MobileContainer from "./components/layouts/MobileContainer.jsx";

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
    path: "/find",
    element: <FindProduct />,
  },
  {
    path: "/stats",
    element: <Statistics />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <MobileContainer>
      <RouterProvider router={router} />
    </MobileContainer>
  </StrictMode>
);
