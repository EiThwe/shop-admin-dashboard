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
  MdEmail,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { ImStarHalf } from "react-icons/im";
import { BiTagAlt } from "react-icons/bi";
import {
  BsXDiamondFill,
  BsNewspaper,
  BsFillInfoCircleFill,
  BsStarHalf,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegAddressCard,
  FaSkype,
} from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import {
  HiOutlineShoppingCart,
  HiOutlineTicket,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
export const sidebarData = [
  {
    name: "Dashboard",
    pathname: "/dashboard",
    Icon: MdDashboard,
    isBordered: true,
    subItems: [],
    isOpen: false,
    id: 1,
  },
  {
    name: "vendors",
    pathname: "/",
    Icon: MdOutlineGroups,
    isBordered: false,
    subItems: ["Vendor Grid", "Vendor List", "Vendors Profile"],
    isOpen: false,
    id: 2,
  },
  {
    name: "users",
    pathname: "/",
    Icon: MdGroups,
    isBordered: true,
    subItems: ["User Grid", "User List", "Users Profile"],
    isOpen: false,
    id: 3,
  },
  {
    name: "categories",
    pathname: "/",
    Icon: MdOutlineCategory,
    isBordered: false,
    subItems: ["Main Category", "Sub Category"],
    isOpen: false,
    id: 4,
  },
  {
    name: "products",
    pathname: "/",
    Icon: MdChair,
    isBordered: false,
    subItems: ["Add Product", "List Product", "Grid Product"],
    isOpen: false,
    id: 5,
  },
  {
    name: "orders",
    pathname: "/",
    Icon: MdShoppingCart,
    isBordered: false,
    subItems: ["New Order", "Order History", "Order Detail", "Invoice"],
    isOpen: false,
    id: 6,
  },
  {
    name: "Reviews",
    pathname: "/reviews",
    Icon: ImStarHalf,
    isBordered: false,
    subItems: [],
    isOpen: false,
    id: 7,
  },
  {
    name: "Brands",
    pathname: "/brands",
    Icon: BiTagAlt,
    isBordered: true,
    subItems: [],
    isOpen: false,
    id: 8,
  },
  {
    name: "Authentication",
    pathname: "/",
    Icon: MdLogout,
    isBordered: false,
    subItems: ["Sign in", "Sign Up"],
    isOpen: false,
    id: 9,
  },
  {
    name: "Icons",
    pathname: "/",
    Icon: BsXDiamondFill,
    isBordered: false,
    subItems: ["Material Icons", "Font Awesome Icons", "Flag Icons"],
    isOpen: false,
    id: 10,
  },

  {
    name: "Other Pages",
    pathname: "/",
    Icon: MdOutlineCollectionsBookmark,
    isBordered: false,
    subItems: ["404 Page"],
    isOpen: false,
    id: 11,
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
    trending: "TOP",
  },
  {
    name: "Footwear",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/footwear.png",
    category: "Sport Shoes",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    trending: "MEDIUM",
  },
  {
    name: "Footwear",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/footwear.png",
    category: "Casual Shoes",
    product: "68",
    totalSell: "5161",
    status: "Inactive",
    trending: "TOP",
  },
  {
    name: "Clothes",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/clothes.png",
    category: "Jeans",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    trending: "MEDIUM",
  },
  {
    name: "Cosmatics",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/cosmetics.png",
    category: "Makeup kit",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
    trending: "LOW",
  },
  {
    name: "Glasses",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/glasses.png",
    category: "Lenses",
    product: "82",
    totalSell: "10061",
    status: "Inactive",
    trending: "MEDIUM",
  },
  {
    name: "Bags",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/bag.png",
    category: "Shopping Bag",
    product: "18",
    totalSell: "3061",
    status: "ACTIVE",
    trending: "TOP",
  },
  {
    name: "Bags",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/bag.png",
    category: "Gym Backpack",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    trending: "MEDIUM",
  },
  {
    name: "Glasses",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/glasses.png",
    category: "Sunglasses",
    product: "82",
    totalSell: "10061",
    status: "Inactive",
    trending: "MEDIUM",
  },
  {
    name: "Jewellry",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/jewelry.png",
    category: "Earing",
    product: "68",
    totalSell: "5161",
    status: "Inactive",
    trending: "TOP",
  },
  {
    name: "Perfume",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/perfume.png",
    category: "Deodorant",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    trending: "MEDIUM",
  },
  {
    name: "Clothes",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/clothes.png",
    category: "Tops",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    trending: "MEDIUM",
  },
  {
    name: "Cosmatics",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/cosmetics.png",
    category: "Skin care kit",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
    trending: "LOW",
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

export const theadData = [
  { name: "Thumb", width: "w-[90px]" },
  { name: "Name", width: "w-[90px]" },
  { name: "Main Categories", width: "w-[100px]" },
  { name: "Product", width: "w-[90px]" },
  { name: "Total Sell", width: "w-[80px]" },
  { name: "Status", width: "w-[90px]" },
  { name: "Trending", width: "w-[90px]" },
  { name: "Action", width: "w-[85px]" },
];

export const theadMainCategoryData = [
  { name: "Thumb", width: "w-[90px]" },
  { name: "Name", width: "w-[90px]" },
  { name: "Sub Categories", width: "w-[100px]" },
  { name: "Product", width: "w-[90px]" },
  { name: "Total Sell", width: "w-[80px]" },
  { name: "Status", width: "w-[90px]" },
  { name: "Trending", width: "w-[90px]" },
  { name: "Action", width: "w-[85px]" },
];

export const mainCategoryData = [
  {
    name: "Clothes",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/clothes.png",
    product: "28",
    totalSell: "2161",
    status: "ACTIVE",
    subCategories: {
      count: "5",
      categories: ["T-shirt", "Shirt", "Dress", "Jeans", "Top"],
    },
    trending: "Top",
  },
  {
    name: "Footwear",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/footwear.png",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    subCategories: {
      count: "4",
      categories: ["Sports", "Casual", "safety shoes ", "Sandal"],
    },
    trending: "Medium",
  },
  {
    name: "Jewelry",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/jewelry.png",
    product: "68",
    totalSell: "5161",
    status: "Inactive",
    subCategories: {
      count: "4",
      categories: ["necklace", "chain", "rings", "earings"],
    },
    trending: "Top",
  },
  {
    name: "Perfume",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/perfume.png",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    subCategories: {
      count: "4",
      categories: [
        "Clothes perfume",
        "deodorant ",
        "Flower fragrance ",
        "Air Freshener",
      ],
    },
    trending: "Medium",
  },
  {
    name: "Cosmetics",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/cosmetics.png",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
    subCategories: {
      count: "10",
      categories: [
        "Makeup kit",
        "Hair gel",
        "sunscreen",
        "facewash",
        "Body shop",
        "Lipstick",
        "eye liner",
        "Hair Shampoo",
        "Beauty Cream",
        "Skin Serum",
      ],
    },
    trending: "Low",
  },
  {
    name: "Glasses",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/glasses.png",
    product: "82",
    totalSell: "10061",
    status: "Inactive",
    subCategories: {
      count: "2",
      categories: ["Sunglasses ", "Lenses "],
    },
    trending: "Medium",
  },
  {
    name: "Bags",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/bag.png",
    product: "18",
    totalSell: "3061",
    status: "ACTIVE",
    subCategories: {
      count: "4",
      categories: ["shopping bag", "Gym backpack", "purse ", "wallet "],
    },
    trending: "Top",
  },
  {
    name: "Footwear",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/footwear.png",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    subCategories: {
      count: "4",
      categories: ["Sports", "Casual", "safety shoes ", "Sandal"],
    },
    trending: "Medium",
  },
  {
    name: "Jewelry",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/jewelry.png",
    product: "68",
    totalSell: "5161",
    status: "Inactive",
    subCategories: {
      count: "4",
      categories: ["necklace", "chain", "rings", "earings"],
    },
    trending: "Top",
  },
  {
    name: "Perfume",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/category/perfume.png",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    subCategories: {
      count: "4",
      categories: [
        "Clothes perfume",
        "deodorant ",
        "Flower fragrance ",
        "Air Freshener",
      ],
    },
    trending: "Medium",
  },
];

