import LayoutUser from '../layouts/LayoutUser';

//User pages
import Home from "../pages/User/Home";
import UploadImages from "../pages/User/UploadImages";

//Other
import Error404 from "../pages/Error404";

const routes = [
    {
        path: "/",
        exact: false,
        component: LayoutUser,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/upload",
                exact: true,
                component: UploadImages
            },
            {
                component: Error404
            }
        ]

    }
]
export default routes