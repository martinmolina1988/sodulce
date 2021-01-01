import Cloud from "../components/cloud";
import TextEditor from "../components/textEditor";
import Home from "../page/Home";



export default [


    {
        path: "/sodulce/editor",
        exact: true,
        page: TextEditor,
    },
    {
        path: "/sodulce/cloud",
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

