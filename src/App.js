import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorites from "./components/Favorites";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/product" element={ <Product/> }/>
        <Route path="/basket" element={ <Basket/> }/>
        <Route path="/favorites" element={ <Favorites/> }/>
        <Route path="/details/:id" element={ <ProductDetails/> }/>
      </Routes>
    </div>
  );
}

export default App;
