import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Shop",
    path: "/shop",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactus",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
