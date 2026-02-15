const courseTitle = "React Fundamentals"; // variable outside component

function App() {
  const studentName = "Zeineb"; // variable inside component

  const student = {
    name: studentName,
    age: 19,
    track: "STEM"
  };

  function sayHello() {
    return `Hello, ${studentName}!`;
  }

  return (
    <div>
      <h1>Welcome to My First React Component!</h1>
      <p>My name is {studentName}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="studentInput">Enter your name:</label>
      <input type="text" id="studentInput" />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>
    </div>
  );
}

export default App;