export const userGridInfo = [
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-1.jpg",
    name: "Emma Smith",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-2.jpg",
    name: "John Smith",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-3.jpg",
    name: "Mike Tison",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-4.jpg",
    name: "Jack Sparrow",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-5.jpg",
    name: "Mariya Martin",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-6.jpg",
    name: "Volverin Wolker",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-7.jpg",
    name: "Molla Hajim",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-8.jpg",
    name: "Jenny Smith",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-9.jpg",
    name: "Moni Vakazu",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-10.jpg",
    name: "Martin Lynda",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-11.jpg",
    name: "Boron Noise",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-12.jpg",
    name: "Walvi Nekki",
  },
];

export const theadDataUserList = [
  {
    name: "Profile",
    width: "w-[100px]",
  },
  {
    name: "Name",
    width: "w-[135px]",
  },
  {
    name: "Email",
    width: "w-[200px]",
  },
  {
    name: "Phone",
    width: "w-[150px]",
  },
  {
    name: "Total Buy",
    width: "w-[120px]",
  },
  {
    name: "Status",
    width: "w-[120px]",
  },
  {
    name: "Join On",
    width: "w-[120px]",
  },
  {
    name: "Action",
    width: "w-[120px]",
  },
];
export const userListTableRowData = [
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Marlee Rena",
    email: "marleerena@gmail.com",
    phone: "+1-256-325-8652",
    totalBuy: "2161",
    status: "ACTIVE",
    joinOn: "+1-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    phone: "+5-256-325-8652",
    totalBuy: "5161",
    status: "ACTIVE",
    joinOn: "+5-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    phone: "+5-256-325-8652",
    totalBuy: "5161",
    status: "ACTIVE",
    joinOn: "+5-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "Mohini Marlo",
    email: "mohinimarlo@gmail.com",
    phone: "+91-154-325-8652",
    totalBuy: "1561",
    status: "ACTIVE",
    joinOn: "+91-154-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u5.jpg",
    name: "Nitilo Kathilo",
    email: "nitilokathilo@gmail.com",
    phone: "+91-989-325-8652",
    totalBuy: "1061",
    status: "ACTIVE",
    joinOn: "+91-989-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u6.jpg",
    name: "Hardi Sandhu",
    email: "hardisandhu@gmail.com",
    phone: "+1-789-325-6589",
    totalBuy: "10061",
    status: "ACTIVE",
    joinOn: "+1-789-325-6589",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u7.jpg",
    name: "Bhavlo Malvia",
    email: "bhavlomalvia@gmail.com",
    phone: "+91-989-325-8652",
    totalBuy: "3061",
    status: "ACTIVE",
    joinOn: "+91-989-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u8.jpg",
    name: "Jeni Dusuja",
    email: "jenidusuja@gmail.com",
    phone: "+1-967-325-1122",
    totalBuy: "6061",
    status: "ACTIVE",
    joinOn: "+1-967-325-1122",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Marlee Rena",
    email: "marleerena@gmail.com",
    phone: "+1-256-325-8652",
    totalBuy: "2161",
    status: "ACTIVE",
    joinOn: "+1-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    phone: "+5-256-325-8652",
    totalBuy: "5161",
    status: "ACTIVE",
    joinOn: "+5-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    phone: "+5-256-325-8652",
    totalBuy: "5161",
    status: "ACTIVE",
    joinOn: "+5-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "Mohini Marlo",
    email: "mohinimarlo@gmail.com",
    phone: "+91-154-325-8652",
    totalBuy: "1561",
    status: "ACTIVE",
    joinOn: "+91-154-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u5.jpg",
    name: "Nitilo Kathilo",
    email: "nitilokathilo@gmail.com",
    phone: "+91-989-325-8652",
    totalBuy: "1061",
    status: "ACTIVE",
    joinOn: "+91-989-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u6.jpg",
    name: "Hardi Sandhu",
    email: "hardisandhu@gmail.com",
    phone: "+1-789-325-6589",
    totalBuy: "10061",
    status: "ACTIVE",
    joinOn: "+1-789-325-6589",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u7.jpg",
    name: "Bhavlo Malvia",
    email: "bhavlomalvia@gmail.com",
    phone: "+91-989-325-8652",
    totalBuy: "3061",
    status: "ACTIVE",
    joinOn: "+91-989-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u8.jpg",
    name: "Jeni Dusuja",
    email: "jenidusuja@gmail.com",
    phone: "+1-967-325-1122",
    totalBuy: "6061",
    status: "ACTIVE",
    joinOn: "+1-967-325-1122",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Marlee Rena",
    email: "marleerena@gmail.com",
    phone: "+1-256-325-8652",
    totalBuy: "2161",
    status: "ACTIVE",
    joinOn: "+1-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    phone: "+5-256-325-8652",
    totalBuy: "5161",
    status: "ACTIVE",
    joinOn: "+5-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    phone: "+5-256-325-8652",
    totalBuy: "5161",
    status: "ACTIVE",
    joinOn: "+5-256-325-8652",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "Mohini Marlo",
    email: "mohinimarlo@gmail.com",
    phone: "+91-154-325-8652",
    totalBuy: "1561",
    status: "ACTIVE",
    joinOn: "+91-154-325-8652",
  },
];

