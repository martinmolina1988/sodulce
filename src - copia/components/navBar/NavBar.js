import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import triang from "../../assets/png/top-triang.png"
import "./NavBar.scss";
import { buscoLogo } from '../../api/ProducsApi';
export default function NavBar() {

    const [logo, setLogo] = useState(null)

    buscoLogo().then(response => {

        console.log(response)
        if (response)
            setLogo(response?.data[0].secure_url)
    })
    return (
        <div className="sticky-top encabezado">
            <Navbar bg="light" expand="lg" className="encabezado " >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse justify-content-around ">
                    <Nav className="mr-auto">

                        <Navbar.Brand href="#home" className="d-flex justify-content-around ">SoDulce!</Navbar.Brand>
                        <Link className="link" to="/postres">  Postres </Link>
                        <Link className="link" to="/sobremi">  Sobre mi </Link>
                        <Link className="link" to="/cursos">  Cursos </Link>
                        <Link className="link" to="/novedades">  Preguntas frecuentes </Link>
                        <Link className="link" to="/contacto">  Contacto </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="triang"></div>

        </div>
    )
}
