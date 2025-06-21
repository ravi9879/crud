import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link, redirect } from "react-router-dom";
import Url from "../stores/Url";
import NavBar from "./NavBar";

export default function Lo() {
  const password = useRef();
  const id = useRef();
  const roll_no = useRef();
  const av = useNavigate();
  const [user, setuser] = useState("");
  const [loading, setLoading] = useState(false);

  const studentLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      axios
        .post(`${Url}/student-login/`, {
          roll_no: roll_no.current.value,
          password: password.current.value,
        })
        .then((res) => {
          setLoading(false);
          if (res.data.Status === "Success") {
            window.localStorage.setItem("token", res.data.token);
            av("/student");
          } else {
            redirect("/si");
          }
        });
    } catch (err) {
      setLoading(false);
      console.log("error at client side", err);
      av("/error");
    }
  };

  const teacherLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      axios
        .post(`${Url}/teacher-login/`, {
          id: id.current.value,
          password: password.current.value,
        })
        .then((res) => {
          setLoading(false);
          if (res.data.Status === "Success") {
            window.localStorage.setItem("token", res.data.token);
            av("/teacher");
          } else {
            redirect("/si");
          }
        });
    } catch (err) {
      setLoading(false);
      console.log("error at client side", err);
      av("/error");
    }
  }; 

  const handle = (event) => {
    event.preventDefault();
    setuser(event.target.value);
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
          <div className="mt-3 fw-semibold text-primary">Logging in...</div>
        </div>
      </div>
    );
  }
  return (
    <>
    <NavBar></NavBar>
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
    </>
  );
}
