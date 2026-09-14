import React from "react";

interface StatBadgeProps {
  label: string;
  value: string | number;
}

export const StatBadge: React.FC<StatBadgeProps> = ({ label, value }) => {
  return (
    <span className="stat-badge">
      <strong>{label}:</strong> {value}
    </span>
  );
};
