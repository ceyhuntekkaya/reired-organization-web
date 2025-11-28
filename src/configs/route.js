import {
  IconUsers,
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
import App from "../App";
import AllPages from "../app/AllPages";
import ProjectList from "../app/ProjectList";
import CampusList from "../app/CampusList";



import SchoolProjectDetail from "../app/participant/SchoolProjectDetail";
import SchoolProjectList from "../app/participant/SchoolProjectList";
import UploadFile from "../app/storage/UploadFile";

const dashboardRoutes = [
  {
    path: "/page/all",
    name: "Hakkımızda",
    icon: IconUsers,
    component: AllPages,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/about-us",
    name: "Hakkımızda",
    icon: IconUsers,
    component: AboutUs,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/adventure",
    name: "Projeler",
    icon: IconUsers,
    component: Adventure,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/adventure-detail/:id",
    name: "Okul Projeleri",
    icon: IconUsers,
    component: AdventureDetail,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/cart-list",
    name: "Başvurular",
    icon: IconUsers,
    component: CartList,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/check-out",
    name: "Kurumlar",
    icon: IconUsers,
    component: Checkout,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/contact",
    name: "Raporlamalar",
    icon: IconUsers,
    component: Contact,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/error",
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
    path: "/page/sing-up",
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
    path: "/page/travel/grid",
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
    path: "/page/travel/one",
    name: "Dash",
    icon: IconUsers,
    component: TravelListOne,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/travel/two",
    name: "Dashboard",
    icon: IconUsers,
    component: TravelListTwo,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },

  {
    path: "/page/login",
    name: "Dashboard",
    icon: IconUsers,
    component: Login,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },


  {
    path: "/",
    name: "Dashboard",
    icon: IconUsers,
    component: App,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-2.jpg",
    fullScreen: false
  },


  {
    path: "/upload",
    name: "Dashboard",
    icon: IconUsers,
    component: UploadFile,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-2.jpg",
    fullScreen: false
  },





  {
    path: "/:id",
    name: "Dashboard",
    icon: IconUsers,
    component: CampusList,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/page/project/:id",
    name: "Dashboard",
    icon: IconUsers,
    component: ProjectList,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },


  {
    path: "/user/school/project/detail/:id",
    name: "Dashboard",
    icon: IconUsers,
    component: SchoolProjectDetail,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },
  {
    path: "/user/school/project/list",
    name: "Dashboard",
    icon: IconUsers,
    component: SchoolProjectList,
    menu: true,
    location: "",
    overPath: "EXAMS",
    auth: ["SUPER_ADMIN", "ADMIN"],
    sort: 0,
    sidePanelVisible: true,
    image:"../img/bg/adventure-1.jpg",
    fullScreen: false
  },

];

export default dashboardRoutes;
