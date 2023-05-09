import "./index.css";
import spock from "./../../assets/images/icon-spock.svg";

const SpockButtonResult = () => {
  return (
    <button className="spock-result" value="spock">
      <div className="spock-result__background">
        <img src={spock} alt="spock" className="spock-result__image" />
      </div>
    </button>
  );
};

export default SpockButtonResult;
