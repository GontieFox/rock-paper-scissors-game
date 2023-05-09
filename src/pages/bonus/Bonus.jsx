import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openPopup, closePopup } from "../../redux/reducers/popupSlice";
import {
  increment as countIncrement,
  decrement as countDecrement,
  resetCount,
} from "../../redux/reducers/countSlice";
import { Link } from "react-router-dom";
import "./index.css";
import logoBonus from "./../../assets/images/logo-bonus.svg";
import pentagon from "./../../assets/images/bg-pentagon.svg";
import PopupRules from "../../components/popupRules/PopupRules";
import PaperButton from "../../components/paperButton/PaperButton";
import PaperButtonResult from "../../components/paperButtonResult/PaperButtonResult";
import RockButton from "../../components/rockButton/RockButton";
import RockButtonResult from "../../components/rockButtonResult/RockButtonResult";
import ScissorsButton from "../../components/scissorsButton/ScissorsButton";
import ScissorsButtonResult from "../../components/scissorsButtonResult/ScissorsButtonResult";
import LizardButton from "../../components/lizardButton/LizardButton";
import LizardButtonResult from "../../components/lizardButtonResult/LizardButtonResult";
import SpockButton from "../../components/spockButton/SpockButton";
import SpockButtonResult from "../../components/spockButtonResult/SpockButtonResult";

const Bonus = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [resultText, setResultText] = useState("");
  const [resultClass, setResultClass] = useState("");
  const [scoreColor, setScoreColor] = useState("");

  const count = useSelector((state) => state.count.count);

  const popupOpened = useSelector((state) => state.popup.opened);
  const dispatch = useDispatch();

  const handleUserChoice = (choice) => {
    setUserChoice(choice);

    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setTimeout(() => {
      setComputerChoice(computerChoice);
      setResultClass("result-block_active");

      function gameResult(choice, computerChoice) {
        switch (true) {
          case (choice === "sccissors" && computerChoice === "paper") ||
            (choice === "paper" && computerChoice === "rock") ||
            (choice === "rock" && computerChoice === "lizard") || 
            (choice === "lizard" && computerChoice === "spock") ||
            (choice === "spock" && computerChoice === "scissors") ||
            (choice === "scissors" && computerChoice === "lizard") || 
            (choice === "paper" && computerChoice === "spock") || 
            (choice === "rock" && computerChoice === "scissors") || 
            (choice === "lizard" && computerChoice === "paper") ||
            (choice === "spock" && computerChoice === "rock"):
            dispatch(countIncrement());
            setScoreColor("count_win");
            return "You win";
          case choice === computerChoice:
            return "Draw";
          default:
            dispatch(countDecrement());
            setScoreColor("count_lose");
            return "You lose";
        }
      }

      let resultText = gameResult(choice, computerChoice);
      setResultText(resultText);
    }, 3000);
  };

  const resetChoices = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResultClass("");
    setScoreColor("");
  };

  const handlePopupOpened = () => {
    if (popupOpened) {
      dispatch(closePopup());
    } else {
      dispatch(openPopup());
    }
  };

  const handleReturnHome = () => {
    dispatch(resetCount());
  };

  return (
    <>
      <>
        <PopupRules
          isOpen={popupOpened}
          onClose={handlePopupOpened}
          rulesMode={false}
        />

        <div className="border">
          <img src={logoBonus} alt="logo" className="rules-logo" />
          <div className="score">
            <p className="score__subtitle">score</p>
            <h1 className={`score__count ${scoreColor}`} id="score">
              {count}
            </h1>
          </div>
        </div>

        <div className="game">
          {userChoice === null ? (
            <div className="choice">
              <PaperButton
                onClick={() => handleUserChoice("paper")}
                isHover={true}
                position={false}
              />
              <RockButton
                onClick={() => handleUserChoice("rock")}
                isHover={true}
                position={false}
              />
              <ScissorsButton
                onClick={() => handleUserChoice("scissors")}
                isHover={true}
                position={false}
              />
              <LizardButton
                onClick={() => handleUserChoice("lizard")}
                isHover={true}
                position={false}
              />
              <SpockButton
                onClick={() => handleUserChoice("spock")}
                isHover={true}
                position={false}
              />
              <img src={pentagon} alt="pentagon" className="game__pentagon" />
            </div>
          ) : (
            <div className="result">
              <div className="user-choice">
                <p className="result__text">You picked</p>
                <div className="circle">
                  {userChoice === "rock" && <RockButtonResult />}
                  {userChoice === "paper" && <PaperButtonResult />}
                  {userChoice === "scissors" && <ScissorsButtonResult />}
                  {userChoice === "lizard" && <LizardButtonResult />}
                  {userChoice === "spock" && <SpockButtonResult />}
                </div>
              </div>
              <div className={`result-block ${resultClass}`}>
                <h2 className="result-block__title">{resultText}</h2>
                <button className="result-block__button" onClick={resetChoices}>
                  Play again
                </button>
              </div>
              <div className="computer-choice">
                <p className="result__text">The house picked</p>
                <div className="circle">
                  {computerChoice === "rock" && <RockButtonResult />}
                  {computerChoice === "paper" && <PaperButtonResult />}
                  {computerChoice === "scissors" && <ScissorsButtonResult />}
                  {computerChoice === "lizard" && <LizardButtonResult />}
                  {computerChoice === "spock" && <SpockButtonResult />}
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to="/">
          <button
            className="btn btn__return"
            id="return-btn"
            onClick={handleReturnHome}
          >
            Return back
          </button>
        </Link>
        <button
          className="btn btn__rules"
          id="rules-btn"
          onClick={handlePopupOpened}
        >
          Rules
        </button>
      </>
    </>
  );
};

export default Bonus;
