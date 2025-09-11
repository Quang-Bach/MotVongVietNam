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
    thumbnail: CaMauImg,
    dice: [
      { number: 1, id: "an-giang" },
      { number: 2, id: "can-tho" },
    ],
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
    ],
  },
  {
    id: "vinh-long",
    name: "Vĩnh Long",
    thumbnail: VinhLongImg,
    dice: [
      { number: 1, id: "can-tho" },
      { number: 2, id: "dong-thap" },
    ],
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
    ],
  },
  {
    id: "tay-ninh",
    name: "Tây Ninh",
    thumbnail: TayNinhImg,
    dice: [
      { number: 1, id: "dong-thap" },
      { number: 2, id: "dong-nai" },
      { number: 3, id: "tp-HCM" },
    ],
  },
  {
    id: "dong-nai",
    name: "Đồng Nai",
    thumbnail: DongNaiImg,
    dice: [
      { number: 1, id: "tay-ninh" },
      { number: 2, id: "tp-HCM" },
      { number: 3, id: "lam-dong" },
    ],
  },
  {
    id: "tp-HCM",
    name: "TP. Hồ Chí Minh",
    thumbnail: tpHCMImg,
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
    thumbnail: LamDongImg,
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
    thumbnail: DakLakImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 3, id: "gia-lai" },
      { number: 6, id: "khanh-hoa" },
    ],
  },
  {
    id: "gia-lai",
    name: "Gia Lai",
    thumbnail: GiaLaiImg,
    dice: [
      { number: 1, id: "dak-lak" },
      { number: 2, id: "gia-lai" },
    ],
  },
  {
    id: "quang-ngai",
    name: "Quảng Ngãi",
    thumbnail: QuangNgaiImg,
    dice: [
      { number: 1, id: "gia-lai" },
      { number: 2, id: "da-nang" },
    ],
  },
  {
    id: "khanh-hoa",
    name: "Khánh Hòa",
    thumbnail: KhanhHoaImg,
    dice: [
      { number: 1, id: "lam-dong" },
      { number: 2, id: "dak-lak" },
    ],
  },
  {
    id: "da-nang",
    name: "Đà Nẵng",
    thumbnail: DaNangImg,
    dice: [
      { number: 1, id: "quang-ngai" },
      { number: 2, id: "tp-hue" },
    ],
  },
  {
    id: "tp-hue",
    name: "TP. Huế",
    thumbnail: HueImg,
    dice: [
      { number: 1, id: "da-nang" },
      { number: 2, id: "quang-tri" },
    ],
  },
  {
    id: "quang-tri",
    name: "Quảng Trị",
    thumbnail: QuangTriImg,
    dice: [
      { number: 1, id: "tp-hue" },
      { number: 2, id: "quang-tri" },
    ],
  },
  {
    id: "ha-tinh",
    name: "Hà Tĩnh",
    thumbnail: HaTinhImg,
    dice: [
      { number: 1, id: "quang-tri" },
      { number: 2, id: "nghe-an" },
    ],
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
  },
  {
    id: "dien-bien",
    name: "Điện Biên",
    thumbnail: DienBienImg,
    dice: [
      { number: 1, id: "son-la" },
      { number: 2, id: "lai-chau" },
    ],
  },
];
