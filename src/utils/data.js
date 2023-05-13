import {
  MdDashboard,
  MdOutlineGroups,
  MdGroups,
  MdOutlineCategory,
  MdChair,
  MdShoppingCart,
  MdLogout,
  MdOutlineCollectionsBookmark,
  MdMail,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { ImStarHalf } from "react-icons/im";
import { BiTagAlt } from "react-icons/bi";
import {
  BsXDiamondFill,
  BsNewspaper,
  BsFillInfoCircleFill,
  BsStarHalf,
} from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
export const sidebarData = [
  {
    name: "Dashboard",
    pathname: "/",
    Icon: MdDashboard,
    isBordered: true,
    subItems: [],
  },
  {
    name: "vendors",
    pathname: "/",
    Icon: MdOutlineGroups,
    isBordered: false,
    subItems: ["Vendor Grid", "Vendor List", "Vendors Profile"],
  },
  {
    name: "users",
    pathname: "/",
    Icon: MdGroups,
    isBordered: true,
    subItems: ["User Grid", "User List", "Users Profile"],
  },
  {
    name: "categories",
    pathname: "/",
    Icon: MdOutlineCategory,
    isBordered: false,
    subItems: ["Main Category", "Sub Category"],
  },
  {
    name: "products",
    pathname: "/products",
    Icon: MdChair,
    isBordered: false,
    subItems: ["Add Product", "List Product", "Grid Product"],
  },
  {
    name: "orders",
    pathname: "/",
    Icon: MdShoppingCart,
    isBordered: false,
    subItems: ["New Order", "Order History", "Order Detail", "Invoice"],
  },
  {
    name: "Reviews",
    pathname: "/",
    Icon: ImStarHalf,
    isBordered: false,
    subItems: [],
  },
  {
    name: "Brands",
    pathname: "/",
    Icon: BiTagAlt,
    isBordered: true,
    subItems: [],
  },
  {
    name: "Authentication",
    pathname: "/",
    Icon: MdLogout,
    isBordered: false,
    subItems: ["Sign in", "Sign Up"],
  },
  {
    name: "Icons",
    pathname: "/",
    Icon: BsXDiamondFill,
    isBordered: false,
    subItems: ["Material Icons", "Font Awesome Icons", "Bootstrap Icons"],
  },
  {
    name: "Other Pages",
    pathname: "/",
    Icon: MdOutlineCollectionsBookmark,
    isBordered: false,
    subItems: ["404 Page"],
  },
];

export const detailColors = [
  "bg-blue-300",
  "bg-red-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-pink-300",
];

export const detailToggleData = [
  {
    Icon: BsNewspaper,
    title: "Detail",
    slug: "detail",
  },
  {
    Icon: BsFillInfoCircleFill,
    title: "Info",
    slug: "info",
  },
  {
    Icon: BsStarHalf,
    title: "Review",
    slug: "review",
  },
];

export const detailArrowData = [
  "Any Product types that You want - Simple, Configurable",
  "Downloadable/Digital Products, Virtual Products",
  "Inventory Management with Backordered items",
  "Flatlock seams throughout.",
];

export const infoArrowData = [
  "Weight 1000 g",
  "Dimensions 35 × 30 × 7 cm",
  "Color Black, Pink, Red, White",
];
export const reviewToggleData = [
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/review-image/1.jpg",
    name: "Jenny Doe",
    review: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/review-image/2.jpg",
    name: "Linder Mogus",
    review: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export const profileInfo = [
  {
    Icon: FaRegAddressCard,
    text: "321/2, rio street, usa",
  },
  {
    Icon: MdMail,
    text: "example@email.com",
  },
  {
    Icon: MdOutlinePhoneInTalk,
    text: "+00 987-654-3210",
  },
];

export const categoryListData = [
  {
    name: "Clothes",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/clothes.png",
    category: "Winter Wear",
    product: "28",
    totalSell: "2161",
    status: "ACTIVE",
  },
  {
    name: "Footwear",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/footwear.png",
    category: "Sport Shoes",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
  },
  {
    name: "Footwear",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/footwear.png",
    category: "Casual Shoes",
    product: "68",
    totalSell: "5161",
    status: "Inactive",
  },
  {
    name: "Clothes",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/clothes.png",
    category: "Jeans",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
  },
  {
    name: "Cosmatics",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/cosmetics.png",
    category: "Makeup kit",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
  },
  {
    name: "Glasses",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/glasses.png",
    category: "Lenses",
    product: "82",
    totalSell: "10061",
    status: "Inactive",
  },
  {
    name: "Bags",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/bag.png",
    category: "Shopping Bag",
    product: "18",
    totalSell: "3061",
    status: "ACTIVE",
  },
  {
    name: "Bags",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/bag.png",
    category: "Gym Backpack",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
  },
  {
    name: "Glasses",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/glasses.png",
    category: "Sunglasses",
    product: "82",
    totalSell: "10061",
    status: "Inactive",
  },
  {
    name: "Jewellry",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/jewelry.png",
    category: "Earing",
    product: "68",
    totalSell: "5161",
    status: "Inactive",
  },
  {
    name: "Perfume",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/perfume.png",
    category: "Deodorant",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
  },
  {
    name: "Clothes",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/clothes.png",
    category: "Tops",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
  },
  {
    name: "Cosmatics",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/cosmetics.png",
    category: "Skin care kit",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
  },
];

export const selectboxData = [
  "Clothes",
  "Footwear",
  "Jewellry",
  "Perfume",
  "Cosmetics",
  "Glasses",
  "Bags",
];
export const selectNumberData = [20, 30, 50, 75, "All"];
