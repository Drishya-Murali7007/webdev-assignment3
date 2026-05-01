function StudentRow({ student, updateScore, saveScore }) {
  const handleChange = (e) => {
    updateScore(student.id, Number(e.target.value));
  };

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={handleChange}
          disabled={student.locked}
        />
      </td>

      <td>
        <button
          onClick={() => saveScore(student.id)}
          disabled={student.locked}
          className="save-btn"
        >
          {student.locked ? "Saved" : "Save"}
        </button>
      </td>

      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;