import React from "react";

interface CourseTagProps {
  name: string;
  color?: string;
}

export const CourseTag: React.FC<CourseTagProps> = ({
  name,
  color = "#3b82f6",
}) => {
  return (
    <span className="course-tag" style={{ backgroundColor: color }}>
      {name}
    </span>
  );
};
