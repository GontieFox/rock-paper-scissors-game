import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
    return (
        <div className="home">
            <h1 className="home__title">Rock, Paper, Scissors</h1>
            <div className="home__buttons">
                <Link to="/classic">
                    <button className="home__button home__button_classic">Classic</button>
                </Link>
                <Link to="/bonus">
                    <button className="home__button home__button_bonus">Bonus</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;