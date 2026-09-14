import React, { useState, useEffect } from "react";
import { DashboardHeader } from "./components/DashboardHeader";
import { StudentCard } from "./components/StudentCard";
import { SearchBar } from "./components/SearchBar";
import "./styles.css";
import type { Student } from "./type/student";
import { SortControls, type SortOption } from "./components/SortControls";

const initialData: Student[] = [
  {
    id: "101",
    name: "Abrar Shahriar",
    gpa: 3.85,
    major: "Computer Science",
    avatar: "/cat.jpg",
    courses: ["C++", "OpenGL"],
  },
  {
    id: "102",
    name: "Sarah Khan",
    gpa: 3.92,
    major: "Software Engineering",
    avatar: "/cat.jpg",
    courses: ["React", "JavaScript"],
  },
  {
    id: "103",
    name: "Tanvir Ahmed",
    gpa: 3.4,
    major: "Electrical Engineering",
    avatar: "/cat.jpg",
    courses: ["AutoCAD"],
  },
  {
    id: "104",
    name: "Nusrat Jahan",
    gpa: 3.75,
    major: "Computer Science",
    avatar: "/cat.jpg",
    courses: ["AI Search"],
  },
];

export default function App(): React.JSX.Element {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [favCount, setFavCount] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(initialData);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFavoriteToggle = (_id: string, isFav: boolean) => {
    setFavCount((prev) => (isFav ? prev + 1 : prev - 1));
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortBy === "name") {
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "gpa") {
    filteredStudents.sort((a, b) => b.gpa - a.gpa);
  }

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  return (
    <>
      <DashboardHeader totalStudents={students.length} favCount={favCount} />
      <main className="container">
        <div className="controls-bar">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SortControls sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        {loading ? (
          <div className="spinner" />
        ) : (
          <div className="grid">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                {...student}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
