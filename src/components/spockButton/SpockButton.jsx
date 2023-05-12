import "./index.css";
import spock from "./../../assets/images/icon-spock.svg";

const SpockButton = ({ onClick, isHover, isClick, isResult }) => {
  const btnClass = isHover ? " btn-spock_hover" : "";
  const btnClick = isClick ? onClick : null;
  const btnResult = isResult ? "btn-spock_result" : "";

  return (
    <button className={`btn-spock ${btnClass} ${btnResult}`} onClick={btnClick} value="spock">
      <div className="btn-spock__background">
        <img src={spock} alt="spock" className="btn-spock__image" />
      </div>
    </button>
  );
};

export default SpockButton;
