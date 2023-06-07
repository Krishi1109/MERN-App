import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./UI/Input";
import Lable from "./UI/Lable";

const Create = () => {
  const [formData, setFormData] = useState({})
   
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // console.log(name, email, age, enroll, cgpa, dept, demo);


console.log(formData)

  const submitHandler = async (e) => {
    e.preventDefault();
    const addUser = formData;

    console.log("dsds:" + addUser);
    // const response = await fetch("http://localhost:5000/api/user/add", {
    //   method: "POST",
    //   body: JSON.stringify(addUser),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });

    // const result = await response.json();

    // if (!response.ok) {
    //   console.log("Hello");
    //   setError(result.message);
    // }
    // if (response.ok) {
    //   console.log(result.message);

    //   setMessage(result.message);
    //   setError("");
    //   setName("");
    //   setEmail("");
    //   setAge(0);

    //   navigate("/all");
    // }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}
      <h2 className="text-center">Enter Data</h2>
      <form onSubmit={submitHandler} className="m-4 p-4">
        <div className="row">
         
          <div className="mb-3 col-4">
          <Input type="text" name={'name'}  formData={formData} setFormData={setFormData} />
          
          </div>
          <div className="mb-3 col-4">
          <Input type="email" name={'email'}  formData={formData} setFormData={setFormData} />
          </div>
          {/* <div className="mb-3 col-4">
            <label className="form-label">Enrollment Number</label>
            <input
              type="number"
              className="form-control"
              value={enroll}
              onChange={(e) => setEnroll(e.target.value)}
            />
          </div> */}
        </div>
        {/* <div className="row">
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
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
