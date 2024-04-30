import React from "react";
import { TbCategory } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const locate = useLocation();
  const path = locate.pathname;
  const home = path === "/";
  const shop = path === "/shop";
  const fruit = path === "/fruit";
  const milk = path === "/milk";
  const vegetable = path === "/vegetable";
  const basket = path === "/basket";
  const user = path === "/user";
  return (
    <footer>
      <Link
        to="/home"
        style={
          home || shop || fruit || milk || vegetable
            ? { color: "#7203FF" }
            : { color: "rgb(149, 134, 168)" }
        }
      >
        <TbCategory />
      </Link>
      <Link
        to="/basket"
        style={basket ? { color: "#7203FF" } : { color: "rgb(149, 134, 168)" }}
      >
        <FaCartShopping />
      </Link>
      <Link
        to="/#"
        style={user ? { color: "#7203FF" } : { color: "rgb(149, 134, 168)" }}
      >
        <FaUser />
      </Link>
    </footer>
  );
};

export default Footer;
