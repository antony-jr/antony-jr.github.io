import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loader(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        transition: "all 0.2s ease-out",
      }}
    >
      <Spinner animation="grow" variant="dark" />
    </div>
  );
}
