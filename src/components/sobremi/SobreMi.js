import React, { useEffect, useState } from 'react'
import { Markup } from 'interweave';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { buscoSobremi } from '../../api/ProducsApi';
import "./SobreMi.scss";


export default function SobreMi() {
    const [sobre, setSobre] = useState(null)
    useEffect(() => {

        buscoSobremi().then(response => {
            setSobre(response.data[0].sobremi)
        })
    }, [])
    return (
        <div className="sobre-mi">
            {sobre &&
                <Markup content={sobre} />


            }
        </div>
    )
}
