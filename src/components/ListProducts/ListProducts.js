import React, { useEffect, useState } from 'react'
import "./ListProducts.scss"
import { map } from "lodash";


import { listaProductos } from '../../api/ProducsApi';
import { Button } from 'react-bootstrap';
import BasicModal from '../modal/basicModal/BasicModal';
import EditarProducto from '../EditarProducto';
import useAuth from '../../hooks/useAuth';
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

    return (

        <>{postre &&
            <div className="container" >
                < div className="card-columns " >
                    {postre.map(name => (





                        <div className="card text-center" onClick={() => { setShow(true); setProducto(name.producto) }} >
                            <img className="card-img-top" src={name.principal} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{name.producto}</h5>
                                <p className="card-text">{name.description}</p>
                            </div>
                            <p className="text-muted">
                                Precio <cite title="Source Title">${name.precio}</cite>
                            </p>
                            {user ? (

                                <Button variant={"danger"} onClick={(e) => { e.stopPropagation(); setFormData(name); onClick() }}>Editar</Button>
                            ) : (
                                    <Button variant={"success"} onClick={(e) => { e.stopPropagation(); setFormData(name); }}>Encargar</Button>

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
