import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div className="">
      {students.map((student) => (
        <div className="">
          <StudentItem key={student.id} student={student} />
        </div>
      ))}
    </div>
  );
};

export default StudentList;
