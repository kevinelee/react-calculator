import React from "react";

export default function Screen({ value = 0 }) {
  return (
    <div
      style={{
        height: "8rem",
        width: "24rem",
        borderBottom: "3px solid red",
        background: "lightgray",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        zIndex: "-10",
      }}
    >
      <p style={{ padding: "2rem", fontSize: "4rem" }}>{value}</p>
    </div>
  );
}
