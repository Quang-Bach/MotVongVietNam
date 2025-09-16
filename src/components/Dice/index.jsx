import DiceLib from "react-dice-roll";

const Dice = ({ dice, onRollDice }) => {
  return <DiceLib rollingTime={2000} size={100} onRoll={onRollDice} />;
};

export default Dice;
