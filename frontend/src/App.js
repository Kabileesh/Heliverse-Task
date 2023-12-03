import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Users/pages/Home";
import TeamHome from "./Team/pages/TeamHome";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/team" Component={TeamHome} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
