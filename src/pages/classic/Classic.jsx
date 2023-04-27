import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openPopup, closePopup } from "../../redux/reducers/popupSlice";
import "./index.css";
import logo from "./../../assets/images/logo.svg";
import triangle from "./../../assets/images/bg-triangle.svg";
import PopupClassic from "../../components/popupClassic/PopupClassic";
import PaperButton from "../../components/paperButton/PaperButton";
import RockButton from "../../components/rockButton/RockButton";
import ScissorsButton from "../../components/scissorsButton/ScissorsButton";

const Classic = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);

    const popupOpened = useSelector((state) => state.popup.opened);
    const dispatch = useDispatch();

    const handleUserChoice = (choice) => {
        setUserChoice(choice);

        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(computerChoice);
    };

    const resetChoices = () => {
        setUserChoice(null);
        setComputerChoice(null);
    }

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
                {userChoice === null ? (
                    <>
                        <PaperButton onClick={() => handleUserChoice("paper")} top="-30px" left="130px" />
                        <RockButton onClick={() => handleUserChoice("rock")} top="150px" left="90px" />
                        <ScissorsButton onClick={() => handleUserChoice("scissors")} top="-30px" left="50px" />
                        <img src={triangle} alt="triangle" className="game__triangle" />
                    </>
                ) : (
                    <>
                        <div className="user-choice">
                            {userChoice === "rock" && <RockButton />}
                            {userChoice === "paper" && <PaperButton />}
                            {userChoice === "scissors" && <ScissorsButton />}
                        </div>
                        <div className="computer-choice">
                            {computerChoice === "rock" && <RockButton />}
                            {computerChoice === "paper" && <PaperButton />}
                            {computerChoice === "scissors" && <ScissorsButton />}
                        </div>
                        <button onClick={resetChoices}>Play again</button>
                    </>
                )}
            </div>

            <button className="rules-btn" id="rules-btn" onClick={handlePopupOpened}>Rules</button>
        </>
    );
}

export default Classic;