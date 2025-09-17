import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
};
export default App;
