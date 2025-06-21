import { useEffect, useState } from "react";
import Url from "../stores/Url";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

function Student() {
  const [stud, setstud] = useState([]);
  const [courses, setcourses] = useState([]);
  const av = useNavigate();
  const roll_no = window.localStorage.getItem("token");
  const [studentImageUrl, setStudentImageUrl] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleImageUpload = () => {};

  useEffect(() => {
    setLoading(true) ;
    axios
      .get(`${Url}/student-data/${roll_no}`)
      .then((res) => {
        setLoading(false) ;
        setstud(res.data);
      })
      .catch((err) => {
        setLoading(false) ;
        console.log("error at client side", err);
        av("/error");
      });
  }, []);

  useEffect(() => {
    setLoading(true) ;
    axios
      .get(`${Url}/student-course-data/${roll_no}`)
      .then((res) => {
        setcourses(res.data);
        setLoading(false) ;
      })
      .catch((err) => {
        setLoading(false) ;
        console.log("error at client side", err);
        av("/error");
      });
  }, []);

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
              <h4 className="mb-0">Student Profile</h4>
            </div>
            <div className="card-body">
              {/* Image Upload Section */}
              <div className="mb-4 text-center">
                <img
                  src={
                    studentImageUrl ||
                    "https://via.placeholder.com/100x100?text=Photo"
                  }
                  alt="Student"
                  className="rounded-circle mb-2"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    border: "2px solid #0d6efd",
                  }}
                />
                <form>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control mt-2"
                    style={{ maxWidth: 250, margin: "0 auto" }}
                    onChange={handleImageUpload}
                  />
                </form>
              </div>
              {/* Student Details */}
              {stud.map((data) => (
                <div key={data._id}>
                  <p>
                    <strong>Roll No:</strong> {data.roll_no}
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
            {/* <div className="card-body">
            {stud.map((data) => (
              <div key={data._id}>
                <p><strong>Roll No:</strong> {data.roll_no}</p>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email_id}</p>
              </div>
            ))}
          </div> */}
          </div>

          <div className="card shadow mb-4">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Registered Courses</h5>
            </div>
            <div className="card-body">
              <p className="fw-semibold">
                No Of Courses Registered: {courses.length}
              </p>
              <div className="row">
                {courses.map((data) => (
                  <div className="col-md-6 mb-3" key={data._id}>
                    <div className="border rounded p-3 h-100">
                      <p className="mb-1">
                        <strong>Course ID:</strong> {data.course_id}
                      </p>
                      <p className="mb-0">
                        <strong>Name:</strong> {data.course_name}
                      </p>
                    </div>
                  </div>
                ))}
                {courses.length === 0 && (
                  <div className="col-12 text-muted">
                    No courses registered.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <Link to="/create" className="btn btn-outline-primary">
              Register New Course
            </Link>
            <Link to="/delete" className="btn btn-outline-danger">
              Remove Courses
            </Link>
            <Link to="/result" className="btn btn-outline-success">
              Check Result
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Student;
