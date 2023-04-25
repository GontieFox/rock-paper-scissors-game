import "./index.css";
import scissors from "./../../assets/images/icon-scissors.svg";

const ScissorsButton = () => {
    return (
        <button className="btn-scissors btn-scissors_position" value="scissors">
            <div className="btn-scissors__background">
                <img src={scissors} alt="scissors" className="btn-scissors__image" />
            </div>
        </button>
    );
}

export default ScissorsButton;