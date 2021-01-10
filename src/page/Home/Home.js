import React, { useState, useEffect } from 'react';
import Encabezado from '../../components/Encabezado';
import Footer from '../../components/Footer';
import ListProducts from '../../components/ListProducts';

import image from "../../assets/png/add.png"
import arrow from "../../assets/png/arrow.png"
import "./Home.scss";
import Upload from '../../components/upload';
import CrearProducto from '../../components/CrearProducto/CrearProducto';
import AvatarEditor from 'react-avatar-editor';
import { Button } from 'react-bootstrap';
import Signin from '../../components/Signin';
import useAuth from '../../hooks/useAuth';
import TextEditor from '../../components/textEditor';
import SobreMi from '../../components/sobremi/SobreMi';


export default function Home() {

    const [showModal, setShowModal] = useState(false)
    const [show, setShow] = useState(false)
    const user = useAuth();
    const [showText, setShowText] = useState(false)
    console.log(user)
    const add = () => {
        setShowModal(true)
    }

    const onClick = () => {
        setShow(true)
    }

    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (

        <div className="container  h-100">
            {user ? (
                <Button className="boton-ingresar"  >Salir</Button>
            ) : (
                    <Button className="boton-ingresar" onClick={onClick} >Ingresar</Button>
                )
            }
            <Signin show={show} setShow={setShow} />
            <Encabezado user={user} />

            <div className="wrapper">
                <div id="postres" className="titulo">
                    <h1 className="mx-auto">Postres</h1>
                </div>

            </div>
            {user && <img onClick={add} className="add" src={image} alt="agregar producto" />
            }
            <ListProducts />

            <div className="wrapper">
                <div className="titulo">
                    <h1 id="sobremi" className="mx-auto">Sobre mi</h1>
                </div>
            </div>
            { user &&
                <Button onClick={() => setShowText(true)}>Editar Sobre mi</Button>
            }

            <SobreMi user={user} />

            <h4 className="opinion">Tu opinion importa! Deja un comentario:</h4>
            <div className="fb-comments" data-href="https://martinmolina1988.github.io/sodulce/" data-width="100%" data-numposts="5"></div>
            <div id="contacto" >
                <Footer />
            </div>
            <TextEditor show={showText} setShow={setShowText} user={user} />
            <CrearProducto show={showModal} setShow={setShowModal} />
            <div className="scroll-to-top">

                {isVisible &&
                    <div onClick={scrollToTop}>
                        <img className="arrow" src={arrow} alt='Go to top' />
                    </div>}
            </div>
        </div>
    )
}
