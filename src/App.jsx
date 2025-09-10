import { useState } from "react";
import "./App.css";
import VietnamMap from "./assets/bando.png";
import ProvinceBox from "./components/ProvinceBox";
import Dice from "./components/Dice";

function App() {
  const [turn, setTurn] = useState(1); // state lưu trữ lượt chơi hiện tại, bắt đầu từ người chơi 1
  const [player1, setPlayer1] = useState("ca-mau"); // state lưu trữ vị trí hiện tại của người chơi 1, bắt đầu ở Cà Mau
  const [player2, setPlayer2] = useState("ca-mau"); // state lưu trữ vị trí hiện tại của người chơi 2, bắt đầu ở Cà Mau

  const onRollDice = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Công thức tính ngẫu nhiên số từ 1 tới 6
    console.log(diceResult);

    if (turn === 1) {
      // Nếu lượt chơi hiện tại là người chơi 1
      setTurn(2); // Chuyển lượt chơi sang người chơi 2
    } else {
      // Ngược lại, nếu lượt chơi hiện tại là người chơi 2
      setTurn(1); // Chuyển lượt chơi sang người chơi 1
    }
    return diceResult;
  };
  return (
    <div className="app-container">
      <div className="map-container">
        <img src={VietnamMap} className="map" />
      </div>
      <div className="game-container">
        <div>Người chơi: {turn}</div>
        <Dice onRollDice={onRollDice} />
        <ProvinceBox />
      </div>
    </div>
  );
}

export default App;
