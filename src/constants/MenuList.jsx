import {
  AccountCircle,
  Badge,
  Ballot,
  Chat,
  Dashboard,
  Favorite,
  Groups,
  Notifications,
  PlaylistAddCheckCircle,
  UploadFileRounded,
  Work,
} from "@mui/icons-material";

export const MenuList = [
  {
    label: "Dashboard",
    key: "dashboard",
    link: "/dashboard",
    icon: <Dashboard fontSize="large" />,
  },
  {
    label: "Profile",
    key: "profile",
    link: "/profile",
    icon: <AccountCircle fontSize="large" />,
  },
  {
    label: "My Jobs",
    key: "my-jobs",
    link: "/my-jobs",
    icon: <Work fontSize="large" />,
  },
  {
    label: "Submit Job",
    key: "submit-job",
    link: "/submit-job",
    icon: <UploadFileRounded fontSize="large" />,
  },
  {
    label: "Job Applicants",
    key: "job-applicants",
    link: "/job-applicants",
    icon: <PlaylistAddCheckCircle fontSize="large" />,
  },
  {
    label: "Candidates Shortlist",
    key: "candidates-shortlist",
    link: "/candidates-shortlist",
    icon: <Favorite fontSize="large" />,
  },
  {
    label: "Candidates Alerts",
    key: "candidates-alerts",
    link: "/candidates-alerts",
    icon: <Notifications fontSize="large" />,
  },
  {
    label: "My Orders",
    key: "my-orders",
    link: "/my-orders",
    icon: <Ballot fontSize="large" />,
  },
  {
    label: "Messages",
    key: "messages",
    link: "/messages",
    icon: <Chat fontSize="large" />,
  },
  {
    label: "Meetings",
    key: "meetings",
    link: "/meetings",
    icon: <Groups fontSize="large" />,
  },
  {
    label: "Employees",
    key: "employees",
    link: "/employees",
    icon: <Badge fontSize="large" />,
  },
];
