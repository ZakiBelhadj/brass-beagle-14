// icons
// @material-ui/icons
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import DashboardIcon from "@material-ui/icons/Poll";
import DashboardIcon from "@material-ui/icons/Web";
import InboxIcon from "@material-ui/icons/CloudDownload";
import ArchiveIcon from "@material-ui/icons/SaveAlt";
import OutboxIcon from "@material-ui/icons/CloudUpload";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/SettingsRounded";

// views
// core components/views
import DashboardView from "views/Dashboard/Dashboard.jsx";
import InboxView from "views/Inbox/Inbox.jsx";
import ArchiveView from "views/Archive/Archive.jsx";
import OutboxView from "views/Outbox/Outbox.jsx";
import ContactsView from "views/Contacts/Contacts.jsx";
import SettingsView from "views/Settings/Settings.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: DashboardIcon,
    component: DashboardView
  },
  {
    path: "/inbox",
    sidebarName: "Inbox",
    navbarName: "Inbox",
    icon: InboxIcon,
    component: InboxView
  },
  {
    path: "/archive",
    sidebarName: "Archive",
    navbarName: "Archive",
    icon: ArchiveIcon,
    component: ArchiveView
  },
  {
    path: "/outbox",
    sidebarName: "Outbox",
    navbarName: "Outbox",
    icon: OutboxIcon,
    component: OutboxView
  },
  {
    path: "/contacts",
    sidebarName: "Contacts",
    navbarName: "Contacts",
    icon: ContactsIcon,
    component: ContactsView
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: SettingsIcon,
    component: SettingsView
  },
  {
    redirect: true,
    path: "/",
    to: "/dashboard",
    navbarName: "Redirect"
  }
];

export default dashboardRoutes;
