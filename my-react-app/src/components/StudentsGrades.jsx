function StudentsGrades(props) {
  console.log(props.studentsDataToChild);

  return (
    <div className="studentsGradesWrapper">
      <h1>Students</h1>
      <ul>
        {props.studentsDataToChild.length !== 0 &&
          props.studentsDataToChild.map((item) => (
            <li key={item.id}>
              <p>{`${item.studentsName} ${item.studentsSurname}`}</p>
              <div>{item.studentsGrades}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default StudentsGrades;
