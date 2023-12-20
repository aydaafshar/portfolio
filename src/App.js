import About from "./about/About";

import Header from "./header/Header";

import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Testemonials from "./testimonials/Testemonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <About />
      <Services />
      <Portfolio />
      <Testemonials />
    </div>
  );
}

export default App;
