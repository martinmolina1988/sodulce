import SobreMi from "../components/sobremi/SobreMi";
import ToTop from "../components/toTop";
import Home from "../page/Home";
import Contacto from "../components/Contacto";


// eslint-disable-next-line import/no-anonymous-default-export
export default [


    {
        path: "/contacto",
        exact: true,
        page: Contacto
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

