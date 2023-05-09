import "./index.css";
import lizard from "./../../assets/images/icon-lizard.svg";

const LizardButton = ({ onClick, isHover, position }) => {
    const btnClass = isHover ? "btn-lizard btn-lizard_hover" : "btn-lizard";
    const btnPosition = position ? "btn-lizard__classic" : "btn-lizard__bonus";

    return (
        <button className={`${btnClass} ${btnPosition}`} onClick={onClick} value="lizard">
            <div className="btn-lizard__background">
                <img src={lizard} alt="lizard" className="btn-lizard__image" />
            </div>
        </button>
    );
}
 
export default LizardButton;