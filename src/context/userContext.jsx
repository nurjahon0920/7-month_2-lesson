import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <UserContext.Provider value={{ students, addStudent }}>
      {children}
    </UserContext.Provider>
  );
};
