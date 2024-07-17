import React, { useContext } from "react";
import StudentItem from "./StudentItem";
import { UserContext } from "./../context/userContext";

const StudentList = () => {
  const { students, removeStudent, updateStudent } = useContext(UserContext);

  return (
    <div className="">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onDelete={removeStudent}
          onUpdate={updateStudent}
        />
      ))}
    </div>
  );
};

export default StudentList;
