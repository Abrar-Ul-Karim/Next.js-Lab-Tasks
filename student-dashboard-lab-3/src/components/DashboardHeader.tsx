import React from "react";
import { StatBadge } from "./StatBadge";
import { useTheme } from "./ThemeContext";
import { useStudents } from "./StudentContext";

export const DashboardHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { favorites, allStudentsCount } = useStudents();

  return (
    <header className="dashboard-header">
      <div>
        <h2>Student Dashboard</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Practical React Lab Series Application
        </p>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <StatBadge label="Total Students" value={allStudentsCount} />
        <StatBadge label="Favorites" value={favorites.length} />
        <button className="btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
};
