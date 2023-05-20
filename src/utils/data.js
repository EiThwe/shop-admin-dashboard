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
    name:"Profile",
    width:"w-[100px]"
  },
  {
    name:"Name",
    width:"w-[135px]"
  },
  {
    name:"Email",
    width:"w-[200px]"
  },
  {
    name:"Phone",
    width:"w-[150px]"
  },
  {
    name:"Total Buy",
    width:"w-[120px]"
  },
  {
    name:"Status",
    width:"w-[120px]"
  },
  {
    name:"Join On",
    width:"w-[120px]"
  },
  {
    name:"Action",
    width:"w-[120px]"
  },
]
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
