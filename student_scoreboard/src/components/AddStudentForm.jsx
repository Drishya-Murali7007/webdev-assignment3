import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score) return;

    addStudent(name, Number(score));
 //to clear form
    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit}>
 <input  
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input  
        type="number"
        placeholder="Enter Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;