import "./index.css";
import paper from "./../../assets/images/icon-paper.svg";

const PaperButton = ({ onClick, isHover, position }) => {
    const btnClass = isHover ? "btn-paper btn-paper_hover" : "btn-paper";
    const btnPosition = position ? "btn-paper__classic" : "btn-paper__bonus";

    return (
        <button className={`${btnClass} ${btnPosition}`} onClick={onClick} value="paper">
            <div className="btn-paper__background">
                <img src={paper} alt="paper" className="btn-paper__image" />
            </div>
        </button>
    );
}

export default PaperButton;