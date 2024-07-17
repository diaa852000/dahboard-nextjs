import {
  Database,
  HelpCircle,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  UserCircle,
  Users2,
} from "lucide-react";

const routes = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: LineChart,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: Users2,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: Database,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: Package,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: Package2,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: ShoppingCart,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: UserCircle,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: HelpCircle,
      },
    ],
  },
];
export default routes;
