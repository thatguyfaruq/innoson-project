import './App.css'
import Hero from './components/Hero';
import Navbar from './layouts/Navbar';
import Product1 from "./components/Product1";
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
import Footer1 from './components/Footer1';


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
      <Product2/>
      <Product3/>
      <Product4/>
      <Footer1/>

    </>
  );
}

export default App
