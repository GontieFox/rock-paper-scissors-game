import "./index.css";
import scissors from "./../../assets/images/icon-scissors.svg";

const ScissorsButton = ({ top, left }) => {
    return (
        <button className="btn-scissors" style={{ top, left }} value="scissors">
            <div className="btn-scissors__background">
                <img src={scissors} alt="scissors" className="btn-scissors__image" />
            </div>
        </button>
    );
}

export default ScissorsButton;