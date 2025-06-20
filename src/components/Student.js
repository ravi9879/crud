import { useEffect, useState } from "react";
import Url from "../stores/Url";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Student() {
  const [stud, setstud] = useState([]);
  const [courses, setcourses] = useState([]);
  const av = useNavigate();
  const roll_no = window.localStorage.getItem("token");
  const [studentImageUrl, setStudentImageUrl] = useState("");

  const handleImageUpload = () => {};

  useEffect(() => {
    axios
      .get(`${Url}/student-data/${roll_no}`)
      .then((res) => {
        setstud(res.data);
      })
      .catch((err) => {
        console.log("error at client side", err);
        av("/error");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${Url}/student-course-data/${roll_no}`)
      .then((res) => {
        setcourses(res.data);
      })
      .catch((err) => {
        console.log("error at client side", err);
        av("/error");
      });
  }, []);
  return (
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
  );
}

export default Student;
