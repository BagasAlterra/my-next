import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const Home = () => {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [name, setName] = useState();

  const id = 30;

  const goProductName = () => {
    Router.push({
      pathname: `/product/${product}`,
      query: {
        name: name,
        id: id,
      },
    });
  };

  return (
    <div>
      <p>Ini Halaman Home</p>
      <input
        placeholder="product"
        type="product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        placeholder="name"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{router.query.username}</p>
      <p>{router.query.password}</p>
      <div>
        <Button onClick={() => goProductName()}>Ke halaman Product Name</Button>
      </div>
    </div>
  );
};

export default Home;