export const socialProfileButton = [
  { Icon: IoLogoTwitter },
  { Icon: FaLinkedinIn },
  { Icon: FaFacebookF },
  { Icon: FaSkype },
];

export const infoCardData = [
  {
    Icon: HiOutlineUser,
    quantity: "546",
    text: "Bought",
    bgColor: "bg-blue-400",
  },
  {
    Icon: HiOutlineShoppingCart,
    quantity: "1953",
    text: "Wish List",
    bgColor: "bg-yellow-400",
  },
  {
    Icon: HiOutlineTicket,
    quantity: "02",
    text: "Voucher",
    bgColor: "bg-green-400",
  },
];

export const profileContainerData = [
  {
    Icon: HiOutlineShoppingCart,
    bgColor: "bg-blue-400",
    title: "New Order",
    text: "Selena has placed an new order",
    time: " 10\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
  {
    Icon: MdEmail,
    bgColor: "bg-green-400",
    title: "New Enquiry",
    text: "Phileine has placed an new order",
    time: " 9\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
  {
    bgColor: "bg-yellow-400",
    Icon: HiOutlineTicket,
    title: "Support Ticket",
    text: "Emma has placed an new order",
    time: " 10\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
  {
    Icon: HiOutlineShoppingCart,
    bgColor: "bg-blue-400",
    title: "New order",
    text: "Ryan has placed an new order",
    time: " 10\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
  {
    Icon: MdOutlineCalendarToday,
    bgColor: "bg-[#24C4DA]",
    title: "Company Meetup",
    text: "Phileine has placed an new order",
    time: " 10\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
  {
    Icon: HiOutlineTicket,
    bgColor: "bg-yellow-400",
    title: "Support Ticket",
    text: "Emma has placed an new order",
    time: " 10\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
  {
    Icon: MdEmail,
    bgColor: "bg-green-400",
    title: "New Enquiry",
    text: "Phileine has placed an new order",
    time: " 9\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAM",
  },
];

export const vendorGridData = [
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Emma Smith",
    phone: "+91 963-852-7410",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "180",
      },
      {
        name: "sell",
        quantity: "1908",
      },
      {
        name: "payout",
        quantity: "$1908",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Bobly Smith",
    phone: "+91 863-852-7654",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "65",
      },
      {
        name: "sell",
        quantity: "548",
      },
      {
        name: "payout",
        quantity: "$548",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Robin Hood",
    phone: "+91 889-852-7466",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "654",
      },
      {
        name: "sell",
        quantity: "548",
      },
      {
        name: "payout",
        quantity: "$548",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "devin chingol",
    phone: "+91 789-852-7865",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "977",
      },
      {
        name: "sell",
        quantity: "987",
      },
      {
        name: "payout",
        quantity: "$987",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u5.jpg",
    name: "Nitilo Smith",
    phone: "+91 658-852-7410",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "654",
      },
      {
        name: "sell",
        quantity: "159",
      },
      {
        name: "payout",
        quantity: "$159",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u6.jpg",
    name: "Mehulo Kathia",
    phone: "+91 698-852-7410",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "658",
      },
      {
        name: "sell",
        quantity: "854",
      },
      {
        name: "payout",
        quantity: "$854",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u7.jpg",
    name: "Bridg Stone",
    phone: "+91 333-852-7410",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "652",
      },
      {
        name: "sell",
        quantity: "125",
      },
      {
        name: "payout",
        quantity: "$125",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u8.jpg",
    name: "pintu Trainee",
    phone: "+91 698-866-7410",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "658",
      },
      {
        name: "sell",
        quantity: "457",
      },
      {
        name: "payout",
        quantity: "$457",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u9.jpg",
    name: "DL Kapdia",
    phone: "+91 332-852-3215",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "180",
      },
      {
        name: "sell",
        quantity: "1908",
      },
      {
        name: "payout",
        quantity: "$1908",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u10.jpg",
    name: "Manu Semli",
    phone: "+91 654-852-7744",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "252",
      },
      {
        name: "sell",
        quantity: "542",
      },
      {
        name: "payout",
        quantity: "$542",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u11.jpg",
    name: "Niki Smith",
    phone: "+91 45+6-852-5522",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "425",
      },
      {
        name: "sell",
        quantity: "352",
      },
      {
        name: "payout",
        quantity: "$352",
      },
    ],
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u12.jpg",
    name: "Jullie Bronzna",
    phone: "+91 325-852-6543",
    email: "exmaple@email.com",
    cartData: [
      {
        name: "items",
        quantity: "254",
      },
      {
        name: "sell",
        quantity: "574",
      },
      {
        name: "payout",
        quantity: "$574",
      },
    ],
  },
];

export const addVendorData = [
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u1.jpg",
    name: "Aaren",
    status: "away",
    isChecked: true,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u2.jpg",
    name: "Leon Battista",
    status: "active",
    isChecked: true,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u3.jpg",
    name: "Abriel",
    status: "away",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u4.jpg",
    name: "Emma",
    status: "active",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u5.jpg",
    name: "Emily",
    status: "away",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u6.jpg",
    name: "William",
    status: "unknown",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u7.jpg",
    name: "Sophia",
    status: "away",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u8.jpg",
    name: "Sophia",
    status: "unknown",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u1.jpg",
    name: "Aaren",
    status: "away",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u2.jpg",
    name: "Abby",
    status: "unknown",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u3.jpg",
    name: "Abriel",
    status: "away",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u4.jpg",
    name: "Emma",
    status: "active",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u5.jpg",
    name: "Emily",
    status: "unknown",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u6.jpg",
    name: "William",
    status: "away",
    isChecked: false,
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u7.jpg",
    name: "Sophia",
    status: "unknown",
    isChecked: false,
  },
];

export const vendorListTableRowData = [
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Marlee Rena",
    email: "marleerena@gmail.com",
    product: "28",
    totalSell: "2161",
    status: "ACTIVE",
    joinOn: "2021-10-30",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    joinOn: "2021-10-25",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    joinOn: "2021-10-25",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "Mohini Marlo",
    email: "mohinimarlo@gmail.com",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    joinOn: "2021-10-21",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u5.jpg",
    name: "Nitilo Kathilo",
    email: "nitilokathilo@gmail.com",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
    joinOn: "2021-10-18",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u6.jpg",
    name: "Hardi Sandhu",
    email: "hardisandhu@gmail.com",
    product: "82",
    totalSell: "10061",
    status: "ACTIVE",
    joinOn: "2021-10-14",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u7.jpg",
    name: "Bhavlo Malvia",
    email: "bhavlomalvia@gmail.com",
    product: "18",
    totalSell: "3061",
    status: "ACTIVE",
    joinOn: "2021-10-05",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u8.jpg",
    name: "Jeni Dusuja",
    email: "jenidusuja@gmail.com",
    product: "60",
    totalSell: "6061",
    status: "ACTIVE",
    joinOn: "2021-10-01",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Marlee Rena",
    email: "marleerena@gmail.com",
    product: "28",
    totalSell: "2161",
    status: "ACTIVE",
    joinOn: "2021-10-30",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    joinOn: "2021-10-25",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    joinOn: "2021-10-25",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "Mohini Marlo",
    email: "mohinimarlo@gmail.com",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    joinOn: "2021-10-21",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u5.jpg",
    name: "Nitilo Kathilo",
    email: "nitilokathilo@gmail.com",
    product: "18",
    totalSell: "1061",
    status: "ACTIVE",
    joinOn: "2021-10-18",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u6.jpg",
    name: "Hardi Sandhu",
    email: "hardisandhu@gmail.com",
    product: "82",
    totalSell: "10061",
    status: "ACTIVE",
    joinOn: "2021-10-14",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u7.jpg",
    name: "Bhavlo Malvia",
    email: "bhavlomalvia@gmail.com",
    product: "18",
    totalSell: "3061",
    status: "ACTIVE",
    joinOn: "2021-10-05",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u8.jpg",
    name: "Jeni Dusuja",
    email: "jenidusuja@gmail.com",
    product: "60",
    totalSell: "6061",
    status: "ACTIVE",
    joinOn: "2021-10-01",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u1.jpg",
    name: "Marlee Rena",
    email: "marleerena@gmail.com",
    product: "28",
    totalSell: "2161",
    status: "ACTIVE",
    joinOn: "2021-10-30",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u2.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    joinOn: "2021-10-25",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u3.jpg",
    name: "Johnee Bolbi",
    email: "johneebolbi@gmail.com",
    product: "68",
    totalSell: "5161",
    status: "ACTIVE",
    joinOn: "2021-10-25",
  },
  {
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/vendor/u4.jpg",
    name: "Mohini Marlo",
    email: "mohinimarlo@gmail.com",
    product: "38",
    totalSell: "1561",
    status: "ACTIVE",
    joinOn: "2021-10-21",
  },
];
export const theadDataVendorList = [
  {
    name: "Profile",
    width: "w-[100px]",
  },
  {
    name: "Name",
    width: "w-[135px]",
  },
  {
    name: "Email",
    width: "w-[200px]",
  },
  {
    name: "Product",
    width: "w-[150px]",
  },
  {
    name: "Total Sell",
    width: "w-[120px]",
  },
  {
    name: "Status",
    width: "w-[120px]",
  },
  {
    name: "Join On",
    width: "w-[120px]",
  },
  {
    name: "Action",
    width: "w-[120px]",
  },
];

export const vendorInfoCardData = [
  {
    Icon: HiOutlineUser,
    quantity: "5300",
    text: "New Users",
    bgColor: "bg-blue-400",
  },
  {
    Icon: HiOutlineShoppingCart,
    quantity: "1953",
    text: "Order Placed",
    bgColor: "bg-yellow-400",
  },
  {
    Icon: IoDiamondOutline,
    quantity: "1450",
    text: "Total Sales",
    bgColor: "bg-green-400",
  },
];

export const vendorProfileTableRowData = [
  {
    order_id: "24541",
    product_name: "Coach\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSwagger",
    unit: "1 Unit",
    order_date: "Oct 20, 2018",
    order_cost: "$230",
    status: "Completed",
  },
  {
    order_id: "24541",
    product_name:
      "Toddler\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tShoes, Gucci Watch",
    unit: "2 Units",
    order_date: "Nov 15, 2018",
    order_cost: "$550",
    status: "Delayed",
  },
  {
    order_id: "24541",
    product_name: "Hat Black\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSuits",
    unit: "1 Unit",
    order_date: "Nov 18, 2018",
    order_cost: "$325",
    status: "On Hold",
  },
  {
    order_id: "24541",
    product_name:
      "Backpack\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGents, Swimming Cap Slin",
    unit: "5 Units",
    order_date: "Dec 13, 2018",
    order_cost: "$200",
    status: "Completed",
  },
  {
    order_id: "24541",
    product_name: "Speed 500\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIgnite",
    unit: "1 Unit",
    order_date: "Dec 23, 2018",
    order_cost: "$150",
    status: "Cancelled",
  },
];

export const dateData = [
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "Custom Range",
];

export const theadDataVendorProfile = [
  {
    name: "Order_ID",
    width: "w-[10%]",
  },
  {
    name: "Product_Name",
    width: "w-[35%]",
  },
  {
    name: "Units",
    width: "w-[9%]",
  },
  {
    name: "Order_Date",
    width: "w-[15%]",
  },
  {
    name: "Order_Cost",
    width: "w-[13%]",
  },
  {
    name: "Status",
    width: "w-[15%]",
  },
  {
    name: "",
    width: "w-auto",
  },
];

export const saleReportToggleTab = [
  { name: "Today's", slug: "today's" },
  { name: "Monthly", slug: "monthly" },
  { name: "Yearly", slug: "yearly" },
];

export const editDropdownData = ["View", "Remove"];

export const categorySelectBoxData = [
  {
    option: "All Category",
    value: "all-category",
  },
  {
    option: "Men's",
    value: "men's",
  },
  {
    option: "Women's",
    value: "women's",
  },
  {
    option: "Kids",
    value: "kids",
  },
  {
    option: "Others",
    value: "others",
  },
];
export const orderBySelectBoxData = [
  {
    option: "Order By",
    value: "order-by",
  },
  {
    option: "Latest",
    value: "latest",
  },
  {
    option: "Price Low - High",
    value: "priceL2H",
  },
  {
    option: "Price High - Low",
    value: "priceH2L",
  },
  {
    option: "Others",
    value: "others",
  },
];
