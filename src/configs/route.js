

import {
  IconAdd,
  IconAlert, IconBuy,
  IconCalendar,
  IconComponents,
  IconDashboard,
  IconDocumentation, IconGrayArchive, IconGraySnooze, IconHomeNavigation,
  IconKanban, IconListOpen, IconMap,
  IconMessages,
  IconPage, IconPlus,
  IconSettings,
  IconTables, IconTask, IconTheme,
  IconTransactions, IconTrash,
  IconUsers,
  IconWidgets
} from "../app/components/Icons";
import AboutUs from "../app/AboutUs";
import Adventure from "../app/Adventure";
import AdventureDetail from "../app/AdventureDetail";
import CartList from "../app/CartList";
import Checkout from "../app/Checkout";
import Contact from "../app/Contact";
import Error from "../app/Error";
import Login from "../app/Login";
import TravelListGrid from "../app/TravelListGrid";
import TravelListOne from "../app/TravelListOne";
import TravelListTwo from "../app/TravelListTwo";
import SignUp from "../app/SignUp";



const dashboardRoutes = [




  {
    path: "/about-us",
    name: "Hakkımızda",
    icon: IconUsers,
    component: AboutUs,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/adventure",
    name: "Projeler",
    icon: IconUsers,
    component: Adventure,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/adventure-detail",
    name: "Okul Projeleri",
    icon: IconUsers,
    component: AdventureDetail,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/cart-list",
    name: "Başvurular",
    icon: IconUsers,
    component: CartList,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/check-out",
    name: "Kurumlar",
    icon: IconUsers,
    component: Checkout,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/contact",
    name: "Raporlamalar",
    icon: IconUsers,
    component: Contact,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/error",
    name: "Projeler",
    icon: IconUsers,
    component: Error,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: false,
    fullScreen: false
  },
  {
    path: "/sing-up",
    name: "Okul Projeleri",
    icon: IconUsers,
    component: SignUp,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: false,
    fullScreen: false
  },
  {
    path: "/travel/grid",
    name: "Projeler",
    icon: IconUsers,
    component: TravelListGrid,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: false,
    fullScreen: false
  },


  {
    path: "/travel/one",
    name: "Dash",
    icon: IconUsers,
    component: TravelListOne,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },
  {
    path: "/travel/two",
    name: "Dashboard",
    icon: IconUsers,
    component: TravelListTwo,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },

  {
    path: "/login",
    name: "Dashboard",
    icon: IconUsers,
    component: Login,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    fullScreen: false
  },

];

export default dashboardRoutes;
