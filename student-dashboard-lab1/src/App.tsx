import React from "react";
import { DashboardHeader } from "./components/DashboardHeader";
import { StudentCard } from "./components/StudentCard";
import "./styles.css";
import type { Student } from "./type/student";

const initialStudents: Student[] = [
  {
    id: "101",
    name: "Abrar Shahriar",
    gpa: 3.85,
    major: "Computer Science",
    avatar: "https://i.pravatar.cc/150?img=11",
    courses: ["C++", "OpenGL", "Data Structures"],
  },
  {
    id: "102",
    name: "Sarah Khan",
    gpa: 3.92,
    major: "Software Engineering",
    avatar: "https://i.pravatar.cc/150?img=5",
    courses: ["React", "JavaScript", "Node.js"],
  },
  {
    id: "103",
    name: "Tanvir Ahmed",
    gpa: 3.4,
    major: "Electrical Engineering",
    avatar: "https://i.pravatar.cc/150?img=12",
    courses: ["AutoCAD", "Embedded Systems"],
  },
  {
    id: "104",
    name: "Nusrat Jahan",
    gpa: 3.75,
    major: "Computer Science",
    avatar: "https://i.pravatar.cc/150?img=9",
    courses: ["AI Search", "Machine Learning"],
  },
];

export default function App(): React.JSX.Element {
  return (
    <>
      <DashboardHeader />
      <main className="container">
        <div className="grid">
          {initialStudents.map((student) => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </main>
    </>
  );
}
