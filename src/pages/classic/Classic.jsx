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
import RockButton from "../../components/rockButton/RockButton";
import ScissorsButton from "../../components/scissorsButton/ScissorsButton";
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
      setResultClass("block-classic_active");

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

      <div className="game-classic">
        {userChoice === null ? (
          <div className="choice-classic">
            <PaperButton
              onClick={() => handleUserChoice("paper")}
              isClick={true}
              isHover={true}
              isClassic={true}
            />
            <RockButton
              onClick={() => handleUserChoice("rock")}
              isClick={true}
              isHover={true}
              isClassic={true}
            />
            <ScissorsButton
              onClick={() => handleUserChoice("scissors")}
              isClick={true}
              isHover={true}
              isClassic={true}
            />
            <img src={triangle} alt="triangle" className="game-classic__triangle" />
          </div>
        ) : (
          <div className="result-classic">
            <div className="user-classic">
              <p className="result-classic__text">You picked</p>
              <div className="circle-classic">
                {userChoice === "rock" && <RockButton isResult={true} />}
                {userChoice === "paper" && <PaperButton isResult={true} />}
                {userChoice === "scissors" && <ScissorsButton isResult={true}/>}
              </div>
            </div>
            <div className={`block-classic ${resultClass}`}>
              <h2 className="block-classic__title">{resultText}</h2>
              <button className="block-classic__button" onClick={resetChoices}>
                Play again
              </button>
            </div>
            <div className="computer-classic">
              <p className="result-classic__text">The house picked</p>
              <div className="circle-classic">
                {computerChoice === "rock" && <RockButton isResult={true}/>}
                {computerChoice === "paper" && <PaperButton isResult={true} />}
                {computerChoice === "scissors" && <ScissorsButton isResult={true} />}
              </div>
            </div>
          </div>
        )}
      </div>

      <Link to="/">
        <button
          className="btn-classic btn-classic__return"
          id="return-btn"
          onClick={handleReturnHome}
        >
          Return back
        </button>
      </Link>
      <button
        className="btn-classic btn-classic__rules"
        id="rules-btn"
        onClick={handlePopupOpened}
      >
        Rules
      </button>
    </>
  );
};

export default Classic;
