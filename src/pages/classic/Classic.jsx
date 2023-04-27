import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
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
    const [resultText, setResultText] = useState("");
    const [resultClass, setResultClass] = useState("");

    const popupOpened = useSelector((state) => state.popup.opened);
    const dispatch = useDispatch();

    useEffect(() => {
        const result = document.querySelector('#result');
    
        if (userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper") {
          setResultText("You win");
        } else if (userChoice === computerChoice) {
          setResultText("Draw");
        } else {
          setResultText("You lose");
        }
    
        if (result) {
          result.innerText = resultText;
        }
      }, [computerChoice, resultText, userChoice]);

    const handleUserChoice = (choice) => {
        setUserChoice(choice);

        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        setTimeout(() => {
            setComputerChoice(computerChoice);
            setResultClass("result-block_active");
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
                    <h1 className="score__count" id="score">0</h1>
                </div>
            </div>

            <div className="game">
                {userChoice === null ? (
                    <div className="choice">
                        <PaperButton onClick={() => handleUserChoice("paper")} top="-30px" left="130px" />
                        <RockButton onClick={() => handleUserChoice("rock")} top="150px" left="90px" />
                        <ScissorsButton onClick={() => handleUserChoice("scissors")} top="-30px" left="50px" />
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
                            <h2 className="result-block__title" id="result"></h2>
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