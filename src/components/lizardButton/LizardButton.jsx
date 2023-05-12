import "./index.css";
import lizard from "./../../assets/images/icon-lizard.svg";

const LizardButton = ({ onClick, isHover, isClick, isResult }) => {
    const btnClass = isHover ? "btn-lizard_hover" : "";
    const btnClick = isClick ? onClick : null;
    const btnResult = isResult ? "btn-lizard_result" : "";

    return (
        <button className={`btn-lizard ${btnClass} ${btnResult}`} onClick={btnClick} value="lizard">
            <div className="btn-lizard__background">
                <img src={lizard} alt="lizard" className="btn-lizard__image" />
            </div>
        </button>
    );
}
 
export default LizardButton;