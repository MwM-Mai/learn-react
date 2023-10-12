// 需要安装 react-router-comfig

import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/profile";
import User from "../pages/user";
import Product from "../pages/product";
import Login from "../pages/login";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/login",
    element: <Login />
  }
]

export default routes