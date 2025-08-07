import React from "react";

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <form style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
