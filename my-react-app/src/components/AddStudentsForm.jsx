import { useState } from "react";

function AddStudentsForm(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [grades, setGrades] = useState("");

  function nameHandler(event) {
    setName(event.target.value); //bierzesz literke z klawiatury i zapisujesz do name
  }

  function surnameHandler(event) {
    setSurname(event.target.value);
  }

  // function gradesHandler(event) {
  //   setGrades(event.target.value);
  // }

  function submitFormHandler(event) {
    event.preventDefault(); // event zatwierdzenie formularza automatycznie przeładowuje stronę, tą komendą wyłącza się to odświeżenie

    const studentsData = {
      studentsName: name,
      studentsSurname: surname,
      studentsGrades: grades,
      id: Math.floor(Math.random() * 1000),
    };

    props.studentsDataFromChild(studentsData);

    setName("");
    setSurname("");
    setGrades("");
  }

  return (
    <form onSubmit={submitFormHandler}>
      <label>Add student</label>
      <input
        onChange={nameHandler}
        value={name}
        type="text"
        placeholder="Name"
        required
      ></input>
      <input
        onChange={surnameHandler}
        value={surname}
        type="text"
        placeholder="Surname"
        required
      ></input>
      <input
        // onChange={gradesHandler}
        onChange={(event) => setGrades(event.target.value)} // tak też można jest to dokładnie to samo co w powyższych przypadkach tylko inaczej zapisane
        value={grades}
        type="text"
        placeholder="Grades"
        required
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
export default AddStudentsForm;
