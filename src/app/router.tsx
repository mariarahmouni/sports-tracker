import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Players from "../pages/Players";
import Profile from "../pages/Profile";
import Teams from "../pages/Teams";
// https://reactrouter.com/en/main/routers/create-browser-router

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/Profile",
        element: <Profile />
    },
    {
        path: "/Players",
        element: <Players />
    },
    {
        path: "/Teams",
        element: <Teams />
    },
]);

export default router;
