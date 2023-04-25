import "./index.css";
import paper from "./../../assets/images/icon-paper.svg";

const PaperButton = () => {
    return (
        <button className="btn-paper btn-paper_position" value="paper">
            <div className="btn-paper__background">
                <img src={paper} alt="paper" className="btn-paper__image" />
            </div>
        </button>
    );
}

export default PaperButton;