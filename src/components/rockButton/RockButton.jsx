import "./index.css";
import rock from "./../../assets/images/icon-rock.svg";

const RockButton = ({ top, left }) => {
    return (
        <button className="btn-rock" style={{ top, left }} value="rock">
            <div className="btn-rock__background">
                <img src={rock} alt="rock" className="btn-rock__image" />
            </div>
        </button>
    );
}

export default RockButton;