import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const StudentInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { addStudent } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(firstName, lastName);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="col form-control"
          value={firstName}
          onChange={(e) => setInput(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          className="col form-control"
          value={firstName}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Last Name"
        />
        <button type="submit" className="ml-2 btn btn-primary ms-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default StudentInput;
