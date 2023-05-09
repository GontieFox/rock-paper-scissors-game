import "./index.css";
import rock from "./../../assets/images/icon-rock.svg";

const RockButton = ({ onClick, isHover, position }) => {
    const btnClass = isHover ? "btn-rock btn-rock_hover" : "btn-rock";
    const btnPosition = position ? "btn-rock__classic" : "btn-rock__bonus";

    return (
        <button className={`${btnClass} ${btnPosition}`} onClick={onClick} value="rock">
            <div className="btn-rock__background">
                <img src={rock} alt="rock" className="btn-rock__image" />
            </div>
        </button>
    );
}

export default RockButton;