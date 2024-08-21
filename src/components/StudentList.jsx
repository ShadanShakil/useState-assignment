import { useState } from "react";
function StudentList() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [student, setStudent] = useState([]);

  const addStudent = () => {
    if (!name || !rollNo || !fatherName) {
      alert("please enter the following data");
    } else {
      setStudent([...student, { name, rollNo, fatherName }]);
      setName("");
      setRollNo("");
      setFatherName("");
    }
  };

  return (
    <div>
      <h2>Student Add</h2>
      {/* input  */}

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="RollNo"
          value={rollNo}
          id="rollNo"
          onChange={(e) => {
            setRollNo(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Father's Name"
          value={fatherName}
          id="fatherName"
          onChange={(e) => {
            setFatherName(e.target.value);
          }}
        />
        <button onClick={addStudent}>Add</button>
      </div>

      {/* Student table  */}
      <h2>Student's Table</h2>
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Father's Name</th>
          </tr>
        </thead>
        <tbody>
          {student.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.rollNo}</td>
              <td>{data.fatherName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
