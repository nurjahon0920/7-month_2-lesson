import React from "react";

const TodoInput = () => {
  return (
    <div className="row">
      <input type="text" className="col form-control" />
      <div className="ml-2 w btn btn-primary">Add Todo</div>
    </div>
  );
};

export default TodoInput;
