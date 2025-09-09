import AnGiangImg from "../../assets/provinces/angiang.png";
import "./style.css";
const ProvinceBox = () => {
  return (
    <div className="province-box">
      <div className="content">
        <h3>An Giang</h3>
        <div>
            <p>2. Đồng Tháp</p>
            <p>4. Cần Thơ</p>
            <p>6. Vĩnh Long</p>
        </div>
      </div>
      <div className="thumbnail">
        <img src={AnGiangImg} />
      </div>
    </div>
  );
};
export default ProvinceBox;
