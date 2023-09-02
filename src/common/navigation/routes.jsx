import Home from "../../pages/home/home.jsx";
import Dashboard from "../../pages/dashboard/dashboard.jsx";
import Student from "../../pages/student/student.jsx";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InboxIcon from "@mui/icons-material/MoveToInbox.js";

const routes = [
    {
        name: "Home",
        key: 'home',
        path: '/home',
        component: <Home/>,
        icon: <DashboardIcon/>,
    },
    {
        name: "Dashboard",
        key: 'dashboard',
        path: '/dashboard',
        component: <Dashboard/>,
        icon: <BookmarkIcon/>,
    },
    {
        name: "Student",
        key: 'student',
        path: '/student',
        component: <Student/>,
        icon: <InboxIcon/>,
    }
]

export default routes;
