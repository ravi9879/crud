import React from "react";

function Result() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="card shadow p-4 text-center"
        style={{ minWidth: 350, maxWidth: 400 }}
      >
        <div className="mb-3">
          <span className="display-1 text-warning">
            <i className="bi bi-hourglass-split"></i>
          </span>
        </div>
        <h2 className="mb-3 text-warning">Result Not Generated Yet</h2>
        <p className="mb-0 text-secondary">
          Please check back later. Your results will appear here once available.
        </p>
      </div>
    </div>
  );
}

export default Result;
