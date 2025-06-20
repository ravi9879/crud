import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Url from "../stores/Url";

export default function Delete() {
  const course_id = useRef();
  const course_name = useRef();
  const roll_no = window.localStorage.getItem("token");
  const av = useNavigate();

  const se = async (event) => {
    event.preventDefault();
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
  };

  return (
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
  );
}
