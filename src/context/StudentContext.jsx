
import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [assignedStudents, setAssignedStudents] = useState({
    sports: [],
    cultural: [],
    science: [],
  });

  function assignStudent(event, student) {
    setAssignedStudents(function (previous) {
      const currentList = previous[event];

      // Prevent duplicate students in the same event
      const alreadyAssigned = currentList.some(function (item) {
        return item.id === student.id;
      });

      if (alreadyAssigned) {
        return previous;
      }

      return {
        ...previous,
        [event]: [...currentList, student],
      };
    });
  }

  function removeStudent(event, studentId) {
    setAssignedStudents(function (previous) {
      return {
        ...previous,
        [event]: previous[event].filter(function (student) {
          return student.id !== studentId;
        }),
      };
    });
  }

  return (
    <StudentContext.Provider
      value={{
        assignedStudents,
        assignStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
