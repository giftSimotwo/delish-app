import { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";

type Product = {
  name: string;
  description: string;
  image: string;
  price: string;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error occured while fetching data", error);
      });
  }, []);

  return (
    <>
      <h3>Product List</h3>
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} className="product-img" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">KSh {product.price}</p>
        </div>
      ))}
    </>
  );
}

export default ProductList;
