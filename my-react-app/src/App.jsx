import { useState } from "react";
import AddStudentsForm from "./components/AddStudentsForm";
import StudentsGrades from "./components/StudentsGrades";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function getStudentsData(data) {
    setData((prev) => [...prev, data]);
  }

  console.log(data);

  return (
    <div className="container">
      <AddStudentsForm
        studentsDataFromChild={(data) => getStudentsData(data)}
      />
      {/* <AddStudentsForm studentsDataFromChild={(data) => setData(data)} /> tak samo tylko krocej z uzyciem funkcji anonimowej*/}
      {/* Powyżej w srodku nawiasow klamrowych mamy anonimową funkcję w której odebrany jako data obiekt zapisujemy do useStatu data */}
      <StudentsGrades studentsDataToChild={data} />
    </div>
  );
}

export default App;
