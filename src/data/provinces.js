import AnGiangImg from "../assets/provinces/angiang.png";
import DongThapImg from "../assets/provinces/dongthap.png";
import CanThoImg from "../assets/provinces/cantho.png";
import CaMauImg from "../assets/provinces/camau.png";
import VinhLongImg from "../assets/provinces/vinhlong.png";
import TayNinhImg from "../assets/provinces/tayninh.png";
import DongNaiImg from "../assets/provinces/dongnai.png";
import tpHCMImg from "../assets/provinces/tphcm.png";
import LamDongImg from "../assets/provinces/lamdong.png";
import DakLakImg from "../assets/provinces/daklak.png";
import GiaLaiImg from "../assets/provinces/gialai.png";
import QuangNgaiImg from "../assets/provinces/quangngai.png";
import KhanhHoaImg from "../assets/provinces/khanhhoa.png";
import DaNangImg from "../assets/provinces/danang.png";
import HueImg from "../assets/provinces/hue.png";
import QuangTriImg from "../assets/provinces/quangtri.png";
import HaTinhImg from "../assets/provinces/hatinh.png";
import NgheAnImg from "../assets/provinces/nghean.png";
import ThanhHoaImg from "../assets/provinces/thanhhoa.png";
import NinhBinhImg from "../assets/provinces/ninhbinh.png";
import HaNoiImg from "../assets/provinces/hanoi.png";
import HaiPhongImg from "../assets/provinces/haiphong.png";
import QuangNinhImg from "../assets/provinces/quangninh.png";
import BacNinhImg from "../assets/provinces/bacninh.png";
import HungYenImg from "../assets/provinces/hungyen.png";
import PhuThoImg from "../assets/provinces/phutho.png";
import LaoCaiImg from "../assets/provinces/laocai.png";
import TuyenQuangImg from "../assets/provinces/tuyenquang.png";
import CaoBangImg from "../assets/provinces/caobang.png";
import LangSonImg from "../assets/provinces/langson.png";
import ThaiNguyenImg from "../assets/provinces/thainguyen.png";
import LaiChauImg from "../assets/provinces/laichau.png";
import SonLaImg from "../assets/provinces/sonla.png";
import DienBienImg from "../assets/provinces/dienbien.png";
import HoangSaImg from "../assets/provinces/hoangsa.png";
import TruongSaImg from "../assets/provinces/truongsa.png";

