import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Url from "../stores/Url";
import NavBar from "./NavBar";

export default function Delete() {
  const course_id = useRef();
  const course_name = useRef();
  const roll_no = window.localStorage.getItem("token");
  const av = useNavigate();
  const [loading, setLoading] = useState(false); 

  const se = async (event) => {
    event.preventDefault();
    setLoading(true) ;
    try {
      await axios.post(`${Url}/delete-course/`, {
        course_id: course_id.current.value,
        course_name: course_name.current.value,
        roll_no: roll_no,
      });
      av("/student");
    } catch (err) {
      console.log("error");
      av("/error");
    }
    finally{
      setLoading(false) ;
    }
  };


  if (loading) {
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light"
        style={{ zIndex: 2000, opacity: 0.85 }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="mt-3 fw-semibold text-primary">Processing...</div>
        </div>
      </div>
    );
  }

  return (
    <>
    <NavBar></NavBar>
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ minWidth: 350, maxWidth: 400 }}>
        <h2 className="card-title text-center mb-4 text-primary">
          Delete Student Course
        </h2>
        <form onSubmit={se}>
          <div className="mb-3">
            <label className="form-label">Course ID</label>
            <input
              type="text"
              name="course_id"
              placeholder="Enter the course ID"
              ref={course_id}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              name="course_name"
              placeholder="Enter the course name"
              ref={course_name}
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
