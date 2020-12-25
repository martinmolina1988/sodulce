import React, { useState } from 'react';
import Encabezado from '../../components/Encabezado';
import Footer from '../../components/Footer';
import ListProducts from '../../components/ListProducts';

import image from "../../assets/png/add.png"
import "./Home.scss";
import Upload from '../../components/upload';
import CrearProducto from '../../components/CrearProducto/CrearProducto';
import AvatarEditor from 'react-avatar-editor';
import { Button } from 'react-bootstrap';
import Signin from '../../components/Signin';
import useAuth from '../../hooks/useAuth';


export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const [show, setShow] = useState(false)
    const user = useAuth();
    console.log(user)
    const add = () => {
        setShowModal(true)
    }

    const onClick = () => {
        setShow(true)
    }
    return (
        <div className="container  h-100">
            {user ? (
                <Button className="boton-ingresar"  >Salir</Button>
            ) : (
                    <Button className="boton-ingresar" onClick={onClick} >Ingresar</Button>
                )
            }
            <Signin show={show} setShow={setShow} />
            <Encabezado />

            <div className="wrapper">
                <div className="titulo">
                    <h1 className="mx-auto">Postres</h1>
                </div>

            </div>
            {user && <img onClick={add} className="add" src={image} alt="agregar producto" />
            }
            <ListProducts />
            <Footer />
            <CrearProducto show={showModal} setShow={setShowModal} />
        </div>
    )
}
