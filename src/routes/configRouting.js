import Cloud from "../components/cloud";
import Home from "../page/Home";



export default [


    {
        path: "/cloud",
        exact: true,
        page: Cloud,
    },
    {
        path: "/",
        exact: true,
        page: Home,
    },
    {
        path: "*",
        page: Home
    },
];

