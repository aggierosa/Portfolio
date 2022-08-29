import RepoCards from "../repoCards";
import "./style.css";

const ReposDisplay = () => {
  return (
    <div className="reposSection">
      <span className="reposTitle">Projetos</span>
      <div className="CardBox">
        <RepoCards />
      </div>
    </div>
  );
};

export default ReposDisplay;
