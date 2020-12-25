import React from 'react'

import logocompleto from "../../assets/images/logo-completo.png"
import banner from "../../assets/images/Banner.jpg"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./Encabezado.scss";

export default function Encabezado() {
    return (
        <div className="container">

            <img src={logocompleto} id="logo" className="img" alt="Banner" />

            <Navbar bg="light" expand="lg" className="encabezado" >
                <Navbar.Brand href="#home" className="d-flex justify-content-around">SoDulce!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse justify-content-around">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Sobre mi!</Nav.Link>
                        <Nav.Link href="/">Productos</Nav.Link>
                        <Nav.Link href="/">Cursos</Nav.Link>
                        <Nav.Link href="/">Novedades</Nav.Link>
                        <Nav.Link href="/">Contacto</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

            <img src={banner} className="banner d-block w-100" alt="Banner" />


        </div>
    )
}
