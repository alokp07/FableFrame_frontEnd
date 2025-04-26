import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ScenePlayer from "./pages/ScenePlayer";

function App() {
  return (
    <Router>
      <nav></nav>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/scenes" element={<ScenePlayer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
