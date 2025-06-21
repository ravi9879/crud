import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Url from "../stores/Url";
import NavBar from "./NavBar";

function AddMarks() {
  const [stud, setstud] = useState([]);
  const [courses, setcourses] = useState([]);
  const [course, setcourse] = useState("");
  const av = useNavigate();
  const id = window.localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${Url}/teacher-course-data/${id}`)
      .then((res) => {
        setcourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("error at client side", err);
        av("/error");
      });
  }, []);

  const handle = (event) => {
    event.preventDefault();
    setcourse(event.target.value);
    const course_name = event.target.value.split(" ")[1];
    const course_id = event.target.value.split(" ")[0];
    console.log("courses", course_id, course_name);
    setLoading(true);
    axios
      .get(`${Url}/marks-data/${event.target.value.split(" ")[1]}`, {
        course_id: course_id,
        course_name: course_name,
      })
      .then((res) => {
        setstud(res.data);
        console.log("students", res.data);
        if (res.data.length === 0) {
          setcourse("");
          alert("No students found for this course.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("error at client side", err);
        av("/error");
      });
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
          <div className="col-lg-10">
            <div className="card shadow mb-4">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Add Marks</h4>
              </div>
              <div className="card-body">
                <form className="mb-4">
                  <div className="row align-items-end">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Course</label>
                      <select
                        className="form-select"
                        onChange={handle}
                        required
                      >
                        <option value="">--Select Course--</option>
                        {courses.map((data) => (
                          <option
                            key={data._id}
                            value={`${data.course_id} ${data.name}`}
                          >
                            {data.course_id} - {data.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
                {course && (
                  <>
                    <h5 className="mb-3 text-secondary">
                      Selected Course: <span className="fw-bold">{course}</span>
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-bordered align-middle">
                        <thead className="table-light">
                          <tr>
                            <th>Roll No</th>
                            <th>Name</th>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stud.map((data) => (
                            <tr key={data._id}>
                              <td>{data.roll_no}</td>
                              <td>{data.name}</td>
                              <td>{data.course_id}</td>
                              <td>{data.course_name}</td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                            </tr>
                          ))}
                          {stud.length === 0 && (
                            <tr>
                              <td
                                colSpan="5"
                                className="text-center text-muted"
                              >
                                No students found for this course.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMarks;
