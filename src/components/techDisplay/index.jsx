import TechCards from "../../components/techCards";
import "./style.css";

const TechDisplay = () => {
  return (
    <div className="TechSection">
      <span className="techsTitle">Tecnologias</span>
      <div className="CardBox">
        <TechCards />
      </div>
    </div>
  );
};

export default TechDisplay;
