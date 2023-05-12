import "./index.css";
import rock from "./../../assets/images/icon-rock.svg";

const RockButton = ({ onClick, isHover, isClick, isClassic, isBonus, isResult }) => {
    const btnClass = isHover ? "btn-rock_hover" : "";
    const btnClassic = isClassic ? "btn-rock_classic" : "";
    const btnBonus = isBonus ? "btn-rock_bonus" : "";
    const btnClick = isClick ? onClick : null;
    const btnResult = isResult ? "btn-rock_result" : "";

    return (
        <button className={`btn-rock ${btnClass} ${btnClassic} ${btnBonus} ${btnResult}`} onClick={btnClick} value="rock">
            <div className="btn-rock__background">
                <img src={rock} alt="rock" className="btn-rock__image" />
            </div>
        </button>
    );
}

export default RockButton;