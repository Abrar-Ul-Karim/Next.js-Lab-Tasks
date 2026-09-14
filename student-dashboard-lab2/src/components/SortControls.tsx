import React from "react";

export type SortOption = "default" | "name" | "gpa";

interface SortControlsProps {
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
}

export const SortControls: React.FC<SortControlsProps> = ({
  sortBy,
  setSortBy,
}) => {
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
