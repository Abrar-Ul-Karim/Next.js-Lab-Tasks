import React from "react";
import { StatBadge } from "./StatBadge";

export const DashboardHeader: React.FC = () => {
  return (
    <header className="dashboard-header">
      <div>
        <h2>Student Dashboard</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Practical React Lab Series Application
        </p>
      </div>

      <div>
        <StatBadge label="Total Students" value={4} />
      </div>
    </header>
  );
};
