import axios from "axios";
import { createContext, useEffect, useState } from "react";
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

export const UserContext = createContext();

function UserProvider(props) {
  // const [students, setStudents] = useState([]);
  const [studentList, setStudentList] = useState(students);

  function addStudent(student) {
    setStudentList((prevState) => [...prevState, student]);
  }
  function removeStudent(id) {
    setStudentList(setStudentList.filter((student) => student.id !== id));
  }
  function updateStudent(student) {
    let index = -1;
    for (let i = 0; i < studentList.length; i++) {
      if (studentList[i].id === student.id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      studentList[index] = student;
      setStudentList([...studentList]);
    }
    // const updatedStudents = studentList.map((s) =>
    //   s.id === student.id ? student : s
    // );
    // setStudentList((prevState) => [...prevState, student]);
  }

  return (
    <UserContext.Provider value={{ students, addStudent, removeStudent }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
