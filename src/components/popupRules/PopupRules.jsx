import "./index.css";
import rulesClassic from "./../../assets/images/image-rules.svg";
import rulesBonus from "./../../assets/images/image-rules-bonus.svg";

const PopupRules = ({ isOpen, onClose, rulesMode }) => {
    return (
        <div className={`popup-rules ${isOpen ? "popup-rules_opened" : ""}`} id="rules">
            <div className="popup-rules__container">
                <div className="popup-rules__section">
                    <h2 className="popup-rules__title">Rules</h2>
                    <button className="popup-rules__close-btn" id="close-btn" onClick={onClose} />
                </div>
                <img src={rulesMode ? rulesClassic : rulesBonus} alt="rules" className="popup-rules__image" />
            </div>
        </div>
    );
}

export default PopupRules