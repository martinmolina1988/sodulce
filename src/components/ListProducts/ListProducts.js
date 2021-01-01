import React, { useEffect, useState } from 'react'
import "./ListProducts.scss"
import { map } from "lodash";
import whatsapp from "../../assets/png/whatsapp.png"
import ShowMoreText from 'react-show-more-text';
import { listaProductos } from '../../api/ProducsApi';
import { Button } from 'react-bootstrap';
import BasicModal from '../modal/basicModal/BasicModal';
import EditarProducto from '../EditarProducto';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
export default function ListProducts(props) {
    const [postre, setPostre] = useState(null)
    const [producto, setProducto] = useState(null)
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [inicio, setInicio] = useState(true);
    const [formData, setFormData] = useState({});
    const user = useAuth();
    useEffect(() => {

        listaProductos().then(response => {
            setPostre(response?.data)
        })
        setInicio(true)
    }, [inicio])

    const onClick = () => {

        setShowEdit(true);

    }
    const phone = '541134054422'
    const msg = encodeURIComponent("Quisiera tener más información acerca del producto " + formData.producto)
    const href = `https://wa.me/${phone}/?text=${msg}`

    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }
    return (

        <>{postre &&
            <div className="container" >
                < div className="card-columns " >
                    {postre.map(name => (





                        <div className="card text-center" onClick={() => { setShow(true); setProducto(name.producto) }} >
                            <img className="card-img-top" src={name.principal} alt="Card image cap" />
                            <div onClick={(e) => e.stopPropagation()} className="card-body">
                                <h5 className="card-title">{name.producto}</h5>

                                <ShowMoreText
                                    /* Default options */
                                    lines={2}
                                    more='Mostrar más'
                                    less='Mostrar menos'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'

                                    expanded={false}
                                    width={280}
                                >


                                    <p className="card-text">{name.description}</p>
                                </ShowMoreText>
                            </div>
                            <p className="text-muted">
                                Precio <cite title="Source Title">${name.precio}</cite>
                            </p>
                            {user ? (

                                <Button variant={"danger"} onClick={(e) => { e.stopPropagation(); setFormData(name); onClick() }}>Editar</Button>
                            ) : (<>
                                <Button variant={"success"} onClick={(e) => { e.stopPropagation(); setFormData(name); }}>
                                    <a onClick={(e) => { e.stopPropagation(); setFormData(name); }}
                                        target="_blank"
                                        href={href}
                                    >
                                        <img src={whatsapp} alt="" />Encargar
                                </a>

                                </Button>


                            </>
                                )}
                        </div>
                    ))}
                </div>
                <BasicModal show={show} setShow={setShow} producto={producto} />
                <EditarProducto show={showEdit} formData={formData} setShow={setShowEdit} />

            </div >
        }
        </>

    )
}
