import MobileContainer from "./components/layouts/MobileContainer";
import News from "./pages/News";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <MobileContainer>
        {/* <About/> */}
        <News />
      </MobileContainer>
    </>
  );
}
