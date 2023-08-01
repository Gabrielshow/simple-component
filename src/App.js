import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faHome, faUserAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
//import Navbar from "./Navbar";
//import Article from "./Article";
import Image from "../public/assets/dreaded_focus.PNG"
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`container ${showNav ? "show-nav" : ""}`}>
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button id="open" onClick={() => setShowNav(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div className={`content ${showNav ? "show-nav" : ""}`}>
        <h1>Amazing Article</h1>
        <small>Adefela Shogbanmu</small>
        <p>Full-Stack Developer and Code Enthusiast</p>
        <h3>Developer's Drive</h3>
        <img src={Image} alt="eye" />
        <p>
          You must have this dreaded focus to succeed in life. Irrespective of
          distractions; One must soldier on and stay focused, infact extremely
          focused.
        </p>
        <p>Challenges will surely come but don't be dismayed.</p>
      </div>
      <nav className={showNav ? "show-nav" : ""}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUserAlt} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default App;
