import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openPopup, closePopup } from "../../redux/reducers/popupSlice"
import { increment as countIncrement, decrement as countDecrement } from "../../redux/reducers/countSlice";
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
    const [resultText, setResultText] = useState("");
    const [resultClass, setResultClass] = useState("");

    const count = useSelector((state) => state.count.count);

    const popupOpened = useSelector((state) => state.popup.opened);
    const dispatch = useDispatch();

    const handleUserChoice = (choice) => {
        setUserChoice(choice);

        const choices = ["rock", "paper", "scissors"];

        function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        const computerChoice = choices[randomInteger(0, choices.length)];

        setTimeout(() => {
            setComputerChoice(computerChoice);
            setResultClass("result-block_active");

            function test(choice, computerChoice) {
                switch (true) {
                    case choice === "rock" && computerChoice === "scissors" ||
                        choice === "paper" && computerChoice === "rock" ||
                        choice === "scissors" && computerChoice === "paper":
                        dispatch(countIncrement());
                        return "You win";
                    case choice === computerChoice:
                        return "Draw";
                    default:
                        dispatch(countDecrement());
                        return "You lose";
                }
            }

            let resultText = test(choice, computerChoice);
            setResultText(resultText);

        }, 3000)
    };

    const resetChoices = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResultClass("");
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
                    <h1 className="score__count" id="score">{count}</h1>
                </div>
            </div>

            <div className="game">
                {userChoice === null ? (
                    <div className="choice">
                        <PaperButton onClick={() => handleUserChoice("paper")} top="-30px" left="130px" isHover={true} />
                        <RockButton onClick={() => handleUserChoice("rock")} top="150px" left="90px" isHover={true} />
                        <ScissorsButton onClick={() => handleUserChoice("scissors")} top="-30px" left="50px" isHover={true} />
                        <img src={triangle} alt="triangle" className="game__triangle" />
                    </div>
                ) : (
                    <div className="result">
                        <div className="user-choice">
                            <p className="result__text">You picked</p>
                            {userChoice === "rock" && <RockButton />}
                            {userChoice === "paper" && <PaperButton />}
                            {userChoice === "scissors" && <ScissorsButton />}
                        </div>
                        <div className={`result-block ${resultClass}`}>
                            <h2 className="result-block__title">{resultText}</h2>
                            <button className="result-block__button" onClick={resetChoices}>Play again</button>
                        </div>
                        <div className="computer-choice">
                            <p className="result__text">The house picked</p>
                            <div className="circle">
                                {computerChoice === "rock" && <RockButton />}
                                {computerChoice === "paper" && <PaperButton />}
                                {computerChoice === "scissors" && <ScissorsButton />}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <button className="rules-btn" id="rules-btn" onClick={handlePopupOpened}>Rules</button>
        </>
    );
}

export default Classic;