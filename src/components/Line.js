import React from "react";

export const Line = ({ id, text }) => {
  return (
    <div className="lines-line">
      <span className="lines-line-id">Note {id + 1}</span>
      <span className="lines-line-text">{text}</span>
    </div>
  );
};
