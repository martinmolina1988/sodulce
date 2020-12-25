import Home from "../page/Home";
import Error404 from "../page/error404";
import Upload from "../components/upload";
import Producto from "../components/Producto/Producto";
import CrearProducto from "../components/CrearProducto/CrearProducto";
import ListProducts from "../components/ListProducts";


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

