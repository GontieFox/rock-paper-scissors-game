import "./index.css";
import paper from "./../../assets/images/icon-paper.svg";

const PaperButton = ({ onClick, top, left, isHover }) => {
    const btnClass = isHover ? "btn-paper btn-paper_hover" : "btn-paper";

    return (
        <button className={btnClass} onClick={onClick} style={{ top, left }} value="paper">
            <div className="btn-paper__background">
                <img src={paper} alt="paper" className="btn-paper__image" />
            </div>
        </button>
    );
}

export default PaperButton;