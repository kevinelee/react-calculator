import React from "react";

export default function Button({ color = "gray", print, onClick }) {
  return (
    <button
      className="no-outline"
      style={{
        backgroundColor: `${color}`,
        borderRadius: "50%",
        height: "5rem",
        width: "5rem",
        margin: "0.5rem",
      }}
      onClick={onClick}
    >
      <div style={{ fontSize: "2.5rem", fontWeight: "100" }}>{print}</div>
    </button>
  );
}
