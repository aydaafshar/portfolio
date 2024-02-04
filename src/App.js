import About from "./about/About";
import Contact from "./contact/Contact";
import FAQs from "./faqs/FAQs";
import Footer from "./footer/Footer";

import Header from "./header/Header";

import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Testemonials from "./testimonials/Testemonials";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
function App() {
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />

      <About />
      <Services />
      <Portfolio />
      <Testemonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
    </main>
  );
}

export default App;