const PROVINCES_DATA = [
  {
    id: "an-giang",
    name: "An Giang",
    thumbnail: AnGiangImg,
    dice: [
      { number: 1, id: "dong-thap" },
      { number: 2, id: "can-tho" },
      { number: 3, id: "ca-mau" },
      { number: 4, id: "tay-ninh" },
    ],
    position: {
      x: 180,
      y: 750,
    },
  },
  {
    id: "ca-mau",
    name: "Cà Mau",
    thumbnail: CaMauImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "can-tho" },
      { number: 3, id: "dong-thap" },
      { number: 4, id: "truong-sa" },
    ],
    position: {
      x: 192,
      y: 795,
    },
  },
  {
    id: "can-tho",
    name: "Cần Thơ",
    thumbnail: CanThoImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "dong-thap" },
      { number: 3, id: "vinh-long" },
      { number: 4, id: "ca-mau" },
      { number: 5, id: "truong-sa" },
    ],
    position: {
      x: 215,
      y: 774,
    },
  },
  {
    id: "vinh-long",
    name: "Vĩnh Long",
    thumbnail: VinhLongImg,
    dice: [
      { number: 1, id: "can-tho" },
      { number: 2, id: "dong-thap" },
      { number: 3, id: "tay-ninh" },
      { number: 4, id: "tp-HCM" },
    ],
    position: {
      x: 240,
      y: 759,
    },
  },
  {
    id: "dong-thap",
    name: "Đồng Tháp",
    thumbnail: DongThapImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "can-tho" },
      { number: 3, id: "vinh-long" },
      { number: 4, id: "tay-ninh" },
      { number: 5, id: "tp-HCM" },
    ],
    position: {
      x: 255,
      y: 735,
    },
  },
  {
    id: "tay-ninh",
    name: "Tây Ninh",
    thumbnail: TayNinhImg,
    dice: [
      { number: 1, id: "dong-thap" },
      { number: 2, id: "dong-nai" },
      { number: 3, id: "tp-HCM" },
      { number: 4, id: "lam-dong" },
    ],
    position: {
      x: 237,
      y: 694,
    },
  },
  {
    id: "dong-nai",
    name: "Đồng Nai",
    thumbnail: DongNaiImg,
    dice: [
      { number: 1, id: "tay-ninh" },
      { number: 2, id: "tp-HCM" },
      { number: 3, id: "lam-dong" },
      { number: 4, id: "dak-lak" },
    ],
    position: {
      x: 285,
      y: 684,
    },
  },
  {
    id: "tp-HCM",
    name: "TP. Hồ Chí Minh",
    thumbnail: tpHCMImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 2, id: "tay-ninh" },
      { number: 3, id: "dong-nai" },
      { number: 4, id: "da-nang" },
    ],
    position: {
      x: 268,
      y: 720,
    },
  },

  // ==== Tây Nguyên & Duyên hải Nam Trung Bộ ====
  {
    id: "lam-dong",
    name: "Lâm Đồng",
    thumbnail: LamDongImg,
    dice: [
      { number: 1, id: "dong-nai" },
      { number: 2, id: "dak-lak" },
      { number: 3, id: "khanh-hoa" },
      { number: 4, id: "tp-HCM" },
    ],
    position: {
      x: 333,
      y: 670,
    },
  },
  {
    id: "dak-lak",
    name: "Đắk Lắk",
    thumbnail: DakLakImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 2, id: "gia-lai" },
      { number: 3, id: "khanh-hoa" },
      { number: 4, id: "quang-ngai" },
    ],
    position: {
      x: 354,
      y: 614,
    },
  },
  {
    id: "gia-lai",
    name: "Gia Lai",
    thumbnail: GiaLaiImg,
    dice: [
      { number: 1, id: "dak-lak" },
      { number: 2, id: "quang-ngai" },
      { number: 3, id: "da-nang" },
      { number: 4, id: "tp-hue" },
    ],
    position: {
      x: 358,
      y: 552,
    },
  },
  {
    id: "quang-ngai",
    name: "Quảng Ngãi",
    thumbnail: QuangNgaiImg,
    dice: [
      { number: 1, id: "gia-lai" },
      { number: 2, id: "da-nang" },
      { number: 3, id: "tp-hue" },
      { number: 4, id: "hoang-sa" },
      { number: 5, id: "tp-hue" },
    ],
    position: {
      x: 346,
      y: 506,
    },
  },
  {
    id: "khanh-hoa",
    name: "Khánh Hòa",
    thumbnail: KhanhHoaImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 2, id: "dak-lak" },
      { number: 3, id: "truong-sa" },
      { number: 4, id: "gia-lai" },
    ],
    position: {
      x: 382,
      y: 655,
    },
  },
  {
    id: "da-nang",
    name: "Đà Nẵng",
    thumbnail: DaNangImg,
    dice: [
      { number: 1, id: "quang-ngai" },
      { number: 2, id: "tp-hue" },
      { number: 3, id: "hoang-sa" },
      { number: 4, id: "quang-tri" },
    ],
    position: {
      x: 331,
      y: 458,
    },
  },
  {
    id: "tp-hue",
    name: "TP. Huế",
    thumbnail: HueImg,
    dice: [
      { number: 1, id: "da-nang" },
      { number: 2, id: "quang-tri" },
      { number: 3, id: "hoang-sa" },
      { number: 4, id: "ha-tinh" },
    ],
    position: {
      x: 306,
      y: 421,
    },
  },
  {
    id: "quang-tri",
    name: "Quảng Trị",
    thumbnail: QuangTriImg,
    dice: [
      { number: 1, id: "tp-hue" },
      { number: 2, id: "quang-tri" },
      { number: 3, id: "hoang-sa" },
      { number: 4, id: "nghe-an" },
    ],
    position: {
      x: 262,
      y: 378,
    },
  },
  {
    id: "ha-tinh",
    name: "Hà Tĩnh",
    thumbnail: HaTinhImg,
    dice: [
      { number: 1, id: "quang-tri" },
      { number: 2, id: "nghe-an" },
    ],
    position: {
      x: 212,
      y: 313,
    },
  },

  // ==== Bắc Trung Bộ ====
  {
    id: "nghe-an",
    name: "Nghệ An",
    thumbnail: NgheAnImg,
    dice: [
      { number: 1, id: "ha-tinh" },
      { number: 2, id: "thanh-hoa" },
    ],
    position: {
      x: 174,
      y: 260,
    },
  },
  {
    id: "thanh-hoa",
    name: "Thanh Hóa",
    thumbnail: ThanhHoaImg,
    dice: [
      { number: 1, id: "nghe-an" },
      { number: 2, id: "ninh-binh" },
      { number: 3, id: "phu-tho" },
      { number: 4, id: "son-la" },
    ],
    position: {
      x: 200,
      y: 221,
    },
  },
  {
    id: "ninh-binh",
    name: "Ninh Bình",
    thumbnail: NinhBinhImg,
    dice: [
      { number: 1, id: "thanh-hoa" },
      { number: 2, id: "ha-noi" },
      { number: 3, id: "phu-tho" },
      { number: 4, id: "hung-yen" },
    ],
    position: {
      x: 231,
      y: 204,
    },
  },

  // ==== Đồng bằng sông Hồng & Trung du miền núi phía Bắc ====
  {
    id: "ha-noi",
    name: "Hà Nội",
    thumbnail: HaNoiImg,
    dice: [
      { number: 1, id: "ninh-binh" },
      { number: 2, id: "hung-yen" },
      { number: 3, id: "bac-ninh" },
      { number: 4, id: "thai-nguyen" },
      { number: 5, id: "phu-tho" },
    ],
    position: {
      x: 214,
      y: 166,
    },
  },
  {
    id: "hai-phong",
    name: "Hải Phòng",
    thumbnail: HaiPhongImg,
    dice: [
      { number: 1, id: "hung-yen" },
      { number: 2, id: "bac-ninh" },
      { number: 3, id: "quang-ninh" },
    ],
    position: {
      x: 252,
      y: 172,
    },
  },
  {
    id: "quang-ninh",
    name: "Quảng Ninh",
    thumbnail: QuangNinhImg,
    dice: [
      { number: 1, id: "hai-phong" },
      { number: 2, id: "lang-son" },
      { number: 3, id: "bac-ninh" },
    ],
    position: {
      x: 293,
      y: 156,
    },
  },
  {
    id: "bac-ninh",
    name: "Bắc Ninh",
    thumbnail: BacNinhImg,
    dice: [
      { number: 1, id: "ha-noi" },
      { number: 2, id: "lang-son" },
      { number: 3, id: "quang-ninh" },
      { number: 4, id: "hung-yen" },
      { number: 5, id: "hai-phong" },
      { number: 6, id: "thai-nguyen" },
    ],
    position: {
      x: 248,
      y: 146,
    },
  },
  {
    id: "hung-yen",
    name: "Hưng Yên",
    thumbnail: HungYenImg,
    dice: [
      { number: 1, id: "hai-phong" },
      { number: 2, id: "ha-noi" },
      { number: 3, id: "ninh-binh" },
      { number: 4, id: "bac-ninh" },
    ],
    position: {
      x: 249,
      y: 189,
    },
  },
  {
    id: "phu-tho",
    name: "Phú Thọ",
    thumbnail: PhuThoImg,
    dice: [
      { number: 1, id: "thai-nguyen" },
      { number: 2, id: "lao-cai" },
      { number: 3, id: "tuyen-quang" },
      { number: 4, id: "thanh-hoa" },
      { number: 5, id: "son-la" },
      { number: 6, id: "ninh-binh" },
    ],
    position: {
      x: 188,
      y: 170,
    },
  },
  {
    id: "lao-cai",
    name: "Lào Cai",
    thumbnail: LaoCaiImg,
    dice: [
      { number: 1, id: "phu-tho" },
      { number: 2, id: "tuyen-quang" },
      { number: 3, id: "son-la" },
      { number: 4, id: "lai-chau" },
    ],
    position: {
      x: 144,
      y: 109,
    },
  },
  {
    id: "tuyen-quang",
    name: "Tuyên Quang",
    thumbnail: TuyenQuangImg,
    dice: [
      { number: 1, id: "phu-tho" },
      { number: 2, id: "cao-bang" },
      { number: 3, id: "thai-nguyen" },
      { number: 4, id: "lao-cai" },
    ],
    position: {
      x: 182,
      y: 82,
    },
  },
  {
    id: "cao-bang",
    name: "Cao Bằng",
    thumbnail: CaoBangImg,
    dice: [
      { number: 1, id: "tuyen-quang" },
      { number: 2, id: "lang-son" },
      { number: 3, id: "thai-nguyen" },
    ],
    position: {
      x: 234,
      y: 68,
    },
  },
  {
    id: "lang-son",
    name: "Lạng Sơn",
    thumbnail: LangSonImg,
    dice: [
      { number: 1, id: "cao-bang" },
      { number: 2, id: "bac-ninh" },
      { number: 3, id: "thai-nguyen" },
      { number: 4, id: "quang-ninh" },
    ],
    position: {
      x: 258,
      y: 120,
    },
  },
  {
    id: "thai-nguyen",
    name: "Thái Nguyên",
    thumbnail: ThaiNguyenImg,
    dice: [
      { number: 1, id: "phu-tho" },
      { number: 2, id: "bac-ninh" },
      { number: 3, id: "lang-son" },
      { number: 4, id: "cao-bang" },
      { number: 5, id: "ha-noi" },
      { number: 6, id: "tuyen-quang" },
    ],
    position: {
      x: 220,
      y: 108,
    },
  },
  {
    id: "lai-chau",
    name: "Lai Châu",
    thumbnail: LaiChauImg,
    dice: [
      { number: 1, id: "son-la" },
      { number: 2, id: "dien-bien" },
      { number: 3, id: "lao-cai" },
    ],
    position: {
      x: 84,
      y: 89,
    },
  },
  {
    id: "son-la",
    name: "Sơn La",
    thumbnail: SonLaImg,
    dice: [
      { number: 1, id: "thanh-hoa" },
      { number: 2, id: "phu-tho" },
      { number: 3, id: "lai-chau" },
      { number: 4, id: "dien-bien" },
      { number: 5, id: "lao-cai" },
    ],
    position: {
      x: 123,
      y: 149,
    },
  },
  {
    id: "dien-bien",
    name: "Điện Biên",
    thumbnail: DienBienImg,
    dice: [
      { number: 1, id: "son-la" },
      { number: 2, id: "lai-chau" },
    ],
    position: {
      x: 85,
      y: 123,
    },
  },

  {
    id: "hoang-sa",
    name: "Hoàng Sa",
    thumbnail: HoangSaImg,
    dice: [
      { number: 1, id: "ha-noi" },
      { number: 2, id: "truong-sa" },
      { number: 3, id: "quang-tri" },
    ],
    position: {
      x: 528,
      y: 421,
    },
  },

  {
    id: "truong-sa",
    name: "Trường Sa",
    thumbnail: TruongSaImg,
    dice: [
      { number: 1, id: "hoang-sa" },
      { number: 2, id: "ca-mau" },
      { number: 3, id: "tp-HCM" },
    ],
    position: {
      x: 540,
      y: 817,
    },
  },
];
export default PROVINCES_DATA;
