import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
    return (
        <div className="background">
            <h1 className="title">Rock, Paper, Scissors</h1>
            <div className="buttons">
                <Link to="/classic">
                    <button className="btn btn_classic">Classic</button>
                </Link>
                <Link to="/bonus">
                    <button className="btn btn_bonus">Bonus</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;