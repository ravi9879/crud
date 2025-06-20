import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link, redirect } from "react-router-dom";
import Url from "../stores/Url";

export default function Lo() {
  const password = useRef();
  const id = useRef();
  const roll_no = useRef();
  const av = useNavigate();
  const [user, setuser] = useState("");

  const studentLogin = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${Url}/student-login/`, {
          roll_no: roll_no.current.value,
          password: password.current.value,
        })
        .then((res) => {
          if (res.data.Status === "Success") {
            window.localStorage.setItem("token", res.data.token);
            // console.log(res.data.token) ;
            av("/student");
          } else {
            redirect("/si");
          }
        });
    } catch (err) {
      console.log("error at client side", err);
      av("/error");
    }
  };

  const teacherLogin = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${Url}/teacher-login/`, {
          id: id.current.value,
          password: password.current.value,
        })
        .then((res) => {
          if (res.data.Status === "Success") {
            window.localStorage.setItem("token", res.data.token);
            av("/teacher");
          } else {
            redirect("/si");
          }
        });
    } catch (err) {
      console.log("error at client side", err);
      av("/error");
    }
  };

  const handle = (event) => {
    event.preventDefault();
    setuser(event.target.value);
  };
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ minWidth: 350, maxWidth: 400 }}>
        <h2 className="card-title text-center mb-4 text-primary">Login</h2>
        <form onSubmit={user === "Student" ? studentLogin : teacherLogin}>
          <div className="mb-3">
            <label className="form-label">User Type</label>
            <select
              className="form-select"
              name="type"
              onChange={handle}
              required
            >
              <option value="">--Select type--</option>
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
          {user === "Teacher" && (
            <div className="mb-3">
              <label className="form-label">Id</label>
              <input
                type="text"
                name="id"
                placeholder="Enter your email id"
                ref={id}
                className="form-control"
                required
              />
            </div>
          )}
          {user === "Student" && (
            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input
                type="text"
                name="roll_no"
                placeholder="Enter your roll no"
                ref={roll_no}
                className="form-control"
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              ref={password}
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>
        <p className="text-center mt-3 text-secondary">
          Not a user? Please contact{" "}
          <Link
            to="/admin"
            className="text-decoration-none text-danger fw-semibold"
          >
            Admin
          </Link>
        </p>
      </div>
    </div>
  );
}
