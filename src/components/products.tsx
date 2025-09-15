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

  const apiUrl = process.env.REACT_APP_API_URL;

  // `${apiUrl}/product/`

  useEffect(() => {
    axios
      .get("https://delishgin.onrender.com/product/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error occured while fetching data", error);
      });
  }, []);

  return (
    <>
        <nav className="product-title">Product List</nav>
        <div className="container-fluid">
          {products.map((product, index) => (
            <div
              className="card"
              style={{ width: "15rem", height: "24rem" }}
              key={index}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h3>{product.price} Kes</h3>
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
