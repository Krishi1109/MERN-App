import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Read = () => {
  let index = 0;

  
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("")

  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/user/all");

    const result = await response.json();

    if (!response.ok) {
      console.log("Hello");
      setError(result.message);
    }
    if (response.ok) {
      setData(result.result);
    }
  };

  const deleteHandler = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/user/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.log("Hello");
      setError(result.message);
    }
    if (response.ok) {
      setMessage("Deleted Successfully");

      setTimeout(() => {
        setMessage("");
        getData();
      }, 1000);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="container my-2">
      <h2>All Data</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}
      {data?.length===0 && <div className="alert alert-danger">No data Avilable <Link to="/">Click Here</Link> to add data. </div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Enrolment</th>
            <th scope="col">Department</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((elem) => (
            <tr key={elem.email}>
              <th scope="row">{(index += 1)}</th>
              <td>{elem.name}</td>
              <td>{elem.enroll}</td>
              <td>{elem.dept}</td>
              <td>{elem.email}</td>
              <td>{elem.age}</td>
              <td>
                <button
                  href="#"
                  className="card-link btn btn-danger"
                  onClick={() => deleteHandler(elem._id)}
                >
                  Delete
                </button>
                <Link to={`/${elem._id}`} className="card-link btn btn-primary">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="row g-4">
        {data?.map((elem) => (
          <div className="col-3">
            <div className="card bg-light">
              <div className="card-body">
                <h4>{(index += 1)}</h4>
                <h5 className="card-title">Name : {elem.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{elem.email}</h6>
                <p className="card-text">{elem.age}</p>
                <button href="#" className="card-link btn btn-danger">
                  Delete
                </button>
                <button href="#" className="card-link btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Read;
