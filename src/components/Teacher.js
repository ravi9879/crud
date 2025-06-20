import { useEffect, useState } from "react";
import Url from "../stores/Url";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import AddMarks from "./AddMarks";

function Teacher() {
  const [courses, setcourses] = useState([]);
  const [teacher, setteacher] = useState([]);
  const av = useNavigate();
  const id = window.localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${Url}/teacher-data/${id}`)
      .then((res) => {
        setteacher(res.data);
      })
      .catch((err) => {
        console.log("error at client side", err);
        // av('/error')
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${Url}/teacher-course-data/${id}`)
      .then((res) => {
        setcourses(res.data);
        // console.log(res.data) ;
      })
      .catch((err) => {
        console.log("error at client side", err);
        // av('/error')
      });
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Teacher Profile</h4>
            </div>
            <div className="card-body">
              {teacher.map((data) => (
                <div key={data._id}>
                  <p>
                    <strong>ID:</strong> {data.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {data.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {data.email_id}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card shadow mb-4">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Courses Taught</h5>
            </div>
            <div className="card-body">
              <p className="fw-semibold">Total Courses: {courses.length}</p>
              <div className="row">
                {courses.map((data) => (
                  <div className="col-md-6 mb-3" key={data._id}>
                    <div className="border rounded p-3 h-100">
                      <p className="mb-1">
                        <strong>Course ID:</strong> {data.course_id}
                      </p>
                      <p className="mb-0">
                        <strong>Name:</strong> {data.name}
                      </p>
                    </div>
                  </div>
                ))}
                {courses.length === 0 && (
                  <div className="col-12 text-muted">No courses assigned.</div>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <Link to="/create-course" className="btn btn-outline-primary">
              Register New Course
            </Link>
            <button
              className="btn btn-outline-success"
              onClick={() => av("/add-marks")}
            >
              Add Marks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
