import React from "react";
import "./WorkExperience.css";
import middleImg from "../../Assets/middle.png"; // make sure the image is here

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h1 className="deatilsfonttyello22">My Work Experience</h1>

      <div className="workexperince">
        <div className="work-column">
          <div className="work-item">
            <h2 className="uxuitextexperience">UXUI Designer</h2>
            <h1 className="designtext1">
              Design intuitive and visually engaging digital <br />
              interfaces that enhance usability and deliver <br />
              meaningful user experiences.
            </h1>
          </div>
          <div className="work-item">
            <h2 className="uxuitextexperience">UXUI Designer</h2>
            <h1 className="designtext1">
              Design intuitive and visually engaging digital <br />
              interfaces that enhance usability and deliver <br />
              meaningful user experiences.
            </h1>
          </div>
          <div className="work-item">
            <h2 className="uxuitextexperience">UXUI Designer</h2>
            <h1 className="designtext1">
              Design intuitive and visually engaging digital <br />
              interfaces that enhance usability and deliver <br />
              meaningful user experiences.
            </h1>
          </div>
        </div>

        <div className="work-image">
          <img src={middleImg} alt="Middle Illustration" />
        </div>

        <div className="work-column">
          <div className="work-item">
            <h2 className="uxuitextexperience">UXUI Designer</h2>
            <h1 className="designtext1">
              Design intuitive and visually engaging digital <br />
              interfaces that enhance usability and deliver <br />
              meaningful user experiences.
            </h1>
          </div>
          <div className="work-item">
            <h2 className="uxuitextexperience">UXUI Designer</h2>
            <h1 className="designtext1">
              Design intuitive and visually engaging digital <br />
              interfaces that enhance usability and deliver <br />
              meaningful user experiences.
            </h1>
          </div>
          <div className="work-item">
            <h2 className="uxuitextexperience">UXUI Designer</h2>
            <h1 className="designtext1">
              Design intuitive and visually engaging digital <br />
              interfaces that enhance usability and deliver <br />
              meaningful user experiences.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;