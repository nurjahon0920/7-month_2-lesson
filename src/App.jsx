import React from "react";
import { UserProvider } from "./context/userContext";
// import Counter from "./components/Counter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

const App = () => {
  return (
    <UserProvider>
      {/* <Counter /> */}
      <TodoInput />
      <TodoList />
      <TodoItem />
    </UserProvider>
  );
};

export default App;
