import React from "react";

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Reach us at support@example.com or fill out the form below.</p>
      <form style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
