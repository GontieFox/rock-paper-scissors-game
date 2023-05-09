import "./index.css";
import scissors from "./../../assets/images/icon-scissors.svg";

const ScissorsButton = ({ onClick, isHover, position }) => {
    const btnClass = isHover ? "btn-scissors btn-scissors_hover" : "btn-scissors";
    const btnPosition = position ? "btn-scissors__classic" : "btn-scissors__bonus";

    return (
        <button className={`${btnClass} ${btnPosition}`} onClick={onClick} value="scissors">
            <div className="btn-scissors__background">
                <img src={scissors} alt="scissors" className="btn-scissors__image" />
            </div>
        </button>
    );
}

export default ScissorsButton;