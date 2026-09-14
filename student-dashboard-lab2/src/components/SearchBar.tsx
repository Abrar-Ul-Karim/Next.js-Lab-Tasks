import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
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
