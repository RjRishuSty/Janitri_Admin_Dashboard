// src/constants/sidebarLinks.js (or inside Sidebar.jsx if preferred)
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WarningIcon from '@mui/icons-material/Warning';

export const sidebarLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon fontSize='medium' sx={{color:'custom.icon'}} />,
  },
  {
    label: "Installation",
    path: "/installation",
    icon: <HomeRepairServiceIcon fontSize='medium' sx={{color:'custom.icon'}} />,
  },
  {
    label: "Service Logs",
    path: "/service",
    icon: <BuildIcon fontSize='medium' sx={{color:'custom.icon'}} />,
  },
  {
    label: "AMC/CMC Tracker",
    path: "/contracts",
    icon: <AssignmentIcon fontSize='medium' sx={{color:'custom.icon'}} />,
  },
  {
    label: "Alerts",
    path: "/alerts",
    icon: <WarningIcon fontSize='medium' sx={{color:'custom.icon'}} />,
  },
];
