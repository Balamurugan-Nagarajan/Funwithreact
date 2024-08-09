// import React, { useEffect, useState } from "react";
// import { fetchProducts } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const productsData = await fetchProducts();
//       setProducts(productsData);
//     };

//     loadProducts();
//   }, []);

//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>Shop</h1>
//       </div>

//       <div className="products">
//         {products.map((product) => (
//           <Product key={product.id} data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };



import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
