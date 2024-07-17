import React from "react";

const StudentItem = ({ student }) => {
  return (
    <div className="d-flex gap-2  mb-2" style={{ maxWidth: "", width: "100%" }}>
      <h5 className="">{student.id}</h5>
      <div
        className="d-flex justify-content-between"
        style={{ maxWidth: "", width: "100%" }}>
        <p>{student.firstname}</p>
        <p>{student.lastname}</p>
        <div className="buttons">
          <button className="btn btn-primary">EDIT</button>
          <button className="btn btn-danger ms-2">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
