import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Admin() {
  return (

    <>
    <NavBar></NavBar>
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      
      <div className="card shadow p-4" style={{ minWidth: 350, maxWidth: 400 }}>
        <h2 className="card-title text-center mb-4 text-primary">
          Admin Panel
        </h2>
        <div className="d-grid gap-3">
          <Link to="/si" className="btn btn-outline-primary">
            New Student Registration
          </Link>
          <Link to="/si" className="btn btn-outline-success">
            New Teacher Registration
          </Link>
          <Link to="/update" className="btn btn-outline-warning">
            Update Details
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Admin;
