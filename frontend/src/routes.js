// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import Main from "views/Dashboard/Main";
import Login from "views/Dashboard/Main/Login";
import Register from "views/Dashboard/Main/Register";
import BoxModel from "views/Dashboard/Main/BoxModel.jsx";
import Login2 from "views/Dashboard/Main/Login2";
import Polygon from "views/Dashboard/Main/Polygon";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import { CalendarIcon } from "@chakra-ui/icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Main,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Login,
    layout: "/admin",
  },
  {
    path: "/logn-2",
    name: "Login 2",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Login2,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Register,
    layout: "/admin",
  },
  {
    path: "/boxModel",
    name: "BoxModel",
    rtlName: "لوحة القيادة",
    icon: <CalendarIcon color="inherit" />,
    component: BoxModel,
    layout: "/admin",
  },
  {
    path: "/polygon",
    name: "Polygon",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Polygon,
    layout: "/admin",
  },
];
export default dashRoutes;
