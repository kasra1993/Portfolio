import { BrowserRouter } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <CookieConsent
            debug={true}
            style={{ background: "rgb(5 8 22 / var(--tw-bg-opacity))" }}
          >
            This site uses cookies.
          </CookieConsent> */}
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
