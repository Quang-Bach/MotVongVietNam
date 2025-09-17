import { Link } from "react-router-dom";
import WelcomeVideo from "../../assets/vietnam.mp4";
import "./style.css";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <video className="welcome-video" width="100%" autoPlay muted playsInline>
        <source src={WelcomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="welcome-content">
        <h1 className="game-title">MỘT VÒNG VIỆT NAM</h1>
        <Link to="/game">
          <button className="start-game-button">Bắt đầu game</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
