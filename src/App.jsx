import Home from "./pages/Home";
import MobileContainer from "./components/layouts/MobileContainer";
import About from "./pages/About";
import PartnerCard from "./components/atoms/PartnerCard";

export default function App() {
  return (
    <>
      <MobileContainer>
        <About />
      </MobileContainer>
    </>
  );
}
