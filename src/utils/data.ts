import { FaGears, FaUsersGear } from "react-icons/fa6";
import { TfiDashboard } from "react-icons/tfi";
import {
  MdDashboard,
  MdMessage,
  MdSettings,
  MdShare,
  MdMiscellaneousServices,
  MdOutlinePayment,
  MdOutlineEmail,
} from "react-icons/md";
import { LuBookMinus, LuUsers2 } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiExchangeDollarFill, RiRestTimeLine } from "react-icons/ri";
import { Home, Icon, Info, Lock } from "lucide-react";
import { FiClock } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { PiInvoice, PiMapPinAreaDuotone } from "react-icons/pi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { TbAxe, TbMessage, TbTransitionLeftFilled } from "react-icons/tb";

export const navigationLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Reviews", path: "#reviews" },
  { id: 3, name: "Pricing", path: "#pricing" },
  { id: 4, name: "FAQ", path: "#faq" },
  { id: 5, name: "About Us", path: "#about-us" },
];
export const footerData = [
  {
    subheading: "Support",
    menuItems: [
      { name: "Help centre", link: "/contact-us" },
      { name: "Account information", link: "/faq" },
      { name: "Live Chat", link: "/live-chat" },
      { name: "Support Center", link: "/support-center" },
    ],
  },
  {
    subheading: "Help & Solutions",
    menuItems: [
      { name: "Troubleshooting", link: "/troubleshooting" },
      { name: "Guides", link: "/guides" },
      { name: "Community Forums", link: "/community-forums" },
      { name: "Customer Stories", link: "/customer-stories" },
    ],
  },
  {
    subheading: "Products",
    menuItems: [
      { name: "Product Overview", link: "/product-overview" },
      { name: "Pricing", link: "/pricing" },
      { name: "New Features", link: "/new-features" },
      { name: "Demo", link: "/demo" },
    ],
  },
];

export const providerSidebarData = [
  {
    id: 1,
    Icon: MdDashboard,
    title: "Dashboard",
    link: "/dashboard",
    color: "#402A2C",
  },
  {
    id: 2,
    Icon: LuBookMinus,
    title: "Appointments",
    link: "/dashboard/appointments",
    color: "#de1a24",
  },
  {
    id: 3,
    Icon: MdMessage,
    title: "Messages",
    link: "/dashboard/messages",
    color: "#4CAF50",
  },
  {
    id: 4,
    Icon: MdMiscellaneousServices,
    title: "Services",
    link: "/dashboard/services",
    color: "#FF9800",
  },
  {
    id: 5,
    Icon: LuUsers2,
    title: "Customers",
    link: "/dashboard/customers",
    color: "#9C27B0",
  },
  {
    id: 6,
    Icon: FaUsersGear,
    title: "Employees",
    link: "/dashboard/employees",
    color: "#00BCD4",
  },
  {
    id: 7,
    Icon: AiOutlineDollarCircle,
    title: "Finance",
    link: "/dashboard/finance/1",
    color: "#FFC107",
  },
  {
    id: 8,
    Icon: MdSettings,
    title: "Settings",
    link: "/dashboard/settings/1",
    color: "#795548",
  },
  {
    id: 9,
    Icon: RiExchangeDollarFill,
    title: "My Subscriptions",
    link: "/dashboard/subscriptions",
    color: "#E20000",
  },
  {
    id: 10,
    Icon: MdShare,
    title: "Share Links",
    link: "/dashboard/share",
    color: "#3F51B5",
  },
];

export const employeeSidebarData = [
  {
    id: 1,
    Icon: Info,
    title: "Employee details",
    link: "/dashboard/employees/1",
    color: "#402A2C",
  },
  {
    id: 6,
    Icon: Lock,
    title: "Change Password",
    link: "/dashboard/employees/1/change-password",
    color: "#402A2C",
  },
  {
    id: 2,
    Icon: TfiDashboard,
    title: "Assigned services",
    link: "/dashboard/employees/1/assigned-service",
    color: "#de1a24",
  },
  {
    id: 3,
    Icon: FiClock,
    title: "Working hours",
    link: "/dashboard/employees/1/working-hours",
    color: "#4CAF50",
  },
  {
    id: 4,
    Icon: RiRestTimeLine,
    title: "Days off",
    link: "/dashboard/employees/1/day-off",
    color: "#FF9800",
  },
  {
    id: 5,
    Icon: LuUsers2,
    title: "Special days",
    link: "/dashboard/employees/1/special-day",
    color: "#9C27B0",
  },
];

export const providerSettingsSidebarData = [
  {
    id: 1,
    Icon: FaGears,
    title: "General",
    link: "/dashboard/settings/1",
    color: "#402A2C",
  },
  {
    id: 6,
    Icon: Home,
    title: "Shop",
    link: "/dashboard/settings/1/shop",
    color: "#1565FF",
  },
  {
    id: 2,
    Icon: GrUserManager,
    title: "Provider",
    link: "/dashboard/settings/1/provider",
    color: "#AB1F1F",
  },
  {
    id: 3,
    Icon: MdOutlinePayment,
    title: "Payments",
    link: "/dashboard/settings/1/payments",
    color: "#007B05",
  },
  {
    id: 4,
    Icon: PiMapPinAreaDuotone,
    title: "Service area",
    link: "/dashboard/settings/1/service-area",
    color: "#315EFF",
  },
  {
    id: 5,
    Icon: HiOutlineReceiptPercent,
    title: "Add Tax Rate",
    link: "/dashboard/settings/1/tax-rate",
    color: "#B63D3D",
  },
  {
    id: 6,
    Icon: FaRegClock,
    title: "Office hours",
    link: "/dashboard/settings/1/office-hours",
    color: "#036801",
  },
  {
    id: 7,
    Icon: FaRegClock,
    title: "Company days off",
    link: "/dashboard/settings/1/day-off",
    color: "#0A41D0",
  },
  {
    id: 8,
    Icon: MdOutlineEmail,
    title: "Email notifications",
    link: "/dashboard/settings/1/email-notification",
    color: "#CF0808",
  },
  {
    id: 9,
    Icon: TbMessage,
    title: "SMS notifications",
    link: "/dashboard/settings/1/sms-notification",
    color: "#0A41D0",
  },
];

export const financeSidebar = [
  {
    id: 1,
    Icon: PiInvoice,
    title: "Invoices",

    color: "#402A2C",
    submenu: [
      {
        id: 1,
        title: "Invoices",
        link: "/dashboard/finance/1/invoices",
        Icon: PiInvoice,
        color: "#402A2C",
      },
      {
        id: 2,
        title: "Settings",
        link: "/dashboard/finance/1/settings",
        Icon: PiInvoice,

        color: "#402A2C",
      },
    ],
  },
  {
    id: 2,
    Icon: TbTransitionLeftFilled,
    title: "Transactions",
    color: "#402A2C",
    link: "/dashboard/finance/1/transactions",
  },
  {
    id: 3,
    Icon: TbAxe,
    title: "Taxes",
    color: "#402A2C",
    link: "/dashboard/finance/1/taxes",
  },
  {
    id: 4,
    Icon: PiInvoice,
    title: "Coupons",

    color: "#402A2C",
    submenu: [
      {
        id: 1,
        title: "Coupons",
        link: "/dashboard/finance/1/coupons",
        Icon: PiInvoice,

        color: "#402A2C",
      },
      {
        id: 2,
        title: "History",
        link: "/dashboard/finance/1/history",
        Icon: PiInvoice,

        color: "#402A2C",
      },
    ],
  },
];


export const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];
