import { useState } from "react";
import "./App.css";
import VietNamMap from "./components/VietNamMap";
import ProvinceBox from "./components/ProvinceBox";
import Dice from "./components/Dice";
import PROVINCES_DATA from "./data/provinces";

function App() {
  const [turn, setTurn] = useState(1); // state lưu trữ lượt chơi hiện tại, bắt đầu từ người chơi 1
  const [player1, setPlayer1] = useState("ca-mau"); // state lưu trữ vị trí hiện tại của người chơi 1, bắt đầu ở Cà Mau
  const [player2, setPlayer2] = useState("ca-mau"); // state lưu trữ vị trí hiện tại của người chơi 2, bắt đầu ở Cà Mau
  const [dice, setDice] = useState(1); //State lưu trữ kết quả của lần lắc xí ngầu gần nhâyts
  // state lưu trữ kết quả của lần gieo xúc xắc gần nhất, bắt đầu từ 1
  const onRollDice = (diceResult) => {
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
    //B4: Cập nhật kết quả của lần lắc xí ngầu gần nhất
    setDice(diceResult);
  };
  return (
    <div className="app-container">
      <div className="map-container">
        <VietNamMap player1={player1} player2={player2} />
      </div>
      <div className="game-container">
        <ProvinceBox turn={turn} player={player1} active={turn === 1} />
        <Dice dice={dice} onRollDice={onRollDice} />
        <ProvinceBox turn={turn} player={player2} active={turn === 2} />
      </div>
    </div>
  );
}

export default App;
