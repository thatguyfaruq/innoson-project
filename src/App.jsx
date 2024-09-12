import './App.css'
import Hero from './components/Hero';
import Navbar from './layouts/Navbar';
import Product1 from "./components/Product1";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="frame-text">
        <p>We Don’t Just Manufacture Products, We Craft Dreams.</p>
      </div>
      <div className="bold-sub">
        <p>What We Do</p>
      </div>
      <Product1/>

    </>
  );
}

export default App
