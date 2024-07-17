import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserProvider(props) {
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

  const addStudent = (firstname, lastname) => {
    const newStudent = {
      id: students.length + 1,
      firstname,
      lastname,
    };
    setStudents((prevState) => [...prevState, newStudent]);
  };

  const removeStudent = (id) => {
    setStudents((prevState) =>
      prevState.filter((student) => student.id !== id)
    );
  };

  const updateStudent = (updatedStudent) => {
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  return (
    <UserContext.Provider
      value={{ students, addStudent, removeStudent, updateStudent }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
