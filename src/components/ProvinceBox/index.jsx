import PROVINCES_DATA from "../../data/provinces";
import "./style.css";
const ProvinceBox = ({ turn, player, active }) => {
  const currentProvinceData = PROVINCES_DATA.find((item) => item.id === player);
  let provinceBoxClassName = "province-box";
  if (active === true) {
    provinceBoxClassName = provinceBoxClassName + " province-box__active";
  }
  return (
    <div className={provinceBoxClassName}>
      <div className="content">
        <h3>{currentProvinceData.name}</h3>
        <div>
          {currentProvinceData.dice.map((item) => {
            const province = PROVINCES_DATA.find((i) => i.id === item.id);
            return (
              <p>
                {item.number}. {province.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="thumbnail">
        <img src={currentProvinceData.thumbnail} />
      </div>
    </div>
  );
};
export default ProvinceBox;
