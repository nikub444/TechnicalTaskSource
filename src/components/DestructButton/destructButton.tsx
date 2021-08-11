import { useState } from "react";
import "./destructButton.css";
import FacebookIcon from "./facebookIcon.png";
import LinkedinIcon from "./linkedinIcon.png";
import GithubIcon from "./githubIcon.png";
const DestructButton = () => {
  const [destruct, setDestruct] = useState<Number>(0);
  return (
    <div className="wrapper">
      {/* <div className="modalW" datatype={`${destruct}`}></div> */}
      <div className="modal" datatype={`${destruct}`}>
        <h1>Find me on:</h1>
        <div>
          <a
            href="https://www.facebook.com/kuba.niedzwiecki.7/"
            target="_blank"
            className="fac"
            rel="noreferrer"
          >
            <p>
              Facebook{" "}
              <img
                src={FacebookIcon}
                alt="Facebook Icon"
                style={{ height: 20 }}
              />
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-nied%C5%BAwiecki-22773b1b7/"
            target="_blank"
            className="linkedin"
            rel="noreferrer"
          >
            <p>
              Linkedin{" "}
              <img
                src={LinkedinIcon}
                alt="Linkedin Icon"
                style={{ height: 20 }}
              />
            </p>
          </a>
          <a
            href="https://github.com/nikub444"
            target="_blank"
            className="github"
            rel="noreferrer"
          >
            <p>
              Github{" "}
              <img
                src={GithubIcon}
                alt="Github Icon"
                style={{ height: 20, marginLeft: 32 }}
              />
            </p>
          </a>
        </div>
      </div>
      <div className="warning"></div>

      <div className="base" datatype={`${destruct}`}>
        <button id="activate" onClick={() => setDestruct(1)}>
          <span></span>
        </button>
      </div>
      {destruct}
    </div>
  );
};
export default DestructButton;
