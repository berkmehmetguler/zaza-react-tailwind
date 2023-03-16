import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import Comman from "./components/Comman";
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Statistics/>
      <Details/>
      <Comman/>
      <Footer />
    </div>
  );
}

export default App;
