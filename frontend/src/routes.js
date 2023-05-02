import Main from "views/Dashboard/Main";
import Shape from "views/Dashboard/Main/Shape.jsx"
import BoxModel from "views/Dashboard/Main/BoxModel.jsx";
import Login from "views/Dashboard/Main/Login.jsx";
import Signup from "views/Dashboard/Main/Signup.jsx";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
} from "components/Icons/Icons";
import { CalendarIcon } from "@chakra-ui/icons";

var dashRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Login,
    layout: "/",
  },
  {
    path: "/signup",
    name: "Signup",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Signup,
    layout: "/",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Main,
    layout: "/dashboard",
  },
  {
    path: "/shape",
    name: "Shape",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Shape,
    layout: "/dashboard",
  },
  {
    path: "/boxModel",
    name: "BoxModel",
    rtlName: "لوحة القيادة",
    icon: <CalendarIcon color="inherit" />,
    component: BoxModel,
    layout: "/dashboard",
  },
];
export default dashRoutes;
