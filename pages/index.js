import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Router from "next/router";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nextPage = () => {
    Router.push({
      pathname: "/dashboard/home",
      query: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <div>
      <div>
        <p>Ini tombol untuk ke halaman Home</p>
      </div>
      <div>
        <input
          placeholder="username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <Button variant="primary" onClick={() => nextPage()}>
          GO HOME
        </Button>
      </div>
    </div>
  );
};

export default Index;
