import "./index.css";
import spock from "./../../assets/images/icon-spock.svg";

const SpockButton = ({ onClick, isHover, position }) => {
  const btnClass = isHover ? "btn-spock btn-spock_hover" : "btn-spock";
  const btnPosition = position ? "btn-spock__classic" : "btn-spock__bonus";

  return (
    <button className={`${btnClass} ${btnPosition}`} onClick={onClick} value="spock">
      <div className="btn-spock__background">
        <img src={spock} alt="spock" className="btn-spock__image" />
      </div>
    </button>
  );
};

export default SpockButton;
