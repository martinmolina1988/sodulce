import Home from "../page/Home";
import Error404 from "../page/error404";
import Upload from "../components/upload";
import Producto from "../components/Producto/Producto";
import CrearProducto from "../components/CrearProducto/CrearProducto";
import ListProducts from "../components/ListProducts";


export default [

    {
        path: "/listproducts",
        exact: true,
        page: ListProducts
    },
    {
        path: "/crearproducto",
        exact: true,
        page: CrearProducto,
    },
    {
        path: "/producto",
        exact: true,
        page: Producto,
    },
    {
        path: "/upload",
        exact: true,
        page: Upload,
    },

    {
        path: "/",
        exact: true,
        page: Home,
    },
    {
        path: "*",
        page: Error404
    },
];

