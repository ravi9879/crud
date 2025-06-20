import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="card shadow p-4 text-center"
        style={{ minWidth: 350, maxWidth: 400 }}
      >
        <div className="mb-3">
          <span className="display-1 text-danger">
            <i className="bi bi-exclamation-triangle-fill"></i>
          </span>
        </div>
        <h2 className="mb-3 text-danger">Oops! Something went wrong.</h2>
        <p className="mb-4 text-secondary">
          An unexpected error has occurred. Please try again later.
        </p>
        <Link to="/" className="btn btn-primary w-100">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
