import VietNamMapImg from "../../assets/bando.png";
import "./style.css";
const VietNamMap = () => {
  return (
    <div className="vietnam-map-container">
      <img src={VietNamMapImg} className="map" />
      <div className="player" style={{ top: 785, left: 185 }}>
        <div className="player__line"></div>
        <div className="player__avatar">1</div>
      </div>
      <div className="player" style={{ top: "50%", left: 0 }}>
        <div className="player__line"></div>
        <div className="player__avatar">2</div>
      </div>
    </div>
  );
};
export default VietNamMap;
