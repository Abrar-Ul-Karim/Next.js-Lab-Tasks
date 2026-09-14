import React, { useState } from "react";
import { CourseTag } from "./CourseTag";
import { StatBadge } from "./StatBadge";
import type { Student } from "../type/student";

interface StudentCardProps extends Student {
  onFavoriteToggle?: (id: string, isFav: boolean) => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  id,
  name,
  avatar,
  gpa,
  major,
  courses = [],
  onFavoriteToggle,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const colors = ["#ec4899", "#8b5cf6", "#10b981", "#f59e0b", "#06b6d4"];

  const handleFavoriteClick = () => {
    const nextState = !isFavorite;
    setIsFavorite(nextState);
    if (onFavoriteToggle) {
      onFavoriteToggle(id, nextState);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt={name} className="avatar" />
        <div>
          <h3>{name}</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
            ID: {id}
          </p>
        </div>
      </div>

      <p>
        <strong>Major:</strong> {major}
      </p>
      <div>
        <StatBadge label="GPA" value={gpa} />
      </div>
      <div>
        {courses.map((course, index) => (
          <CourseTag
            key={index}
            name={course}
            color={colors[index % colors.length]}
          />
        ))}
      </div>

      <button
        className="btn"
        style={{ marginTop: "auto", color: isFavorite ? "#ef4444" : "inherit" }}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "Favorited" : "Favorite"}
      </button>
    </div>
  );
};
