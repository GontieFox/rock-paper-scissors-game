import "./index.css";
import paper from "./../../assets/images/icon-paper.svg";

const PaperButton = ({ onClick, isHover, isClick, isClassic, isBonus, isResult }) => {
    const btnClass = isHover ? "btn-paper_hover" : "";
    const btnClassic = isClassic ? "btn-paper_classic" : "";
    const btnBonus = isBonus ? "btn-paper_bonus" : "";
    const btnClick = isClick ? onClick : null;
    const btnResult = isResult ? "btn-paper_result" : "";

    return (
        <button className={`btn-paper ${btnClass} ${btnClassic} ${btnBonus} ${btnResult}`} onClick={btnClick} value="paper">
            <div className="btn-paper__background">
                <img src={paper} alt="paper" className="btn-paper__image" />
            </div>
        </button>
    );
}

export default PaperButton;