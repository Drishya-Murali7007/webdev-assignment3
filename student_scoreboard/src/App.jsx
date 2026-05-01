import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 80, locked: false },
    { id: 2, name: "Riya", score: 34, locked: false }
  ]);

  // update score (only if not locked)
  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id && !s.locked ? { ...s, score: newScore } : s
    ));
  };

  // lock/save score
  const saveScore = (id) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, locked: true } : s
    ));
  };

  // add student
  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name,
      score,
      locked: false
    };
    setStudents([...students, newStudent]);
  };

  // 📊 stats
  const totalStudents = students.length;
  const passedStudents = students.filter(s => s.score >= 40).length;
  const avgMarks =
    students.length > 0
      ? (students.reduce((sum, s) => sum + s.score, 0) / students.length)
      : 0;

  return (
    <div>
      <Header />
 
      <div className="stats">
        <p>Total Students: {totalStudents}</p>
        <p>Passed: {passedStudents}</p>
        <p>Average Marks: {avgMarks.toFixed(2)}</p>
      </div>

      <AddStudentForm addStudent={addStudent} />
      <StudentTable
        students={students}
        updateScore={updateScore}
        saveScore={saveScore}
      />
    </div>
  );
}

export default App;