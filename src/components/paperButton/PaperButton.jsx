import "./index.css";
import paper from "./../../assets/images/icon-paper.svg";

const PaperButton = ({ top, left }) => {
    return (
        <button className="btn-paper" style={{ top, left }} value="paper">
            <div className="btn-paper__background">
                <img src={paper} alt="paper" className="btn-paper__image" />
            </div>
        </button>
    );
}

export default PaperButton;