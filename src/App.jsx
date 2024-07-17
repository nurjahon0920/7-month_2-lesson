import React, { useEffect, useState } from "react";
import { UserProvider } from "./context/userContext";
// import Counter from "./components/Counter";
import StudentInput from "./components/StudentInput";
import StudentList from "./components/StudentList";
import "./index.scss"; // Ensure you have the styles imported

const App = () => {
  return (
    <div className="container pt-3">
      <UserProvider>
        {/* <Counter /> */}
        <StudentInput />
        <StudentList />
      </UserProvider>
    </div>
  );
};

export default App;
