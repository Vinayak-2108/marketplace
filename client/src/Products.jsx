import React, { useEffect, useState } from "react";
import "../src/index.css";
import { NavLink } from "react-router-dom";
import ProductContainer from "./components/ProductContainer";
import { get_all_products } from "./controllers/seller";
import { auth_user } from "./controllers/user";

const Products = () => {
  let [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("yes");
    console.log(localStorage.getItem("user_token"));
    // if (localStorage.getItem("user_token")) {
    //   let obj = {
    //     token: localStorage.getItem("user_token"),
    //   };
    //   console.log("yes");
    //   auth_user(obj).then((data) => {
    //     if (data.tag) {
    //       setIsLoggedIn(true);
    //       get_all_products().then((data) => {
    //         console.log(data);
    //         setProducts(data.message);
    //       });
    //     } else {
    //       setIsLoggedIn(false);
    //     }
    //   });
    // }
    get_all_products().then((data) => {
      console.log(data);
      setProducts(data.message);
    });
  }, []);

  return (
    <>
      <div className="flex ">
        {/* {isLoggedIn ? (<> */}
        <p>{products.length} products found</p>
        <div className="prod-menu">
          {products ? (
            products.map((prod) => (
              <ProductContainer
                name={prod.product_name}
                description={prod.description}
                p_id={prod.p_id}
                counter={prod.counter}
              />
            ))
          ) : (
            <div>No Products to show</div>
          )}
        </div>
        {/* </>) : (<div>Not logged in</div>) */}
        {/* <ProductContainer name="temp" description="YBKL" />
      <ProductContainer name="temp" description="YBKL" />
      <ProductContainer name="temp" description="YBKL" />
      <ProductContainer name="temp" description="YBKL" /> */}
      </div>
    </>
  );
};

export default Products;
