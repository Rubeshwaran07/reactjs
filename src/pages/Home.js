import React from "react";

function Home() {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Welcome to Prodapt Solutions</h2>

      <p className="lead text-center">
        Prodapt is a global leader in digital transformation and engineering services for the connectedness industry.
        With a sharp focus on telecom, media, and connected platforms, we deliver end-to-end solutions that drive innovation.
      </p>

      <div className="row my-5 align-items-center">
        <div className="col-md-6">
          <img
            src="https://static.toiimg.com/thumb/msid-111348057,width-1070,height-580,imgsize-40344,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            alt="Prodapt Office"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4>Why Prodapt?</h4>
          <ul>
            <li>Over 20+ years of expertise in telecom and connected services</li>
            <li>Recognized by industry leaders like Gartner and Everest</li>
            <li>Innovation-driven culture and high customer satisfaction</li>
          </ul>
        </div>
      </div>

      <div className="row my-5 align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.bmQmk9tKCpdVcCROondGCwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Innovation"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>
            To accelerate the connectedness revolution by delivering digital experiences,
            operational transformation, and network modernization to the world’s most innovative companies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
