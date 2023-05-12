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
import pentagon from "./../../assets/images/bg-pentagon.svg";
import PopupRules from "../../components/popupRules/PopupRules";
import PaperButton from "../../components/paperButton/PaperButton";
import RockButton from "../../components/rockButton/RockButton";
import ScissorsButton from "../../components/scissorsButton/ScissorsButton";
import LizardButton from "../../components/lizardButton/LizardButton";
import SpockButton from "../../components/spockButton/SpockButton";
import BorderLogo from "../../components/borderLogo/BorderLogo";

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
      setResultClass("block-bonus_active");

      function gameResult(choice, computerChoice) {
        switch (true) {
          case (choice === "scissors" && computerChoice === "paper") ||
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

        <BorderLogo logo={false} count={count} scoreColor={scoreColor} />

        <div className="game-bonus">
          {userChoice === null ? (
            <div className="choice-bonus">
              <PaperButton
                onClick={() => handleUserChoice("paper")}
                isClick={true}
                isHover={true}
                isBonus={true}
              />
              <RockButton
                onClick={() => handleUserChoice("rock")}
                isClick={true}
                isHover={true}
                isBonus={true}
              />
              <ScissorsButton
                onClick={() => handleUserChoice("scissors")}
                isClick={true}
                isHover={true}
                isBonus={true}
              />
              <LizardButton
                onClick={() => handleUserChoice("lizard")}
                isClick={true}
                isHover={true}
              />
              <SpockButton
                onClick={() => handleUserChoice("spock")}
                isClick={true}
                isHover={true}
              />
              <img src={pentagon} alt="pentagon" className="game-bonus__pentagon" />
            </div>
          ) : (
            <div className="result-bonus">
              <div className="user-bonus">
                <p className="result-bonus__text">You picked</p>
                <div className="circle-bonus">
                  {userChoice === "rock" && <RockButton isResult={true}/>}
                  {userChoice === "paper" && <PaperButton isResult={true} />}
                  {userChoice === "scissors" && <ScissorsButton isResult={true}/>}
                  {userChoice === "lizard" && <LizardButton isResult={true} />}
                  {userChoice === "spock" && <SpockButton isResult={true} />}
                </div>
              </div>
              <div className={`block-bonus ${resultClass}`}>
                <h2 className="block-bonus__title">{resultText}</h2>
                <button className="block-bonus__button" onClick={resetChoices}>
                  Play again
                </button>
              </div>
              <div className="computer-bonus">
                <p className="result-bonus__text">The house picked</p>
                <div className="circle-bonus">
                  {computerChoice === "rock" && <RockButton isResult={true}/>}
                  {computerChoice === "paper" && <PaperButton isResult={true} />}
                  {computerChoice === "scissors" && <ScissorsButton isResult={true} />}
                  {computerChoice === "lizard" && <LizardButton isResult={true} />}
                  {computerChoice === "spock" && <SpockButton isResult={true} />}
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to="/">
          <button
            className="btn-bonus btn-bonus__return"
            id="return-btn"
            onClick={handleReturnHome}
          >
            Return back
          </button>
        </Link>
        <button
          className="btn-bonus btn-bonus__rules"
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
