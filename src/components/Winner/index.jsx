import Confetti from "react-confetti";
import "./style.css";

const Winner = ({ winner, onNewGame }) => {
  return (
    <>
      <div className="winner-container">
        <div className="winner-confetti">
          <Confetti />
        </div>
        <div className="winner-content">
          <p className="winner-text">
            Chúc mừng người chơi {winner} đã chiến thắng!
          </p>
          <button className="winner-new-game-button" onClick={onNewGame}>Game mới</button>
        </div>
      </div>
    </>
  );
};
export default Winner;
