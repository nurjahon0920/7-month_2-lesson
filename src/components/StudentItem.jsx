import { useState } from "react";

const StudentItem = ({ student, onDelete, onUpdate }) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [firstname, setFirstname] = useState(student.firstname);
  const [lastname, setLastname] = useState(student.lastname);

  const handleUpdate = () => {
    onUpdate({ ...student, firstname, lastname });
    setToggleUpdate(false);
  };

  return (
    <div
      className="d-flex mb-2 student_item align-items-center"
      style={{ width: "100%", backgroundColor: "Gray", padding: "10px 0" }}>
      <h5
        style={{
          backgroundColor: "#222",
          padding: "4px 2px",
          marginRight: "5px",
          borderRadius: "4px",
          color: "white",
          height: "30px",
          textAlign: "center",
          width: "24px",
        }}>
        {student.id}
      </h5>
      <div className="d-flex" style={{ width: "100%", alignItems: "center" }}>
        {toggleUpdate ? (
          <div className="d-flex" style={{ width: "100%", maxWidth: "1090px" }}>
            <input
              type="text"
              className="form-control w540"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              // style={{ width: "100%" }}
            />
            <input
              type="text"
              className="form-control w540 ml-2"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              // style={{ width: "100%" }}
            />
          </div>
        ) : (
          <div className="d-flex" style={{ width: "100%", maxWidth: "1090px" }}>
            <h4 className="w540">{student.firstname}</h4>
            <h4 className="w540 ml-2">{student.lastname}</h4>
          </div>
        )}
        <div className="buttons ms-2">
          <button
            className="btn btn-primary"
            onClick={() => setToggleUpdate(!toggleUpdate)}>
            {toggleUpdate ? (
              <button
                style={{
                  backgroundColor: "inherit",
                  border: "none",
                  color: "white",
                }}
                onClick={handleUpdate}>
                SAVE
              </button>
            ) : (
              "EDIT"
            )}
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => onDelete(student.id)}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
