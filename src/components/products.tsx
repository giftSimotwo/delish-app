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
      <h3 className="product-title">Product List</h3>
      <div className="container">
        {products.map((product, index) => (
          <div className="card" style={{ width: "18rem", height: "30rem" }} key={index}>
            <img src={product.image} className="card-img-top" alt={product.name}/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <h3>{product.price}</h3>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
