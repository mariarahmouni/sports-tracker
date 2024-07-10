import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../features/dashboard/Dashboard";
// https://reactrouter.com/en/main/routers/create-browser-router

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
            }
        ]
    }
]);

export default router;
