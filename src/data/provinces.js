import AnGiangImg from "../assets/provinces/angiang.png";
import DongThapImg from "../assets/provinces/dongthap.png";

const PROVINCES_DATA = [
  {
    id: "an-giang",
    name: "An Giang",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "dong-thap" },
      { number: 2, id: "can-tho" },
      { number: 3, id: "ca-mau" },
    ],
  },
  {
    id: "ca-mau",
    name: "Cà Mau",
    thumbnail: AnGiangImgImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "can-tho" },
    ],
  },
  {
    id: "can-tho",
    name: "Cần Thơ",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "dong-thap" },
      { number: 3, id: "vinh-long" },
      { number: 4, id: "ca-mau" },
    ],
  },
  {
    id: "vinh-long",
    name: "Vĩnh Long",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "can-tho" },
      { number: 2, id: "dong-thap" },
    ],
  },
  {
    id: "dong-thap",
    name: "Đồng Tháp",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "can-tho" },
      { number: 3, id: "vinh-long" },
      { number: 4, id: "tay-ninh" },
    ],
  },
  {
    id: "tay-ninh",
    name: "Tây Ninh",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "dong-thap" },
      { number: 2, id: "dong-nai" },
      { number: 3, id: "tp-HCM" },
    ],
  },
  {
    id: "dong-nai",
    name: "Đồng Nai",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "tay-ninh" },
      { number: 2, id: "tp-HCM" },
      { number: 3, id: "lam-dong" },
    ],
  },
  {
    id: "tp-HCM",
    name: "TP. Hồ Chí Minh",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 3, id: "tay-ninh" },
      { number: 4, id: "dong-nai" },
    ],
  },

  // ==== Tây Nguyên & Duyên hải Nam Trung Bộ ====
  {
    id: "lam-dong",
    name: "Lâm Đồng",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "dong-nai" },
      { number: 2, id: "dak-lak" },
      { number: 3, id: "khanh-hoa" },
      { number: 4, id: "tp-HCM" },
    ],
  },
  {
    id: "dak-lak",
    name: "Đắk Lắk",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 3, id: "gia-lai" },
      { number: 6, id: "khanh-hoa" },
    ],
  },
  {
    id: "gia-lai",
    name: "Gia Lai",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "dak-lak" },
      { number: 2, id: "gia-lai" },
    ],
  },
  {
    id: "quang-ngai",
    name: "Quảng Ngãi",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "gia-lai" },
      { number: 2, id: "da-nang" },
    ],
  },
  {
    id: "khanh-hoa",
    name: "Khánh Hòa",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 2, id: "dak-lak" },
    ],
  },
  {
    id: "da-nang",
    name: "Đà Nẵng",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "quang-ngai" },
      { number: 2, id: "tp-hue" },
    ],
  },
  {
    id: "tp-hue",
    name: "TP. Huế",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "da-nang" },
      { number: 2, id: "quang-tri" },
    ],
  },
  {
    id: "quang-tri",
    name: "Quảng Trị",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "tp-hue" },
      { number: 2, id: "quang-tri" },
    ],
  },
  {
    id: "ha-tinh",
    name: "Hà Tĩnh",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "quang-tri" },
      { number: 2, id: "nghe-an" },
    ],
  },

  // ==== Bắc Trung Bộ ====
  {
    id: "nghe-an",
    name: "Nghệ An",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "ha-tinh" },
      { number: 2, id: "thanh-hoa" },
    ],
  },
  {
    id: "thanh-hoa",
    name: "Thanh Hóa",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "nghe-an" },
      { number: 2, id: "ninh-binh" },
      { number: 3, id: "phu-tho" },
      { number: 4, id: "son-la" },
    ],
  },
  {
    id: "ninh-binh",
    name: "Ninh Bình",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "thanh-hoa" },
      { number: 2, id: "ha-noi" },
      { number: 3, id: "phu-tho" },
      { number: 4, id: "hung-yen" },
    ],
  },

  // ==== Đồng bằng sông Hồng & Trung du miền núi phía Bắc ====
  {
    id: "ha-noi",
    name: "Hà Nội",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "ninh-binh" },
      { number: 2, id: "hung-yen" },
      { number: 3, id: "bac-ninh" },
      { number: 4, id: "thai-nguyen" },
      { number: 5, id: "phu-tho" },
    ],
  },
  {
    id: "hai-phong",
    name: "Hải Phòng",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "hung-yen" },
      { number: 2, id: "bac-ninh" },
      { number: 3, id: "quang-ninh" },
    ],
  },
  {
    id: "quang-ninh",
    name: "Quảng Ninh",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "hai-phong" },
      { number: 2, id: "lang-son" },
      { number: 3, id: "bac-ninh" },
    ],
  },
  {
    id: "bac-ninh",
    name: "Bắc Ninh",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "ha-noi" },
      { number: 2, id: "lang-son" },
      { number: 3, id: "quang-ninh" },
      { number: 4, id: "hung-yen" },
      { number: 5, id: "hai-phong" },
      { number: 6, id: "thai-nguyen" },
    ],
  },
  {
    id: "hung-yen",
    name: "Hưng Yên",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "hai-phong" },
      { number: 2, id: "ha-noi" },
      { number: 3, id: "ninh-binh" },
      { number: 4, id: "bac-ninh" },
    ],
  },
  {
    id: "phu-tho",
    name: "Phú Thọ",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "thai-nguyen" },
      { number: 2, id: "lao-cai" },
      { number: 3, id: "tuyen-quang" },
      { number: 4, id: "thanh-hoa" },
      { number: 5, id: "son-la" },
      { number: 6, id: "ninh-binh" },
    ],
  },
  {
    id: "lao-cai",
    name: "Lào Cai",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "phu-tho" },
      { number: 2, id: "tuyen-quang" },
      { number: 3, id: "son-la" },
      { number: 4, id: "lai-chau" },
    ],
  },
  {
    id: "tuyen-quang",
    name: "Tuyên Quang",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "phu-tho" },
      { number: 2, id: "cao-bang" },
      { number: 3, id: "thai-nguyen" },
      { number: 4, id: "lao-cai" },
    ],
  },
  {
    id: "cao-bang",
    name: "Cao Bằng",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "tuyen-quang" },
      { number: 2, id: "lang-son" },
      { number: 3, id: "thai-nguyen" },
    ],
  },
  {
    id: "lang-son",
    name: "Lạng Sơn",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "cao-bang" },
      { number: 2, id: "bac-ninh" },
      { number: 3, id: "thai-nguyen" },
      { number: 4, id: "quang-ninh" },
    ],
  },
  {
    id: "thai-nguyen",
    name: "Thái Nguyên",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "phu-tho" },
      { number: 2, id: "bac-ninh" },
      { number: 3, id: "lang-son" },
      { number: 4, id: "cao-bang" },
      { number: 5, id: "ha-noi" },
      { number: 6, id: "tuyen-quang" },
    ],
  },
  {
    id: "lai-chau",
    name: "Lai Châu",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "son-la" },
      { number: 2, id: "dien-bien" },
      { number: 3, id: "lao-cai" },
    ],
  },
  {
    id: "son-la",
    name: "Sơn La",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "thanh-hoa" },
      { number: 2, id: "phu-tho" },
      { number: 3, id: "lai-chau" },
      { number: 4, id: "dien-bien" },
      { number: 5, id: "lao-cai" },
    ],
  },
  {
    id: "dien-bien",
    name: "Điện Biên",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "son-la" },
      { number: 2, id: "lai-chau" },
    ],
  },
];
