import Home from "./pages/Home";
import MobileContainer from "./components/layouts/MobileContainer";
import About from "./pages/About";
import PartnerCard from "./components/atoms/PartnerCard";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <MobileContainer>
        {/* <About /> */}
        {/* <Home /> */}
        <ProductDetail />
      </MobileContainer>
    </>
  );
}
