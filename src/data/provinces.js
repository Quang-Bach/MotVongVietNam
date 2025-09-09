import AnGiangImg from "../assets/provinces/angiang.png";
import DongThapImg from "../assets/provinces/dongthap.png";

const PROVINCES_DATA = [
  {
    id: "AG",
    name: "An Giang",
    thumbnail: AnGiangImg,
    dice: [
      { number: 2, id: "DT" },
      { number: 4, id: "CT" },
      { number: 6, id: "CM" },
    ],
  },
  {
    id: "DT",
    name: "Đồng Tháp",
    thumbnail: DongThapImg,
    dice: [
      { number: 2, id: "AG" },
      { number: 4, id: "CT" },
      { number: 5, id: "TN" },
      { number: 6, id: "VL" },
    ],
  },
  {
    id: "DT",
    name: "Đồng Tháp",
    thumbnail: DongThapImg,
    dice: [
      { number: 2, id: "AG" },
      { number: 4, id: "CT" },
      { number: 5, id: "TN" },
      { number: 6, id: "VL" },
    ],
  },
];
