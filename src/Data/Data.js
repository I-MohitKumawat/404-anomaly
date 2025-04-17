// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";



// Sidebar Data
export const SidebarData = [
  // {
  //   icon: UilEstate,
  //   heading: "Home",
  // },
  {
    icon: UilClipboardAlt,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "ChatBot",
  },
  {
    icon: UilPackage,
    heading: "Inspiration",
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Stress",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "7.1 / 10",
    png: null,
    series: [
      {
        name: "Stress Level",
        data: [3, 5, 6, 7, 8, 7.5, 7.1],
      },
    ],
  },
  {
    title: "Fitness",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "8.3 / 10",
    png: null,
    series: [
      {
        name: "Fitness Score",
        data: [6, 6.5, 7, 8, 8.5, 9, 8.3],
      },
    ],
  },
  {
    title: "Study Stress",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "6.2 / 10",
    png: null,
    series: [
      {
        name: "Study Stress",
        data: [2, 3, 4, 6, 7, 6.5, 6.2],
      },
    ],
  },
];


