import {
  IconAperture,
  IconClipboardText,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Administrasi",
  },
  {
    id: uniqueId(),
    title: "Report Kariawan",
    icon: IconClipboardText,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Data Kariawan",
    icon: IconUser,
    href: "/utilities/shadow",
  },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  {
    navlabel: true,
    subheader: "Management System",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Management User",
    icon: IconAperture,
    href: "/users-management",
  },
];

export default Menuitems;
