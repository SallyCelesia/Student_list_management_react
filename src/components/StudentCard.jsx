
function StudentCard({
  student,
  onAssign,
  buttonText = "Assign",
  children,
}) {
  return (
    <article className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Roll No: {student.id}</p>
      </div>

      {children}

      <button className="btn" onClick={onAssign}>
        {buttonText}
      </button>
    </article>
  );
}

export default StudentCard;