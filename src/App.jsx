import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Classic from "./pages/classic/Classic";
import Bonus from "./pages/bonus/Bonus";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/classic" element={<Classic />} />
          <Route path="/bonus" element={<Bonus />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
