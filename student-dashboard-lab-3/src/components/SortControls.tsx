import React from "react";
import { useStudents } from "./StudentContext";

export const SortControls: React.FC = () => {
  const { sortBy, setSortBy } = useStudents();
  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span>Sort by:</span>
      <button
        className="btn"
        style={{ fontWeight: sortBy === "default" ? "bold" : "normal" }}
        onClick={() => setSortBy("default")}
      >
        Default
      </button>
      <button
        className="btn"
        style={{ fontWeight: sortBy === "name" ? "bold" : "normal" }}
        onClick={() => setSortBy("name")}
      >
        Name (A-Z)
      </button>
      <button
        className="btn"
        style={{ fontWeight: sortBy === "gpa" ? "bold" : "normal" }}
        onClick={() => setSortBy("gpa")}
      >
        GPA (High-Low)
      </button>
    </div>
  );
};
