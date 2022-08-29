import { useContext } from "react";
import { ReposContext } from "../../providers/repos/repos";
import "./style.css";

const RepoCards = () => {
  const { repos } = useContext(ReposContext);

  return (
    <div className="cardSection">
      {repos.map((repo) => (
        <div className="box">
          <span className="arrow">{`>`}</span>
          <div className="repoCardBox">
            <img
              className="repoCard"
              src={repo.image}
              title={repo.title}
              alt={repo.title}
            />
            <div className="cardTexts">
              <span className="repoTitle">{repo.title}</span>
              <a
                href={repo.link}
                className="clickMe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`>`} check it out {`<`}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoCards;
