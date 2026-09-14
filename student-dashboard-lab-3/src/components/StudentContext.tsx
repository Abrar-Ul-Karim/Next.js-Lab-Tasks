import React, {createContext, useState,useEffect,useContext, type ReactNode,} from "react";
import type { Student } from "../type/student";

export type SortOption = "default" | "name" | "gpa";

interface StudentContextType {
    students: Student[];
    loading: boolean;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    sortBy: SortOption;
    setSortBy: (s: SortOption) => void;
    favorites: string[];
    toggleFavorite: (id: string) => void;
    addStudent: (student: Student) => void;
    removeStudent: (id: string) => void;
    notification: string;
    allStudentsCount: number;
}

const StudentContext = createContext<StudentContextType | undefined>(
    undefined
);

const initialData: Student[] = [
    {
        id: "101",
        name: "Abrar Shahriar",
        gpa: 3.85,
        major: "Computer Science",
        avatar: "/ct.jpg",
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
];

export const StudentProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortBy, setSortBy] = useState<SortOption>("default");
    const [favorites, setFavorites] = useState<string[]>([]);
    const [notification, setNotification] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => {
            const saved = localStorage.getItem("student_dashboard_data");
            if (saved) {
                setStudents(JSON.parse(saved));
            } else {
                setStudents(initialData);
            }
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem("student_dashboard_data", JSON.stringify(students));
        }
    }, [students, loading]);

    const toggleFavorite = (id: string) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    const addStudent = (newStudent: Student) => {
        setStudents((prev) => [newStudent, ...prev]);
        setNotification(`Student ${newStudent.name} added successfully!`);
        setTimeout(() => setNotification(""), 3000);
    };

    const removeStudent = (id: string) => {
        setStudents((prev) => prev.filter((s) => s.id !== id));
        setFavorites((prev) => prev.filter((f) => f !== id));
    };

    const getFilteredStudents = (): Student[] => {
        const list = students.filter(
            (s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.major.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortBy === "name") {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "gpa") {
            list.sort((a, b) => b.gpa - a.gpa);
        }

        return list;
    };

    return (
        <StudentContext.Provider
            value={{
                students: getFilteredStudents(),
                loading,
                searchQuery,
                setSearchQuery,
                sortBy,
                setSortBy,
                favorites,
                toggleFavorite,
                addStudent,
                removeStudent,
                notification,
                allStudentsCount: students.length,
            }}
        >
            {children}
        </StudentContext.Provider>
    );
};

export const useStudents = (): StudentContextType => {
    const context = useContext(StudentContext);
    if (!context) {
        throw new Error("useStudents must be used within a StudentProvider");
    }
    return context;
};
