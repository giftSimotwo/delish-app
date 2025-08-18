import { Route, Routes } from "react-router-dom";
import ProductList from "./components/products";
import Service from "./components/services";
import About from "./components/about";
import HomePage from "./components/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage/>}></Route>
        <Route path="product" element={<ProductList/>}></Route>
        <Route path="service" element={<Service/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
