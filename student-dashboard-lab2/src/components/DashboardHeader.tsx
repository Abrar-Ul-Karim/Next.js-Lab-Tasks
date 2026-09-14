import React from "react";
import { StatBadge } from "./StatBadge";

interface DashboardHeaderProps {
  totalStudents: number;
  favCount: number;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  totalStudents,
  favCount,
}) => {
  return (
    <header className="dashboard-header">
      <div>
        <h2>Student Dashboard</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Practical React Lab Series Application
        </p>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <StatBadge label="Total Students" value={totalStudents} />
        <StatBadge label="Favorites" value={favCount} />
      </div>
    </header>
  );
};
