import DiceImg from "../../assets/dice.png";
const Dice = ({ onRollDice }) => {
  return (
    <div onClick={onRollDice}>
      <img src={DiceImg} width={100} height="auto" />
    </div>
  );
};

export default Dice;
