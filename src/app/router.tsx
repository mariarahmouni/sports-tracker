import { createBrowserRouter } from "react-router-dom";
import  Dashboard  from "../components/dashboard/Dashboard";
// https://reactrouter.com/en/main/routers/create-browser-router

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/Leagues",
            },
            {
                path: "/Players",
            },
            {
                path: "/Profile"
            }
        ]
    }
]);

export default router;
