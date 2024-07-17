import { useState } from "react";

const StudentItem = ({ student }) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  return (
    <div
      className="d-flex mb-2 student_item align-items-center"
      style={{
        maxWidth: "",
        width: "100%",
        backgroundColor: "Gray",
        padding: "10px 0",
      }}>
      <h5
        className=""
        style={{
          backgroundColor: "#222",
          paddingRight: "2px",
          paddingLeft: "2px",
          paddingTop: "4px",
          marginRight: "5px",
          borderRadius: "4px",
          color: "white",
          height: "30px",
          textAlign: "center",
          width: "24px",
        }}>
        {student.id}
      </h5>
      <div className="d-flex" style={{ maxWidth: "", width: "100%" }}>
        {toggleUpdate ? (
          <div className="d-flex" style={{ width: "100%", maxWidth: "1085px" }}>
            <input
              type="text"
              className="form-control w540"
              style={{ width: "540px", outline: "none" }}
            />
            <input
              type="text"
              className="w540 form-control ml10"
              style={{ width: "540px", outline: "none" }}
            />
          </div>
        ) : (
          <div className="d-flex" style={{ width: "100%", maxWidth: "1085px" }}>
            <p className="w540">{student.firstname}</p>
            <p className="w540 ml10">{student.lastname}</p>
          </div>
        )}
        <div className="buttons ms-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              setToggleUpdate(!toggleUpdate);
            }}>
            {toggleUpdate ? "UPDATE" : "EDIT "}
          </button>
          <button className="btn btn-danger ms-2">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
