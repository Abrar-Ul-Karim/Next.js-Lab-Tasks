import React, { useEffect } from "react";
import { DashboardHeader } from "./components/DashboardHeader";
import { SearchBar } from "./components/SearchBar";
import { SortControls } from "./components/SortControls";
import { StudentCard } from "./components/StudentCard";
import { AddStudentForm } from "./components/AddStudentForm";
import "./styles.css";
import { StudentProvider, useStudents } from "./components/StudentContext";
import { ThemeProvider } from "./components/ThemeContext";

const MainDashboard: React.FC = () => {
  const { students, loading, notification } = useStudents();

  useEffect(() => {
    document.title = `Dashboard — ${students.length} Students`;
  }, [students.length]);

  return (
    <>
      <DashboardHeader />
      <main className="container">
        {notification && (
          <div
            style={{
              background: "#10b981",
              color: "#fff",
              padding: "0.5rem",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
          >
            {notification}
          </div>
        )}
        <AddStudentForm />
        <div className="controls-bar">
          <SearchBar />
          <SortControls />
        </div>
        {loading ? (
          <div className="spinner" />
        ) : (
          <div className="grid">
            {students.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <StudentProvider>
        <MainDashboard />
      </StudentProvider>
    </ThemeProvider>
  );
}
