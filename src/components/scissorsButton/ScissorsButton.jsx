import "./index.css";
import scissors from "./../../assets/images/icon-scissors.svg";

const ScissorsButton = ({ onClick, top, left, isHover }) => {
    const btnClass = isHover ? "btn-scissors btn-scissors_hover" : "btn-scissors";

    return (
        <button className={btnClass} onClick={onClick} style={{ top, left }} value="scissors">
            <div className="btn-scissors__background">
                <img src={scissors} alt="scissors" className="btn-scissors__image" />
            </div>
        </button>
    );
}

export default ScissorsButton;