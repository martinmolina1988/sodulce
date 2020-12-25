import Home from "../page/Home";



export default [


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

