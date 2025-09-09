import "./App.css";
import VietnamMap from "./assets/bando.png";
import ProvinceBox from "./components/ProvinceBox";
import Dice from "./assets/dice.png";
function App() {
  return (
    <div className="app-container">
      <div className="map-container">
        <img src={VietnamMap} className="map" />
      </div>
      <div className="game-container">
        <div>
          <img src={Dice} width={100} height="auto" />
        </div>
        <ProvinceBox />
      </div>
    </div>
  );
}

export default App;
