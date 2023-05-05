import "./index.css";
import paper from "./../../assets/images/icon-paper.svg";

const PaperButtonResult = () => {
  return (
    <button className="paper-result" value="paper">
      <div className="paper-result__background">
        <img src={paper} alt="paper" className="paper-result__image" />
      </div>
    </button>
  );
};

export default PaperButtonResult;
