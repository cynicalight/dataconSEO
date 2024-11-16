import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "主页",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "关于",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "博客",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "支持",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "其他",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "关于",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "联系",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "博客网格",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "博客边栏",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "博客细节",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "登录",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "注册",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "错误",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
