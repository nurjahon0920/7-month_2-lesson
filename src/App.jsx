import StudentInput from "./components/StudentInput";
import StudentList from "./components/StudentList";
import "./index.scss";

const App = () => {
  return (
    <div className="container pt-3">
      <StudentInput />
      <StudentList />
    </div>
  );
};

export default App;
