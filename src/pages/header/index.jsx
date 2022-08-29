import "./style.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="aboutMe">
      <div className="contactInfo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          href="https://github.com/aggierosa"
        >
          <BsGithub size={30} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          href="https://linkedin.com/in/agnesrsilva"
        >
          <BsLinkedin size={30} />
        </a>
      </div>
      <div className="nameInfo">
        <h3>Ágnes Silva</h3>
        <div className="glitch">
          <h1 className="fullStack">Full Stack</h1>
          <h1 className="developer">D e v e l o p e r</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
