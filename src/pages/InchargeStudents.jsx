
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

const eventDetails = {
  sports: {
    title: "Sports Day Incharge",
    description: "Students assigned to the sports event.",
  },
  cultural: {
    title: "Cultural Day Incharge",
    description: "Students assigned to cultural activities.",
  },
  science: {
    title: "Science Expo Incharge",
    description: "Students assigned to the science exhibition.",
  },
};

function InchargeStudents() {
  const { event } = useParams();

  const { assignedStudents, removeStudent } = useContext(StudentContext);

  const details = eventDetails[event];

  if (!details) {
    return (
      <main className="page">
        <h1>Event not found</h1>
        <Link to="/">Back to all students</Link>
      </main>
    );
  }

  const students = assignedStudents[event];

  return (
    <main className="page">
      <div className="page-heading">
        <p className="eyebrow">INCHARGE DASHBOARD</p>
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <p className="count">
          Total assigned: {students.length}
        </p>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <h2>No students added yet</h2>
          <p> Go to the student list and assign students to this event. </p>
          <Link to="/" className="btn"> Browse Students </Link>
        </div>
      ) : (
        <section className="student-list">
          {students.map(function (student) {
            return (
              <StudentCard
                key={student.id}
                student={student}
                buttonText="Remove"
                onAssign={function () {
                  removeStudent(event, student.id);
                }}
              />
            );
          })}
        </section>
      )}
    </main>
  );
}

export default InchargeStudents;