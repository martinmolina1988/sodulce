import Cloud from "../components/cloud";
import Postres from "../components/postres";
import SobreMi from "../components/sobremi/SobreMi";
import TextEditor from "../components/textEditor";
import ToTop from "../components/toTop";
import Home from "../page/Home";



export default [


    {
        path: "/postres",
        exact: true,
        page: Postres,
    },
    {
        path: "/sobremi",
        exact: true,
        page: SobreMi,
    },
    {
        path: "/sodulce/totop",
        exact: true,
        page: ToTop,
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

