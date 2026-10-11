
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

const students = [
    { id: "101", name: "Keerthana" },
    { id: "102", name: "Keerthi" },
    { id: "103", name: "Mona" },
    { id: "104", name: "Kavi" },
    { id: "105", name: "Roshini" },
    { id: "106", name: "Narthana" },
];

const events = [
    { value: "sports", label: "Sports Day" },
    { value: "cultural", label: "Cultural Day" },
    { value: "science", label: "Science Expo" },
];

function StudentList() {
    const { assignedStudents, assignStudent } =
        useContext(StudentContext);

    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState({});
    const [message, setMessage] = useState("");

    function handleAssign(student) {
        const event = selectedEvent[student.id];

        if (!event) {
            setMessage("Please select an event first.");
            return;
        }

        const alreadyAssigned = assignedStudents[event].some(
            function (item) {
                return item.id === student.id;
            }
        );

        if (alreadyAssigned) {
            setMessage(student.name + " is already assigned to this event.");
            return;
        }

        assignStudent(event, student);
        setMessage(student.name + " assigned successfully!");

        // Navigate to the selected event's page
        navigate("/incharge/" + event);
    }

    return (
        <main className="page">
            <div className="page-heading">
                <p className="eyebrow">STUDENT MANAGEMENT</p>
                <h1>All Students</h1>
                <p>Choose an event and assign a student to its incharge.</p>
            </div>

            {message && (
                <div className="overlay">
                    <div className="alert-modal" role="alert">
                        <p>{message}</p>
                        <button onClick={() => setMessage("")}>OK</button>
                    </div>
                </div>
            )}


            <section className="student-list">
                {students.map(function (student) {
                    return (
                        <StudentCard
                            key={student.id}
                            student={student}
                            onAssign={function () {
                                handleAssign(student);
                            }}
                        >
                            <select
                                className="event-select"
                                aria-label={"Select event for " + student.name}
                                value={selectedEvent[student.id] || ""}
                                onChange={function (event) {
                                    setSelectedEvent(function (previous) {
                                        return {
                                            ...previous,
                                            [student.id]: event.target.value,
                                        };
                                    });
                                    setMessage("");
                                }}
                            >
                                <option value="">Select event</option>
                                {events.map(function (event) {
                                    return (
                                        <option key={event.value} value={event.value}>
                                            {event.label}
                                        </option>
                                    );
                                })}
                            </select>
                        </StudentCard>
                    );
                })}
            </section>
        </main>
    );
}

export default StudentList;