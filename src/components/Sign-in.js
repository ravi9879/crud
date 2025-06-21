import { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Url from "../stores/Url";
import NavBar from "./NavBar";

export default function SignIn() {
  const [user, setuser] = useState("");
  const name = useRef();
  const email_id = useRef();
  const password = useRef();
  const roll_no = useRef();
  const id = useRef();
  const av = useNavigate();
  const [loading, setLoading] = useState(false); 

  const student_sign = async (event) => {
    event.preventDefault();
    setLoading(true) ;
    try {
      await axios.post(`${Url}/student-sign/`, {
        roll_no: roll_no.current.value,
        email_id: email_id.current.value,
        name: name.current.value,
        password: password.current.value,
      });
      av("/");
    } catch (err) {
      setLoading(false) ;
      console.log("error at client side", err);
      av("/error");
    }
  };

  const teacher_sign = async (event) => {
    event.preventDefault();
    setLoading(true) ;
    try {
      await axios.post(`${Url}/teacher-sign/`, {
        id: id.current.value,
        email_id: email_id.current.value,
        name: name.current.value,
        password: password.current.value,
      });
      av("/");
    } catch (err) {
      setLoading(false) ;
      console.log("error at client side", err);
      av("/error");
    }
  };

  const handle = (event) => {
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
          <div className="mt-3 fw-semibold text-primary">Processing...</div>
        </div>
      </div>
    );
  }

  return (
    <>
    <NavBar></NavBar>
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ minWidth: 350, maxWidth: 420 }}>
        <h2 className="card-title text-center mb-4 text-primary">Sign Up</h2>
        <form
          onSubmit={user === "Student" ? student_sign : teacher_sign}
          className="mb-3"
        >
          <div className="mb-3">
            <label className="form-label">User Type</label>
            <select
              className="form-select"
              onChange={handle}
              name="type"
              required
            >
              <option value="">--Select type--</option>
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
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
          {user === "Teacher" && (
            <div className="mb-3">
              <label className="form-label">Id</label>
              <input
                type="text"
                name="id"
                placeholder="Enter your teacher id"
                ref={id}
                className="form-control"
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              name="email_id"
              placeholder="Enter your email id"
              ref={email_id}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={name}
              className="form-control"
              required
            />
          </div>
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
        <p className="text-center text-secondary">
          Already Registered?{" "}
          <Link to="/" className="text-decoration-none text-danger fw-semibold">
            Please Login
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
