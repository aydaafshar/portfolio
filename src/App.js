import About from "./about/About";

import Header from "./header/Header";

import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
