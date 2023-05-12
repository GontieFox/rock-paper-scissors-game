import "./index.css";
import scissors from "./../../assets/images/icon-scissors.svg";

const ScissorsButton = ({ onClick, isHover, isClick, isClassic, isBonus, isResult }) => {
    const btnClass = isHover ? "btn-scissors_hover" : "";
    const btnClassic = isClassic ? "btn-scissors_classic" : "";
    const btnBonus = isBonus ? "btn-scissors_bonus" : "";
    const btnClick = isClick ? onClick : null;
    const btnResult = isResult ? "btn-scissors_result" : "";
    
    return (
        <button className={`btn-scissors ${btnClass} ${btnClassic} ${btnBonus} ${btnResult}`} onClick={btnClick} value="scissors">
            <div className="btn-scissors__background">
                <img src={scissors} alt="scissors" className="btn-scissors__image" />
            </div>
        </button>
    );
}

export default ScissorsButton;