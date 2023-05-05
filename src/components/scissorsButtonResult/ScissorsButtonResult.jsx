import "./index.css";
import scissors from "./../../assets/images/icon-scissors.svg";

const ScissorsButtonResult = () => {
  return (
    <button className="scissors-result" value="scissors">
      <div className="scissors-result__background">
        <img src={scissors} alt="scissors" className="scissors-result__image" />
      </div>
    </button>
  );
};

export default ScissorsButtonResult;