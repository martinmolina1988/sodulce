import React, { useState, useEffect } from 'react';
import ListProducts from '../../components/ListProducts';

import image from "../../assets/png/add.png"
import "./Home.scss";
import Upload from '../../components/upload';
import CrearProducto from '../../components/CrearProducto/CrearProducto';
import useAuth from '../../hooks/useAuth';
import BasicLayout from '../../components/BasicLayout/BasicLayout';


export default function Home() {

    const [showModal, setShowModal] = useState(false)
    const user = useAuth();
    const add = () => {
        setShowModal(true)
    }



    return (
        <BasicLayout>

            <div className="container  h-100">

                <div className="wrapper">
                    <div id="postres" className="titulo">
                        <h1 className="mx-auto">Postres</h1>
                    </div>

                </div>
                {user && <img onClick={add} className="add" src={image} alt="agregar producto" />
                }
                <ListProducts />



                <CrearProducto show={showModal} setShow={setShowModal} />

            </div>
        </BasicLayout>
    )
}
