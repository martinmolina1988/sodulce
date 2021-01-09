import React, { useEffect, useState } from 'react'
import { Add, Edit } from "../../utils/icons";
import logocompleto from "../../assets/images/logo-completo.png"
import banner from "../../assets/images/Banner.jpg"
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDropzone } from "react-dropzone";

import "./Encabezado.scss";
import { updateBanner, buscoBanner } from '../../api/ProducsApi';
import { toast } from 'react-toastify';

export default function Encabezado(props) {
    const [loadBanner, setLoadBanner] = useState(false);
    const { user } = props;
    const [newImageFile, setNewImageFile] = useState(null);
    const [banner, setBanner] = useState(null);
    const [newImageUrl, setNewImageUrl] = useState(
        null
    );
    const onDropNewImage = (acceptedFile) => {
        const file = acceptedFile[0];
        setNewImageUrl(URL.createObjectURL(file));
        setNewImageFile(file);
    };

    const { getInputProps: getInputNewImageProps, getRootProps: getRootNewImageProps, } = useDropzone({
        accept: "image/jpeg, image/png, image/bmp",
        noKeyboard: true,
        multiple: false,
        onDrop: onDropNewImage

    })

    const onSubmit = async () => {
        console.log("Click")
        if (newImageFile) {
            await updateBanner(newImageFile).catch(() => {
                toast.error("Error al subir el avatar");
            })
        }
    }

    useEffect(() => {
        buscoBanner().then(response => {
            setBanner(response?.data[0].secure_url)
            if (response)
                setLoadBanner(true)
        })
    }, [user])
    return (<>
        {!loadBanner ? (

            <div className="row justify-content-center h-100 "> <div className="lds-heart "><div></div></div></div>
        ) : (

                <div className="container">

                    <img src={logocompleto} id="logo" className="img" alt="Banner" />

                    <Navbar bg="light" expand="lg" className="encabezado" >
                        <Navbar.Brand href="#home" className="d-flex justify-content-around">SoDulce!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse justify-content-around">
                            <Nav className="mr-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#sobremi">Sobre mi!</Nav.Link>
                                <Nav.Link href="#postres">Postres</Nav.Link>
                                <Nav.Link href="#">Cursos</Nav.Link>
                                <Nav.Link href="#">Novedades</Nav.Link>
                                <Nav.Link href="#contacto">Contacto</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    {user &&
                        <><div className="banner" {...getRootNewImageProps()}>
                            <h4>Cambiar banner</h4>
                            <input {...getInputNewImageProps()} />
                            <Add />
                            <img className="image" src={newImageUrl} alt="" />
                        </div>
                            <Button onClick={onSubmit}>Subir</Button>
                        </>}
                    <img src={banner} className="banner d-block w-100" alt="Banner" />

                </div>)}</>
    )
}
