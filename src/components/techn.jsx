import React from "react";

export default function Techn({ img, text, color }) {
  return (
    <div
      className="tech"
      style={{
        borderBottom: `2px solid ${color}`,
        boxShadow: `0 12px 11px -10px ${color}`,
      }}
    >
      <img src={img} alt={text} />
      {/* <h4>{text}</h4> */}
    </div>
  );
}
