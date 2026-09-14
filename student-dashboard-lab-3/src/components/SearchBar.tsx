import React from "react";
import { useStudents } from "./StudentContext";

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useStudents();
  return (
    <input
      type="text"
      className="input-field"
      placeholder="Search by name or major..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ maxWidth: "300px" }}
    />
  );
};
