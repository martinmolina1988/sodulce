import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import "./NavBar.scss";
import { buscoLogo } from '../../api/ProducsApi';
export default function NavBar(props) {
    const { children, productsCart, precio } = props;
    const [logo, setLogo] = useState(null)

    buscoLogo().then(response => {

        if (response)
            setLogo(response?.data[0].secure_url)
    })
    return (
        <div className="sticky-top encabezado">


            <Navbar bg="light" expand="lg" className="encabezado " >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse justify-content-around ">
                    <Nav className="mr-auto">

                        <Navbar.Brand href="#home" className="d-flex justify-content-around "> SoDulce! </Navbar.Brand>
                        <Link className="link" to="/">  Postres </Link>
                        <Link className="link " to="/sobremi">  Sobre mi </Link>
                        <Link className="link " to="/contacto">  Contacto </Link>
                        {children}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="triang" />
        </div>
    )
}
