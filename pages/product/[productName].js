import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Router, { useRouter } from "next/router";

const ProductName = () => {
  const id = 30;

  const router = useRouter();

  const nextPage = () => {
    Router.push({
      pathname: `/dashboard/${id}`,
    });
  };

  return (
    <div>
      <p>Ini halaman Product Name</p>
      <p>{router.query.name}</p>
      <Button onClick={() => nextPage()}>Ke Halaman Product Id</Button>
    </div>
  );
};

export default ProductName;
