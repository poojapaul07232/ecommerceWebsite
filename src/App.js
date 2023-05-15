// import { Virtual } from "swiper";
import "./App.css";
import Header from './component/Header';
import Hero from './component/Hero/Hero';
import Slider from './component/slider/Slider';
import Virtual from './component/virtual/Virtual'
import Product from "./component/Product/Product";
import { ProductsData } from "./data/products";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero></Hero>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
