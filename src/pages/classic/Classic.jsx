import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../redux/reducers/popupSlice";
import "./index.css";
import logo from "./../../assets/images/logo.svg";
import triangle from "./../../assets/images/bg-triangle.svg";
import PopupClassic from "../../components/popupClassic/PopupClassic";
import PaperButton from "../../components/paperButton/PaperButton";
import RockButton from "../../components/rockButton/RockButton";
import ScissorsButton from "../../components/scissorsButton/ScissorsButton";

const Classic = () => {
    const popupOpened = useSelector((state) => state.popup.opened);
    const dispatch = useDispatch();

    const handlePopupOpened = () => {
        if (popupOpened) {
            dispatch(closePopup());
        } else {
            dispatch(openPopup());
        }
    }

    return (
        <>

            <PopupClassic isOpen={popupOpened} onClose={handlePopupOpened} />

            <div className="border">
                <img src={logo} alt="logo" className="rules-logo" />
                <div className="score">
                    <p className="score__subtitle">score</p>
                    <h1 className="score__count">12</h1>
                </div>
            </div>

            <section className="step-one step-one_active">
                <div className="game">
                    <PaperButton top="-30px" left="130px" />
                    <RockButton top="150px" left="90px" />
                    <ScissorsButton top="-30px" left="50px" />
                    <img src={triangle} alt="triangle" className="game__triangle" />
                </div>
            </section>

            <section className="step-two">
                
            </section>

            <section className="step-three">

            </section>

            <section className="step-four">

            </section>

            <button className="rules-btn" id="rules-btn" onClick={handlePopupOpened}>Rules</button>
        </>
    );
}

export default Classic;