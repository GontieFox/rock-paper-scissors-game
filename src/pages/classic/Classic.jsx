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
import triangle from "./../../assets/images/bg-triangle.svg";
import PopupRules from "../../components/popupRules/PopupRules";
import PaperButton from "../../components/paperButton/PaperButton";
import PaperButtonResult from "../../components/paperButtonResult/PaperButtonResult";
import RockButton from "../../components/rockButton/RockButton";
import RockButtonResult from "../../components/rockButtonResult/RockButtonResult";
import ScissorsButton from "../../components/scissorsButton/ScissorsButton";
import ScissorsButtonResult from "../../components/scissorsButtonResult/ScissorsButtonResult";
import BorderLogo from "../../components/borderLogo/BorderLogo";

const Classic = () => {
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

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setTimeout(() => {
      setComputerChoice(computerChoice);
      setResultClass("result-block_active");

      function gameResult(choice, computerChoice) {
        switch (true) {
          case (choice === "rock" && computerChoice === "scissors") ||
            (choice === "paper" && computerChoice === "rock") ||
            (choice === "scissors" && computerChoice === "paper"):
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
      <PopupRules
        isOpen={popupOpened}
        onClose={handlePopupOpened}
        rulesMode={true}
      />

      <BorderLogo logo={true} count={count} scoreColor={scoreColor} />

      <div className="game">
        {userChoice === null ? (
          <div className="choice">
            <PaperButton
              onClick={() => handleUserChoice("paper")}
              isHover={true}
              position={true}
            />
            <RockButton
              onClick={() => handleUserChoice("rock")}
              isHover={true}
              position={true}
            />
            <ScissorsButton
              onClick={() => handleUserChoice("scissors")}
              isHover={true}
              position={true}
            />
            <img src={triangle} alt="triangle" className="game__triangle" />
          </div>
        ) : (
          <div className="result">
            <div className="user-choice">
              <p className="result__text">You picked</p>
              <div className="circle">
                {userChoice === "rock" && <RockButtonResult />}
                {userChoice === "paper" && <PaperButtonResult />}
                {userChoice === "scissors" && <ScissorsButtonResult />}
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
  );
};

export default Classic;
