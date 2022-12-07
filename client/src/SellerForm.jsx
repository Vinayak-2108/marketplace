import React, { useState } from "react";
import "./index.css";
import MyNavbar from "./components/Navbar";
import { add_product } from "./controllers/seller";

const SellerForm = () => {
  const [pid, setPid] = useState("");
  const [prod_name, setProdName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    console.log("hey");
    e.preventDefault();
    const obj = {
      product_name: prod_name,
      p_id: pid,
      description: desc,
    };
    add_product(obj).then((data) => {
      alert(data.message);
    });
    setProdName("");
    setPid("");
    setDesc("");
  };
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Product Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            value={prod_name}
            onChange={(e) => setProdName(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="pid" class="form-label">
            Product ID
          </label>
          <input
            type="pid"
            class="form-control"
            id="exampleInputPassword1"
            value={pid}
            onChange={(e) => setPid(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="text" class="form-label">
            Product Description
          </label>
          <input
            type="desc"
            class="form-control"
            id="exampleInputPassword1"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SellerForm;
