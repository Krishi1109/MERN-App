import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [enroll, setEnroll] = useState(0);
  const [cgpa, setCgpa] = useState(0);
  const [dept, setDept] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const navigate = useNavigate()

  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:5000/api/user/get/${id}`);

    const result = await response.json();

    if (!response.ok) {
      console.log("Hello");
      setError(result.message);
    }
    if (response.ok) {
      console.log(result.result);
      setName(result.result.name);
      setEmail(result.result.email);
      setAge(result.result.age);
      setEnroll(result.result.enroll)
      setDept(result.result.dept)
      setCgpa(result.result.cgpa)
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const updatedUser = { name, email, age };

    const response = await fetch(`http://localhost:5000/api/user/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "content-type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log("Hello");
      setError(result.message);
    }
    if (response.ok) {
      console.log(result.message);

      setMessage(result.message)
      setError("");
      setName("");
      setEmail("");
      setAge(0);

      navigate("/all")
    }
  }

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}

      <h2 className="text-center">Edit Data</h2>
      <form onSubmit={editHandler}>
      <div className="row">
          <div className="mb-3 col-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 col-4">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 col-4">
            <label className="form-label">Enrollment Number</label>
            <input
              type="number"
              className="form-control"
              value={enroll}
              onChange={(e) => setEnroll(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-4">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3 col-4">
            <label className="form-label">CGPA</label>
            <input
              type="number"
              className="form-control"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
            />
          </div>
          <div className="mb-3 col-4">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
