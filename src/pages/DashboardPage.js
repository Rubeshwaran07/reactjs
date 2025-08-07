import React from "react";

function DashboardPage() {
  return (
    <div className="container">
      <h2 className="mb-4">User Dashboard</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text display-6">1024</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5 className="card-title">Active Sessions</h5>
              <p className="card-text display-6">76</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5 className="card-title">Tickets Resolved</h5>
              <p className="card-text display-6">891</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
