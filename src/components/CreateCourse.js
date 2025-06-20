import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Url from "../stores/Url";

export default function CreateCourse() {
  const name = useRef();
  const courseId = useRef();
  const av = useNavigate();

  const id = window.localStorage.getItem("token");
  const se = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${Url}/add-teacher-course/`, {
        id: id,
        name: name.current.value,
        course_id: courseId.current.value,
      });
      av("/teacher");
    } catch (err) {
      console.log("error at client side", err);
      av("/error");
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ minWidth: 350, maxWidth: 400 }}>
        <h2 className="card-title text-center mb-4 text-primary">Add Course</h2>
        <form onSubmit={se}>
          <div className="mb-3">
            <label className="form-label">Course ID</label>
            <input
              type="text"
              name="course_id"
              placeholder="Enter the course ID"
              ref={courseId}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the course name"
              ref={name}
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
