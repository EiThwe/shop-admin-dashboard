import {
  MdDashboard,
  MdOutlineGroups,
  MdGroups,
  MdOutlineCategory,
  MdChair,
  MdShoppingCart,
  MdLogout,
  MdOutlineCollectionsBookmark,
} from "react-icons/md";
import { ImStarHalf } from "react-icons/im";
import { BiTagAlt } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";
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
    subItems: ["Add Product", "List Product", "Grid Product", "Product Detail"],
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
