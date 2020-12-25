import React, { useEffect, useState } from 'react';
import "./Producto.scss"
import i1 from "../../assets/images/1.jpg"
import i2 from "../../assets/images/2.jpg"
import i3 from "../../assets/images/3.jpg"
import i4 from "../../assets/images/4.jpg"

import Carousel from 'react-bootstrap/Carousel'
import { listaFotos } from '../../api/ProducsApi';
// install Swiper components
export default function Producto(props) {
    const { producto } = props;
    const [image, setImage] = useState(null)
    useEffect(() => {


        listaFotos(producto).then(response => {
            setImage(response)
            console.log(response)
        })
    }, [])
    return (
        <div className="container">
            <Carousel>
                {image?.data.map(name => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={name.imageURL}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>
    )
}
