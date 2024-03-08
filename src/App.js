import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import LearningExperience from "./pages/LearningExperience";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning" element={<LearningExperience />} />
      </Routes>
    </div>
  );
}

export default App;
