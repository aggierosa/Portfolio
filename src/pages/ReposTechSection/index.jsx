import ReposDisplay from "../../components/reposDisplay";
import TechDisplay from "../../components/techDisplay";
import "./style.css";

const ReposTech = () => {
  return (
    <div className="reposTech">
      <ReposDisplay className="repos"></ReposDisplay>
      <TechDisplay className="techs"></TechDisplay>
    </div>
  );
};

export default ReposTech;
