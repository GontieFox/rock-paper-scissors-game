import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../redux/reducers/popupSlice";
import "./index.css";
import logo from "./../../assets/images/logo.svg";
import triangle from "./../../assets/images/bg-triangle.svg";
import paper from "./../../assets/images/icon-paper.svg";
import scissors from "./../../assets/images/icon-scissors.svg";
import rock from "./../../assets/images/icon-rock.svg";
import PopupClassic from "../../components/popupClassic/PopupClassic";

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

            <div className="game">
                <button className="btn btn-paper">
                    <div className="btn__background">
                        <img src={paper} alt="paper" className="btn__image" />
                    </div>
                </button>
                <button className="btn btn-rock">
                    <div className="btn__background">
                        <img src={rock} alt="rock" className="btn__image" />
                    </div>
                </button>
                <button className="btn btn-scissors">
                    <div className="btn__background">
                        <img src={scissors} alt="scissors" className="btn__image" />
                    </div>
                </button>
                <img src={triangle} alt="triangle" className="game__triangle" />
            </div>
            <button className="rules-btn" id="rules-btn" onClick={handlePopupOpened}>Rules</button>
        </>
    );
}

export default Classic;