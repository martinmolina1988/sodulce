import Cloud from "../components/cloud";
import TextEditor from "../components/textEditor";
import ToTop from "../components/toTop";
import Home from "../page/Home";



export default [


    {
        path: "/sodulce/editor",
        exact: true,
        page: TextEditor,
    },
    {
        path: "/totop",
        exact: true,
        page: ToTop,
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

