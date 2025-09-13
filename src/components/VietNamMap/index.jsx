import VietNamMapImg from "../../assets/bando.png";
import "./style.css";
import PROVINCES_DATA from "../../data/provinces";

const VietNamMap = ({ player1, player2 }) => {
  const player1Province = PROVINCES_DATA.find((item) => item.id === player1);
  const player2Province = PROVINCES_DATA.find((item) => item.id === player2);
  return (
    <div className="vietnam-map-container">
      <img src={VietNamMapImg} className="map" />
      <div
        className="player player__1"
        style={{
          top: player1Province.position.y,
          left: player1Province.position.x,
        }}
      >
        <div className="player__line"></div>
        <div className="player__avatar">1</div>
      </div>
      <div
        className="player player__2"
        style={{
          top: player2Province.position.y,
          left: player2Province.position.x,
        }}
      >
        <div className="player__line"></div>
        <div className="player__avatar">2</div>
      </div>
    </div>
  );
};
export default VietNamMap;
