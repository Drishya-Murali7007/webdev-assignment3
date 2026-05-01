import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, saveScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <StudentRow
            key={s.id}
            student={s}
            updateScore={updateScore}
            saveScore={saveScore}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;