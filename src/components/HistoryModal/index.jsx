import Modal from "react-modal";
import "./style.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    maxHeight: "70vh",
    overflowY: "auto",
    borderRadius: "12px",
    padding: "20px",
  },
  overlay: {
    zIndex: 99999,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
};

const HistoryModal = ({ isOpen, onClose, history }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="History Modal"
      onRequestClose={onClose}
      style={customStyles}
    >
      <h2 className="modal-title">Lịch sử lượt chơi</h2>
      <ul className="turn-list">
        {history.lenght === 0 && <p>Chưa có lượt chơi nào!</p>}
        {history.lenght > 0 &&
          history.map((item, index) => (
            <li key={index} className="turn-item">
              {item}
            </li>
          ))}
      </ul>
      <button className="close-button" onClick={onClose}>
        Đóng
      </button>
    </Modal>
  );
};

export default HistoryModal;
