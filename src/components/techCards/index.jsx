import { useContext } from "react";
import { TechContext } from "../../providers/techCards/techCards";
import "./style.css";

const TechCards = () => {
  const { techs } = useContext(TechContext);

  return (
    <div className="cardSection">
      {techs.map((tech) => (
        <div className="techCardBox">
          <img
            className="techCard"
            src={tech.image}
            title={tech.title}
            alt={tech.title}
          />
        </div>
      ))}
    </div>
  );
};

export default TechCards;
