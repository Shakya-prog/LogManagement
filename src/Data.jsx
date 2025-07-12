import {
  UilEstate,
  UilExclamationTriangle,
  UilChart,
  UilBell,
  UilHistory,
  UilClipboardAlt,
} from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilExclamationTriangle,
    heading: "Error Logs",
  },
  {
    icon: UilBell,
    heading: "Alerts",
  },
  {
    icon: UilHistory,
    heading: "Activity",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Errors",
    color: {
      background: "linear-gradient(180deg, #ff6b6b 0%, #ff8787 100%)",
      boxShadow: "0px 6px 16px rgba(255, 107, 107, 0.4)",
    },
    barValue: 80,
    value: "128",
    png: UilExclamationTriangle,
    series: [
      {
        name: "Critical Errors",
        data: [10, 15, 12, 17, 14, 20, 22],
      },
    ],
  },
  {
    title: "Warnings",
    color: {
      background: "linear-gradient(180deg, #ffd43b 0%, #ffe066 100%)",
      boxShadow: "0px 6px 16px rgba(255, 212, 59, 0.45)",
    },
    barValue: 60,
    value: "342",
    png: UilBell,
    series: [
      {
        name: "Warnings",
        data: [30, 35, 28, 40, 38, 45, 50],
      },
    ],
  },
  {
    title: "Log Entries",
    color: {
      background: "linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%)",
      boxShadow: "0px 6px 16px rgba(59, 130, 246, 0.4)",
    },
    barValue: 90,
    value: "2,437",
    png: UilClipboardAlt,
    series: [
      {
        name: "Log Entries",
        data: [200, 250, 300, 400, 350, 370, 567],
      },
    ],
  },
];

export const UpdatesData = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Anna Keller",
    notification: "added a new error log entry in the Auth System.",
    time: "2 minutes ago",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Carter",
    notification: "reviewed the latest log reports from the API Gateway.",
    time: "15 minutes ago",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Monica Green",
    notification: "flagged a critical warning in the Database Service.",
    time: "1 hour ago",
  },
];
