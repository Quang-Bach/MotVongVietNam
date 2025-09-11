import DiceImg from "../../assets/dice.png";
const Dice = ({ dice, onRollDice }) => {
  return (
    <div onClick={onRollDice}>
      <img src={DiceImg} width={100} height="auto" />
      {dice}
    </div>
  );
};

export default Dice;
