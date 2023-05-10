import "./index.css";
import logoClassic from "./../../assets/images/logo.svg";
import logoBonus from "./../../assets/images/logo-bonus.svg";

const BorderLogo = ({ logo, count, scoreColor }) => {
    const logoImage = logo ? logoClassic : logoBonus;

    return ( 
        <div className="border">
          <img src={logoImage} alt="logo" className="rules-logo" />
          <div className="score">
            <p className="score__subtitle">score</p>
            <h1 className={`score__count ${scoreColor}`} id="score">
              {count}
            </h1>
          </div>
        </div>
     );
}
 
export default BorderLogo;