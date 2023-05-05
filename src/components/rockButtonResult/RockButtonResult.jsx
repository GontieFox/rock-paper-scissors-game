import "./index.css";
import rock from "./../../assets/images/icon-rock.svg";

const RockButtonResult = () => {
  return (
    <button className="rock-result" value="rock">
      <div className="rock-result__background">
        <img src={rock} alt="rock" className="rock-result__image" />
      </div>
    </button>
  );
};

export default RockButtonResult;
