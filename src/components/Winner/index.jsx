import { Link } from "react-router-dom";
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
          <Link to="/">
            <button className="winner-new-game-button" onClick={onNewGame}>
              Game mới
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Winner;
