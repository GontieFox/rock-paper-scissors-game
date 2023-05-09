import "./index.css";
import lizard from "./../../assets/images/icon-lizard.svg";

const LizardButtonResult = () => {
  return (
    <button className="lizard-result" value="lizard">
      <div className="lizard-result__background">
        <img src={lizard} alt="lizard" className="lizard-result__image" />
      </div>
    </button>
  );
};

export default LizardButtonResult;
