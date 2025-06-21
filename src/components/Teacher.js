import { useEffect, useState } from "react";
import Url from "../stores/Url";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
// import AddMarks from "./AddMarks";

function Teacher() {
  const [courses, setcourses] = useState([]);
  const [teacher, setteacher] = useState([]);
  const av = useNavigate();
  const id = window.localStorage.getItem("token");
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true) ;
    axios
      .get(`${Url}/teacher-data/${id}`)
      .then((res) => {
        setLoading(false) ;
        setteacher(res.data);
      })
      .catch((err) => {
        setLoading(false) ;
        console.log("error at client side", err);
        // av('/error')
      });
  }, [id]);

  useEffect(() => {
    setLoading(true) ;
    axios
      .get(`${Url}/teacher-course-data/${id}`)
      .then((res) => {
        setcourses(res.data);
        setLoading(false) ;
        // console.log(res.data) ;
      })
      .catch((err) => {
        console.log("error at client side", err);
        // av('/error')
      });
  }, [id]);

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
          <div className="mt-3 fw-semibold text-primary">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <>
    <NavBar></NavBar>
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
    </>
  );
}

export default Teacher;
