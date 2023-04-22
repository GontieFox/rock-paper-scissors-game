import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
    return (
        <>
            <h1 className="title">Rock, Paper, Scissors</h1>
            <div className="buttons">
                <Link to="/classic">
                    <button className="button button_classic">Classic</button>
                </Link>
                <Link to="/bonus">
                    <button className="button button_bonus">Bonus</button>
                </Link>
            </div>
        </>
    );
}

export default Home;