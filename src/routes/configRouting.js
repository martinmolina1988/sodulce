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
        path: "/",
        exact: true,
        page: Home,
    },
    {
        path: "*",
        page: Home
    },
];

