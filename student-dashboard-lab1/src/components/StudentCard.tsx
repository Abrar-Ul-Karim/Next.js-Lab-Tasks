import React from "react";
import { CourseTag } from "./CourseTag";
import { StatBadge } from "./StatBadge";
import type { Student } from "../type/student";

export const StudentCard: React.FC<Student> = ({
  id,
  name,
  avatar,
  gpa,
  major,
  courses = [],
}) => {
  const colors = ["#ec4899", "#8b5cf6", "#10b981", "#f59e0b", "#06b6d4"];

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
    </div>
  );
};
