import React, { useState } from "react";
import { useStudents } from "./StudentContext";

export const AddStudentForm: React.FC = () => {
  const { addStudent, students } = useStudents();
  
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    major: "",
    gpa: "",
    courses: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.id.trim()) errs.id = "ID is required";
    else if (students.some((s) => s.id === formData.id)) errs.id = "ID must be unique";

    if (!formData.major.trim()) errs.major = "Major is required";

    const gpaNum = parseFloat(formData.gpa);
    if (!formData.gpa || isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      errs.gpa = "GPA must be between 0 and 4.0";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addStudent({
      id: formData.id.trim(),
      name: formData.name.trim(),
      major: formData.major.trim(),
      gpa: parseFloat(formData.gpa),
      courses: formData.courses
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
    });

    setFormData({ id: "", name: "", major: "", gpa: "", courses: "" });
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Add New Student</h3>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            className="form-input"
            placeholder="e.g. Abrar Shahriar"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="id">Student ID</label>
          <input
            id="id"
            name="id"
            className="form-input"
            placeholder="e.g. 105"
            value={formData.id}
            onChange={handleChange}
          />
          {errors.id && <span className="error-text">{errors.id}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="major">Major</label>
          <input
            id="major"
            name="major"
            className="form-input"
            placeholder="e.g. Computer Science"
            value={formData.major}
            onChange={handleChange}
          />
          {errors.major && <span className="error-text">{errors.major}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="gpa">GPA</label>
          <input
            id="gpa"
            name="gpa"
            type="number"
            step="0.01"
            className="form-input"
            placeholder="e.g. 3.85"
            value={formData.gpa}
            onChange={handleChange}
          />
          {errors.gpa && <span className="error-text">{errors.gpa}</span>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="courses">Courses (comma-separated)</label>
          <input
            id="courses"
            name="courses"
            className="form-input"
            placeholder="e.g. C++, React, OpenGL"
            value={formData.courses}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="submit-btn" type="submit">
        Add Student
      </button>
    </form>
  );
};