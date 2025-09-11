import { useState } from "react";
import "./App.css";
import VietnamMap from "./assets/bando.png";
import ProvinceBox from "./components/ProvinceBox";
import Dice from "./components/Dice";
import PROVINCES_DATA from "./data/provinces";

function App() {
  const [turn, setTurn] = useState(1); // state lưu trữ lượt chơi hiện tại, bắt đầu từ người chơi 1
  const [player1, setPlayer1] = useState("ca-mau"); // state lưu trữ vị trí hiện tại của người chơi 1, bắt đầu ở Cà Mau
  const [player2, setPlayer2] = useState("ca-mau"); // state lưu trữ vị trí hiện tại của người chơi 2, bắt đầu ở Cà Mau

  const onRollDice = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Công thức tính ngẫu nhiên số từ 1 tới 6
    console.log(diceResult);
    //B1: tìm ra tỉnh hiện tại người chơi đang đứng
    let currentProvince;
    if (turn === 1) {
      currentProvince = player1;
    } else {
      currentProvince = player2;
    }
    // Dùng hàm find để tìm ra tỉnh hiện tại trong mảng PROVINCES_DATA
    const currentProvinceData = PROVINCES_DATA.find(
      (item) => item.id === currentProvince
    );
    console.log("Tỉnh hiện tại: ", currentProvinceData);
    // B2: Tìm xem kết quả của dice có khớp với tỉnh nào trong mảng các tỉnh mà tỉnh hiện tại có thể đi đến không
    const nextProvince = currentProvinceData.dice.find(
      (item) => item.number === diceResult
    );
    console.log("Tỉnh tiếp theo: ", nextProvince);
    // B3: Cập nhật vị trí người chơi hiện tại

    if (turn === 1) {
      // Nếu lượt chơi hiện tại là người chơi 1
      if (nextProvince !== undefined) {
        setPlayer1(nextProvince.id);
      } // Cập nhật vị trí người chơi 1
      setTurn(2); // Chuyển lượt chơi sang người chơi 2
    } else {
      if (nextProvince !== undefined) {
        setPlayer2(nextProvince.id);
      } // Cập nhật vị trí người chơi 2
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
