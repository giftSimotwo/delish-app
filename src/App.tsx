import { Route, Routes } from "react-router-dom";
import ProductList from "./components/products";
import Service from "./components/services";
import About from "./components/about";
import HomePage from "./components/home";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        minHeight: "100vh",
        margin: 0,
        padding: 0
      }}
    >
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="product" element={<ProductList />}></Route>
        <Route path="service" element={<Service />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
